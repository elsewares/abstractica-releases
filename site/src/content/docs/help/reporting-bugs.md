---
title: Reporting bugs
description: Where to report a problem, what to include, and what happens after you do.
sidebar:
  order: 3
---

Bugs are tracked in public on GitHub. You need a free GitHub account to file one.

**[File a bug report →](https://github.com/elsewares/abstractica-releases/issues/new?template=bug_report.yml)**

## Is it a bug?

| You have… | Go to |
|---|---|
| Something broken, wrong, or crashing | [Bug report](https://github.com/elsewares/abstractica-releases/issues/new?template=bug_report.yml) |
| A question about how something works | [Discussions → Q&A](https://github.com/elsewares/abstractica-releases/discussions/categories/q-a) |
| An idea or a feature request | [Discussions → Ideas](https://github.com/elsewares/abstractica-releases/discussions/categories/ideas) |
| A security problem | [Report it privately](https://github.com/elsewares/abstractica-releases/security/advisories/new) — never as a public issue |
| A license, purchase, or refund problem | Email **hello@elsewares.io** |

## Before you file

- **Update first.** The problem may already be fixed: **Check for Updates…** in the
  Abstractica menu (macOS) or the **Help** menu (Windows and Linux).
- **Search [existing issues](https://github.com/elsewares/abstractica-releases/issues?q=is%3Aissue).**
  If someone has reported it, add a comment with anything new rather than opening another.
- **Check [Troubleshooting](/help/troubleshooting/)** for the message you saw.

## What the form asks for

- **Abstractica version** — from **About Abstractica**: in the Abstractica menu on macOS,
  the **Help** menu on Windows and Linux.
- **Operating system and its version** — for example *macOS 15.5*, *Windows 11 24H2*, *Ubuntu 24.04*.
- **How you installed it** — `.dmg`, `.exe`, `.deb`, `.rpm`, or AppImage.
- **Which part of Abstractica**, and **which game system** the campaign uses.
- **What happened**, and what you expected instead.
- **Steps to reproduce** — the exact clicks and keys, starting from somewhere anyone can reach,
  such as *Open a Starforged campaign → type `/oracle`*.
- **How often** it happens.
- **Error messages** — Abstractica doesn't keep a log file, so the wording on screen is the best
  evidence. Copy it exactly, or attach a screenshot.

One problem per report. Two bugs in one issue tend to get half-fixed.

## Keep it private

Issues are public and indexed by search engines.

- Don't paste journal text, character details, or anything else from your campaigns.
  Describe it instead, or use a test campaign.
- Never include your license key. The last few characters, as shown in About, are enough if they matter.
- Check screenshots for names, file paths, and anything personal before attaching them.

## What happens next

Every new report starts out labelled `needs-triage`. Then:

- **`confirmed`** — reproduced and accepted.
- **`needs-info`** — a question is waiting for you. If there's no reply in 14 days the issue is
  marked stale, and it closes 7 days after that. Replying keeps it open, and a closed issue can be
  reopened with a comment.
- **`fixed-in-next`** — fixed; the fix ships in the next release, and the issue closes when it does.

The [release notes](/release-notes/) list what each version fixed.
