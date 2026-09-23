import os
import sys
import urllib.request

CHUNK_SIZE = 1024 * 1024  # 1 MB

def download(url):
    filename = url.split("/")[-1].split("?")[0]

    if not filename:
        filename = "download.bin"

    os.makedirs("BigFiles", exist_ok=True)
    output = os.path.join("BigFiles", filename)

    print(f"\nDownloading: {filename}")
    print(f"URL: {url}")
    print(f"Saving to: {output}\n")

    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0"
        }
    )

    with urllib.request.urlopen(request, timeout=60) as response:
        total = response.headers.get("Content-Length")
        total = int(total) if total else 0

        downloaded = 0

        with open(output, "wb") as f:
            while True:
                chunk = response.read(CHUNK_SIZE)

                if not chunk:
                    break

                f.write(chunk)
                downloaded += len(chunk)

                if total:
                    percent = downloaded * 100 / total
                    print(
                        f"\r{percent:6.2f}% "
                        f"{downloaded / 1024 / 1024:.1f} MB / "
                        f"{total / 1024 / 1024:.1f} MB",
                        end="",
                        flush=True
                    )
                else:
                    print(
                        f"\r{downloaded / 1024 / 1024:.1f} MB",
                        end="",
                        flush=True
                    )

    print(f"\n\nDone: {output}")


if __name__ == "__main__":
    if len(sys.argv) > 1:
        url = sys.argv[1]
    else:
        url = input("Enter file URL: ").strip()

    download(url)