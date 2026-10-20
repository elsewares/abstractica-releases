---
title: Frequently asked questions
description: Answers to the questions that come up while playing — files, offline use, sync, updates, and what's not there yet.
sidebar:
  order: 2
---

Questions about buying, pricing, and what Abstractica is are answered on
[abstractica.io](https://abstractica.io). These are the ones that come up once you're playing.

## Your files

### Where are my campaigns stored?

In a folder called `.abstractica` in your home folder: `~/.abstractica` on macOS and Linux,
`C:\Users\<you>\.abstractica` on Windows. Each campaign is a folder of plain JSON files under
`campaigns/`. You can choose a different location in **Settings** → **Abstractica Data Directory**.

Folders starting with a dot are hidden by default. On macOS, press **⇧⌘.** in Finder to show
them; on Windows, turn on **View** → **Show** → **Hidden items** in File Explorer; on Linux,
press **Ctrl+H** in most file managers.

### How do I back up my campaigns?

Quit Abstractica, then copy the whole `.abstractica` folder somewhere safe. That's everything:
every campaign, session, character, and roll history. To restore, quit Abstractica and copy the
folder back.

There's no backup or export button in the app yet.

### Can I export a session to Markdown or PDF?

Not yet. Your sessions are stored as JSON, which any text editor can open, but there's no export
to Markdown, PDF, or other formats in the app today.

### How do I move to a new computer?

1. On the old computer, quit Abstractica and copy the `.abstractica` folder to the new one, into
   your home folder.
2. Click **Deactivate on this device** in **Settings** → **License** on the old computer.
3. Install Abstractica on the new computer and activate your key.

Your license doesn't travel with the folder; see
[Moving to another computer](/getting-started/free-and-licensed/#moving-to-another-computer).

### Does Abstractica sync between computers?

Not on its own. Your data folder is ordinary files, so you can point **Abstractica Data
Directory** at a folder in Dropbox, iCloud Drive, or a git repository. Only run Abstractica on
one computer at a time, and let the sync finish before switching — two copies writing at once
will overwrite each other.

### Does uninstalling delete my campaigns?

No. Your `.abstractica` folder stays until you delete it yourself. See
[Uninstalling](/getting-started/install/#uninstalling).

## Being online

### Does Abstractica work offline?

Yes. You need the internet for three things:

- **Activating a license**, once per computer.
- **Re-checking the license**, at startup when the last check was more than 7 days ago. Offline
  is fine for up to 44 days; see [Playing offline](/getting-started/free-and-licensed/#playing-offline).
- **Checking for updates**, at each startup. If you're offline, the check fails quietly.

Your campaigns are never uploaded.

### What does Abstractica send over the internet?

An update check to GitHub at startup, and, if you have a license, your key and a device ID to
the licensing service when you activate or re-check. The
[privacy policy](https://github.com/elsewares/abstractica-releases/blob/main/PRIVACY.md) has the details.

### Can I turn off automatic updates?

No, but nothing installs without your say-so: Abstractica asks first, and **Later** dismisses
it until the next start.

## Playing

### Which game systems are included?

Ironsworn, Starforged, and Abstractica — a system-neutral sandbox for any game you play, with
its own oracles, clocks, timers, and decks. Abstractica's oracles and tables can also be added to
Ironsworn and Starforged campaigns with **Include Abstractica Content**.

### Why don't I have clocks or decks in my Ironsworn campaign?

Clocks, timers, and decks are part of the Abstractica system only. Ironsworn and Starforged
campaigns use progress tracks (`/progress`) instead.

### Can I change the oracle theme after creating a campaign?

Yes: **Campaign settings** (the gear next to the campaign name in the left panel) → **Oracle
theme**. Results already in your journal keep their wording.

### Can I reopen a session I ended?

No. **End Session** makes a session read-only for good. You can still read it, and start a new
session with **+ New**.

### Can I change the names Abstractica uses, like "Saga" or "Entry"?

They come from each game system and can't be changed in the app. See
[Words that change with the game](/getting-started/first-campaign/#words-that-change-with-the-game).

### Can I use my own dice?

Yes. Roll at the table and write the result into your journal. You can't yet type a physical
roll into a move or oracle block.

### Where do I suggest a feature?

In [Discussions → Ideas](https://github.com/elsewares/abstractica-releases/discussions/categories/ideas).
Bugs go in the [bug tracker](/help/reporting-bugs/).
