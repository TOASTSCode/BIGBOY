
import json
import os
import sys
import urllib.request
import urllib.parse

def safe_filename(url, index):
    parsed = urllib.parse.urlparse(url)
    name = os.path.basename(parsed.path)

    if not name:
        name = f"asset_{index}"

    # Remove characters that Windows doesn't like
    invalid = '<>:"/\\|?*'
    name = "".join("_" if c in invalid else c for c in name)

    return name

def main():
    if len(sys.argv) < 2:
        print("Usage:")
        print("  python download_har_assets.py network.har")
        return

    har_file = sys.argv[1]
    output_dir = "downloaded_assets"

    os.makedirs(output_dir, exist_ok=True)

    with open(har_file, "r", encoding="utf-8") as f:
        har = json.load(f)

    entries = har.get("log", {}).get("entries", [])

    print(f"Found {len(entries)} network requests.")
    print(f"Downloading into: {output_dir}")
    print()

    downloaded = 0
    skipped = 0
    failed = 0
    used_names = {}

    for index, entry in enumerate(entries, 1):
        request = entry.get("request", {})
        url = request.get("url")

        if not url:
            continue

        # Only download normal HTTP(S) requests
        if not url.startswith(("http://", "https://")):
            skipped += 1
            continue

        filename = safe_filename(url, index)

        # Avoid overwriting files with the same basename
        if filename in used_names:
            used_names[filename] += 1
            base, ext = os.path.splitext(filename)
            filename = f"{base}_{used_names[filename]}{ext}"
        else:
            used_names[filename] = 1

        destination = os.path.join(output_dir, filename)

        print(f"[{index}/{len(entries)}] {url}")

        try:
            req = urllib.request.Request(
                url,
                headers={
                    "User-Agent": "Mozilla/5.0"
                }
            )

            with urllib.request.urlopen(req, timeout=30) as response:
                data = response.read()

            with open(destination, "wb") as f:
                f.write(data)

            print(f"    -> {destination} ({len(data):,} bytes)")
            downloaded += 1

        except Exception as e:
            print(f"    FAILED: {e}")
            failed += 1

    print()
    print("========== DONE ==========")
    print(f"Downloaded: {downloaded}")
    print(f"Skipped:    {skipped}")
    print(f"Failed:     {failed}")
    print(f"Output:     {os.path.abspath(output_dir)}")

if __name__ == "__main__":
    main()
