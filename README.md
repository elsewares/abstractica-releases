# Abstractica — Releases

Official downloads for **Abstractica**, the editor-centric computational notebook for solo and journaling tabletop RPG players. Write your story in a rich block editor and invoke oracles, tables, moves, dice, generators, clocks, and progress tracks inline — one document that is both your narrative and your game log. Offline-first: everything lives in local files on your machine.

This repository is the public home for Abstractica's installers, release notes, and issue tracking. (The application source is developed in a private repository.)

**[Download the latest release →](https://github.com/elsewares/abstractica-releases/releases/latest)**

**[Read the documentation →](https://docs.abstractica.io)**

## Choosing your download

| Platform | File |
|---|---|
| macOS — Apple Silicon | `Abstractica_<version>_aarch64.dmg` |
| macOS — Intel | `Abstractica_<version>_x64.dmg` |
| Windows 10/11 — x64 | `Abstractica_<version>_x64-setup.exe` |
| Linux x64 — Debian/Ubuntu | `Abstractica_<version>_amd64.deb` |
| Linux x64 — Fedora/openSUSE | `Abstractica-<version>-1.x86_64.rpm` |
| Linux x64 — portable | `Abstractica_<version>_amd64.AppImage` |
| Linux arm64 — Debian/Ubuntu | `Abstractica_<version>_arm64.deb` |
| Linux arm64 — Fedora | `Abstractica-<version>-1.aarch64.rpm` |
| Linux arm64 — portable | `Abstractica_<version>_aarch64.AppImage` |

Any other files attached to a release (`*.app.tar.gz`, `*.sig`, `latest.json`) belong to the auto-update system — you never need to download them yourself.

## Installing

**macOS** — open the `.dmg` and drag Abstractica into Applications. Builds are code-signed and notarized by Apple, so the app opens like any other.

**Windows** — run the setup `.exe`. The installer is code-signed, but Windows SmartScreen may still show a "Windows protected your PC" notice until the signing certificate builds up reputation; click **More info → Run anyway**. The WebView2 runtime is installed automatically if it's missing.

**Linux** — requires WebKitGTK 4.1 (Ubuntu 22.04+, Debian 12+, Fedora 36+, or equivalent).

- `.deb`: `sudo apt install ./Abstractica_<version>_amd64.deb`
- `.rpm`: `sudo dnf install ./Abstractica-<version>-1.x86_64.rpm`
- `.AppImage`: `chmod +x` the file, then run it.

## Your data

Campaigns, journals, and settings are plain JSON files under `~/.abstractica/` on your machine. Abstractica is offline-first — your content is never uploaded. Back up that folder and you've backed up everything.

## Licensing

Abstractica is free to try — the free tier includes one campaign, and [buying a license](https://buy.polar.sh/polar_cl_h6pAT8oXy3Z7b7ayAzWNFyBzzDKmAXTPOzOpW2dFPGl) unlocks unlimited campaigns. Use of the software is governed by the [EULA](EULA.md).

### Third-party content

- **Ironsworn** and **Ironsworn: Delve** by Shawn Tomkin, included with his written permission. Game data adapted from [Datasworn](https://github.com/rsek/datasworn) by rsek. Moves, assets, oracles and tables are used under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); foes, anomalies and setting truths under [CC BY‑NC‑SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
- **Ironsworn: Starforged** by Shawn Tomkin, included with his written permission. Reference Guide and Asset Cards content is used under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); rulebook content (setting truths and scene challenges) under [CC BY‑NC‑SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
- Abstractica is an independent product and is not affiliated with or endorsed by Shawn Tomkin.
- Other bundled game content is used under its respective licenses, credited in the app.

## Problems?

- **Found a bug?** [File a bug report](../../issues/new?template=bug_report.yml). The form asks for your Abstractica version (shown in the About dialog) and your operating system.
- **Have a question or an idea?** Post in [Discussions](../../discussions).
- **Security problem?** Please [report it privately](../../security/advisories/new). See [SECURITY.md](SECURITY.md).
- **License or billing?** Email hello@elsewares.io.
