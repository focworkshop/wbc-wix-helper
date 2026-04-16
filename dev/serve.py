"""
Local dev server for design/templates.
Serves HTML/CSS/images from design/templates on localhost:8000.

Usage:
    python dev/serve.py
    python dev/serve.py --port 3000
"""

import http.server
import os
import sys
import argparse
from pathlib import Path

TEMPLATES_DIR = Path(__file__).resolve().parent.parent / "design" / "templates"


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(TEMPLATES_DIR), **kwargs)

    def log_message(self, format, *args):
        print(f"[serve] {self.address_string()} - {format % args}")


def main():
    parser = argparse.ArgumentParser(description="Serve design/templates locally")
    parser.add_argument("--port", type=int, default=8111)
    parser.add_argument("--bind", default="0.0.0.0")
    args = parser.parse_args()

    if not TEMPLATES_DIR.is_dir():
        print(f"Error: {TEMPLATES_DIR} not found")
        sys.exit(1)

    server = http.server.HTTPServer((args.bind, args.port), Handler)
    print(f"Serving {TEMPLATES_DIR}")
    print(f"http://{args.bind}:{args.port}/")
    print(f"Press Ctrl+C to stop")

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")
        server.server_close()


if __name__ == "__main__":
    main()
