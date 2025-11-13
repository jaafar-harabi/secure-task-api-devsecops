#!/usr/bin/env python3
import argparse
import subprocess
import sys

def run(cmd: list[str]) -> int:
    print(f"Running: {' '.join(cmd)}")
    return subprocess.call(cmd)

def cmd_up(args):
    sys.exit(run(["docker-compose", "up", "-d"]))

def cmd_down(args):
    sys.exit(run(["docker-compose", "down"]))

def cmd_logs(args):
    sys.exit(run(["docker-compose", "logs", "-f"]))

def cmd_test(args):
    sys.exit(run(["npm", "test"]))

def cmd_lint(args):
    sys.exit(run(["npm", "run", "lint"]))

def main():
    parser = argparse.ArgumentParser(description="Project management CLI")
    subparsers = parser.add_subparsers(dest="command")

    subparsers.add_parser("up").set_defaults(func=cmd_up)
    subparsers.add_parser("down").set_defaults(func=cmd_down)
    subparsers.add_parser("logs").set_defaults(func=cmd_logs)
    subparsers.add_parser("test").set_defaults(func=cmd_test)
    subparsers.add_parser("lint").set_defaults(func=cmd_lint)

    args = parser.parse_args()

    if not hasattr(args, "func"):
        parser.print_help()
        sys.exit(1)

    args.func(args)

if __name__ == "__main__":
    main()
