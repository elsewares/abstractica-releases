---
title: Backing up and restoring
description: Save your campaigns, custom oracles, and custom sheets to one backup file, bring them back, or copy your data folder by hand.
sidebar:
  order: 2
---

Your campaigns exist only on your own disk, so keeping a copy is up to you. There are two ways:

- **A backup file.** Abstractica saves your campaigns, custom oracles, and custom sheets to one
  `.zip` file, and can bring them back from it.
- **A copy of your data folder**, made with Abstractica closed. It holds everything, preferences
  included.

Abstractica doesn't back up on a schedule, and it never uploads anything. Keep your backups
somewhere other than the computer they came from: an external drive, or a cloud storage folder.

:::tip
Make a backup before you install an update.
:::

## Making a backup

1. If a session is open, wait until the status bar says **Saved**. Anything typed in the last
   few seconds may not be on disk yet.
2. Open **Settings** and click **Back up your data**, under **Abstractica Data Directory**. You
   can also use the menu: Abstractica menu → **Back Up Your Data…** on macOS, or
   **File** → **Back Up Your Data…** on Windows and Linux.
3. Choose where to save the file. Abstractica suggests a name with today's date, such as
   `abstractica-backup-2026-10-22.zip`.

When it's done, a message says what was saved, for example: *Backup saved: 3 campaigns,
1 custom oracle and 2 custom sheets. Settings and preferences are not restored from a backup.*
It stays until you close it.

If you save over an earlier backup, the old file is replaced only once the new one is complete,
so a failed backup never costs you the one you had.

## What a backup holds

A backup is an ordinary `.zip` file. Any zip tool can open it, and inside, the folders are laid
out as they are in your [data folder](/data/where-your-data-lives/).

| In a backup | Not in a backup |
|---|---|
| Every campaign, with its sessions, entities, clocks, decks, and roll history, including any campaign hidden from your list | Your license, and which data folder you use (they're in the app-settings folder) |
| Your custom oracles (`custom-oracles/`) | The `game-systems/` folder: Abstractica's copy of the built-in game systems, which every install has, and any [content packs](/authoring/overview/#your-own-content-pack) you wrote |
| Your custom character sheets (`custom-sheets/`) | The safety copies in `migration-backups/` |
| `config.json`, your preferences, kept for reference but never restored | Anything else you've put in the data folder |
| `abstractica-backup.json`, which describes the backup | |

`abstractica-backup.json` records the data version, the Abstractica version that made the
backup, when it was made, the name and game system of each campaign, and how many custom oracles
and sheets there are.

## Restoring a backup

1. Choose Abstractica menu → **Import a Backup…** on macOS, or **File** → **Import a Backup…**
   on Windows and Linux. There's no button for this in Settings.
2. Choose the backup's `.zip` file.

A message says what came in, for example: *Added from the backup: 2 campaigns and 1 custom
oracle.* Your campaign list updates straight away.

### Restoring adds; it never replaces

Importing a backup never changes anything you already have:

- **Every campaign comes in as a new copy** with *(imported)* after its name, such as
  *My Saga (imported)*. If that name is taken, the next copy is *My Saga (imported 2)*, and so on.
  Importing the same backup twice gives you two copies.
- **Custom oracles and sheets come in with their own names**, unless the same oracle or sheet is
  already in your library. Then the incoming one is added alongside it, with *(imported)* after
  its name.
- **Your preferences stay as they are.** `config.json` is in the backup, but an import never
  restores it.

A backup made by an older version of Abstractica is brought up to the current
[data version](/data/where-your-data-lives/#data-versions) as it comes in. The backup file itself
isn't changed.

To replace a campaign with its backed-up version, import the backup, check the copy, then delete
the original from the campaign list. Deleting a campaign is permanent. Abstractica has no way to
rename a campaign yet; to drop *(imported)* from a name, see
[Editing files by hand](/data/where-your-data-lives/#editing-files-by-hand).

### When an import goes wrong

If an import fails part way, Abstractica removes everything it added, so your data is as it was
before. The message starts *That backup could not be imported.* and says why:

| The reason begins | What it means |
|---|---|
| *Could not unpack the backup…* | The file isn't a zip file, or it's damaged. |
| *Not an Abstractica backup…* | The zip wasn't made by Abstractica's backup, or its `abstractica-backup.json` is damaged. |
| *This data was written by a newer version of Abstractica…* | The backup came from a newer version. [Update Abstractica](/getting-started/install/#updates) and import it again. |

If some items in a backup can't be read, the rest still come in. The message says how many were
left out and adds *Keep the backup file: it still holds them.*

If a campaign in the backup uses a game system this version of Abstractica doesn't offer, it's
added to your data folder but doesn't appear in your list, and the message says so.

## Copying your data folder

A copy of the whole [data folder](/data/where-your-data-lives/) is a complete backup:
everything in a backup file, plus your preferences.

To make one:

1. Wait until the status bar says **Saved**, then quit Abstractica.
2. Copy the whole `.abstractica` folder, or the folder you chose in **Settings** →
   **Abstractica Data Directory**, somewhere safe.

To restore one:

1. Quit Abstractica.
2. Rename your current data folder, for example to `.abstractica-old`, so nothing is lost.
3. Copy your saved folder into its place, with the same name.
4. Start Abstractica.

Unlike importing a backup file, this **replaces** your data: you get exactly what was in the
copy, under the original names, and anything newer is only in the folder you renamed.

To restore a single campaign, quit Abstractica and copy that campaign's folder from your copy's
`campaigns/` into your data folder's `campaigns/`. If a folder with the same name is already
there, it's the same campaign: move it out first, so you don't end up with a mix of old and new
files.

## Safety copies

The only copies Abstractica makes by itself are the ones it takes right before an update changes
the format of your data. They go into `migration-backups/` in your data folder, and only the
most recent one of each is kept. They're there to undo an update that was interrupted, not to
replace a backup. See [Data versions](/data/where-your-data-lives/#data-versions).
