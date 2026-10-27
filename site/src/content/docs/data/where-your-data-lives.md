---
title: Where your data lives
description: The data folder that holds your campaigns, the settings folder that holds your license, what each file is for, and what's safe to change by hand.
sidebar:
  order: 1
---

Abstractica keeps your work in two places on your own disk, and nowhere else:

- **Your data folder** holds your campaigns, your custom oracles and sheets, and your
  preferences. It's yours to copy, back up, sync, or move.
- **The app-settings folder** holds your license and which data folder you use. It belongs to
  this computer and stays with it.

Nothing is uploaded. Both folders hold plain files you can open in any text editor.

## Finding your data folder

| System | Default location |
|---|---|
| macOS | `~/.abstractica` (`/Users/<you>/.abstractica`) |
| Windows | `C:\Users\<you>\.abstractica` |
| Linux | `~/.abstractica` (`/home/<you>/.abstractica`) |

To see the folder Abstractica is using right now, open **Settings**: the path is under
**Abstractica Data Directory**. If you chose a different folder there, that's where everything
below lives instead.

The folder's name starts with a dot, so file managers hide it.
[Where are my campaigns stored?](/help/faq/#where-are-my-campaigns-stored) in the FAQ shows how
to reveal hidden folders on each system.

## Inside the data folder

```text
.abstractica/
├── abstractica.json
├── config.json
├── campaigns/
│   └── <campaign id>/
│       ├── campaign.json
│       ├── entity-windows.json
│       ├── sessions/
│       ├── entities/
│       ├── clocks/
│       ├── decks/
│       └── history/
├── custom-oracles/
├── custom-sheets/
├── game-systems/
├── marketplace/
└── migration-backups/
```

### Your campaigns

Each campaign is one folder in `campaigns/`. The folder is named with the campaign's id, a long
string of letters and numbers, not with its name. To find out which campaign a folder holds,
open its `campaign.json` and look at `name`.

| In a campaign folder | What it holds |
|---|---|
| `campaign.json` | The campaign's name, description, and game system; its settings (oracle theme, Abstractica Content, move rolls, dice sounds, background); its Starforged truths; and its own copy of a custom character sheet, if it uses one. |
| `sessions/` | One file per session: its title, number, dates, and the whole text, with every oracle, move, and dice block in it. |
| `entities/` | One file per entity: your character, and every person, place, and thing you've recorded. A character's assets and progress tracks are stored with it. |
| `clocks/` | One file per clock or timer: Abstractica's clocks and timers, and the tension clocks of Starforged's scene challenges. |
| `decks/` | One file per deck in play, with what's been drawn. Empty except in Abstractica campaigns. |
| `history/` | Every oracle, table, move, and deck result you've rolled, one line each, in `oracle-log.jsonl`, `table-log.jsonl`, `move-log.jsonl`, and `deck-log.jsonl`. |
| `entity-windows.json` | Where each floating character or entity sheet was last placed on screen. |

### Your library

| Folder | What it holds |
|---|---|
| `custom-oracles/` | Your custom oracles, one file each. They aren't tied to a campaign: each one appears in every campaign that has the tables it rolls on. |
| `custom-sheets/` | Your library of character sheets, one file each: the ones you build while creating a campaign, and the ones you keep with **Save to my sheets** in **Campaign settings**. A campaign that uses one keeps its own copy in `campaign.json`, so changing a library sheet never changes a campaign. |

How to make both is in the [System authoring guide](/authoring/overview/), and the custom oracle
file format is in [Custom oracles](/authoring/custom-oracles/#the-custom-oracle-file).

### Abstractica's own files

| File or folder | What it's for |
|---|---|
| `config.json` | Your preferences: light, dark, or system theme; **Animated dice**; **Oracle gloss**; **Dice sounds** and **Dice volume**; which guided tours you've finished; and your recent campaigns. |
| `abstractica.json` | Records which version of the data format this folder is in. See [Data versions](#data-versions). |
| `game-systems/` | Abstractica's working copy of the built-in game systems and Abstractica Content. It's refreshed from the app every time Abstractica starts, so changes you make to those copies don't last. Content packs you write yourself go here too; see [Your own content pack](/authoring/overview/#your-own-content-pack). |
| `marketplace/` | Empty. Abstractica creates it and doesn't use it yet. |
| `migration-backups/` | Safety copies Abstractica takes before an update changes the format of your data. It only appears after such an update. See [Data versions](#data-versions). |

While you import a backup, an `import-staging/` folder appears too. Abstractica removes it when
the import finishes. If an import was interrupted and one is left behind, the next import clears
it out.

## The app-settings folder

| System | Location |
|---|---|
| macOS | `~/Library/Application Support/io.abstractica.desktop` |
| Windows | `%APPDATA%\io.abstractica.desktop` |
| Linux | `~/.config/io.abstractica.desktop` |

It holds two files:

- `settings.json`: which data folder you chose, if it isn't the default, and this computer's
  installation ID. That ID is the **Device ID** shown in **About Abstractica**, and it's what
  lets your license count this computer as one device.
- `license.json`: your license key and the result of the last license check. It's only there
  once you've activated a license.

This folder isn't part of a backup, and it doesn't move when you copy your data folder. Leave it
where it is: a new computer gets its own when you activate there. See
[Moving to a new computer](/data/moving-to-a-new-computer/).

:::note[Updating from 0.9.25 or earlier]
Earlier versions kept these files in a folder named `com.abstractica.app` in the same place.
The first time a newer version starts, it moves `settings.json` and `license.json` into
`io.abstractica.desktop` and removes the old folder once it's empty.
:::

## Keeping your data somewhere else

You can keep your data folder anywhere you can write to: another drive, or a folder that Dropbox
or iCloud Drive syncs.

1. Open **Settings**.
2. Under **Abstractica Data Directory**, click **Change…** and choose a folder.
3. Click **Save**. Abstractica reloads and uses the new folder.

Changing the folder doesn't move anything. Your existing campaigns stay in the old folder, and
an empty folder starts out with no campaigns. To bring them along, quit Abstractica and copy the
contents of the old folder into the new one. Choose the folder that holds `campaigns/` and
`config.json`, not the folder above it.

To go back, choose **Reset to default**, then **Save**.

Your choice is stored in `settings.json` on this computer, so it doesn't follow your data to
another one. If the folder is on an external or network drive, connect it before you start
Abstractica.

:::caution[Syncing between computers]
Only run Abstractica on one computer at a time, and let the sync finish before you switch. Two
copies writing to the same folder overwrite each other's changes. See
[Does Abstractica sync between computers?](/help/faq/#does-abstractica-sync-between-computers)
:::

## Plain files

Everything in the data folder is JSON, which any text editor can open. The roll history in
`history/` is JSON Lines: one JSON record per line. Dates are written like
`2026-10-22T19:04:11.000Z`.

Session text is stored in the editor's own document format: readable, but not comfortable to
read. There's no export to Markdown or other formats yet.

## Editing files by hand

You can edit these files, but Abstractica isn't built around it. Before you change anything:

- **Quit Abstractica.** It keeps what it has read in memory and writes whole files back when it
  saves, so a change made while it's running is overwritten.
- **Make a backup** ([Backing up and restoring](/data/backup-and-restore/)).

Changes that are safe:

- **Deleting `config.json`** resets your preferences and guided tours. Abstractica creates a new
  one at the next start. Your campaigns aren't touched.
- **Changing a campaign's `name` or `description`** in its `campaign.json`. Abstractica has no
  way to rename a campaign yet, so this is how to tidy up a name such as *My Saga (imported)*.

Leave these alone:

- **`id`, `campaignId`, and `dataVersion`**, anywhere. They tie files to each other and to the
  data format.
- **File and folder names.** A campaign folder's name must match the `id` in its
  `campaign.json`.
- **`abstractica.json`, `migration-backups/`, and the built-in folders in `game-systems/`.**

A file that isn't valid JSON is skipped when Abstractica reads it: a broken `campaign.json`
drops the campaign from your list, and a broken session file drops that session. Fixing the file,
or putting your backup copy back, brings it back.

## Data versions

Abstractica records which version of its data format each part of your data is in: the whole
folder in `abstractica.json`, and each campaign in the `dataVersion` field of its
`campaign.json`. This version of Abstractica writes data version 1.

When an update to Abstractica changes the format, it updates your data for you: the files
outside `campaigns/` when it starts, and each campaign the first time you open it. Before it
changes anything, it copies what it's about to change into `migration-backups/`. It keeps the
most recent copy of each and deletes older ones once the updated data has opened cleanly.

If something isn't right, Abstractica stops before it changes anything:

- **The folder was written by a newer version of Abstractica.** Instead of your campaign list,
  you see *This data is from a newer Abstractica*. Update Abstractica, or click
  **Choose a different data folder…**. **Quit** closes it.
- **One campaign was written by a newer version, or its version can't be read.** It stays in
  your list, marked *Saved by a newer version of Abstractica, or its version can't be read, so it
  can't be opened here. It's left as it is.*
- **`abstractica.json` can't be read.** You see *Abstractica cannot read its data version*, with
  the path of the file. Check that file, or choose a different data folder.
- **An update was interrupted and its safety copy is missing.** You see *An earlier update did
  not finish*. Copy your data folder somewhere safe first, then follow the steps on that screen.

This is also why an older version of Abstractica may refuse a backup or data folder from a newer
one. When you move or restore data, install the same version or newer.
