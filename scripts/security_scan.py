#!/usr/bin/env python3
import subprocess
import sys

TOOLS = {
  "npm_audit": ["npm", "audit", "--audit-level=high"],
  "bandit": ["bandit", "-r", "scripts"],
  "trivy": ["trivy", "image", "secure-task-api-devsecops_api:latest"],
  "gitleaks": ["gitleaks", "detect", "--no-color", "--exit-code", "1"],
}

def main():
    failed = False
    for name, cmd in TOOLS.items():
        print(f"\n=== Running {name}: {' '.join(cmd)} ===")
        code = subprocess.call(cmd)
        if code != 0:
            print(f"[!] {name} failed with exit code {code}")
            failed = True
    sys.exit(1 if failed else 0)

if __name__ == "__main__":
    main()
