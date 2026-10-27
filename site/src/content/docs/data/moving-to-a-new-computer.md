---
title: Moving to a new computer
description: Take your campaigns, custom oracles and sheets, and preferences to another computer, on the same operating system or a different one, and move your license.
sidebar:
  order: 3
---

Moving takes three things: your data, your license, and a quick check on the new computer. You
can move your data with a backup file or by copying your data folder. Both work between macOS,
Windows, and Linux in any direction.

## What moves, and what doesn't

| | Backup file | Copying the data folder |
|---|---|---|
| Campaigns: sessions, characters and other entities, clocks, decks, roll history | Yes, as new copies marked *(imported)* | Yes, exactly as they were |
| Each campaign's settings: oracle theme, Abstractica Content, character sheet | Yes | Yes |
| Custom oracles and custom sheets | Yes | Yes |
| Preferences: theme, **Animated dice**, **Oracle gloss**, **Dice sounds**, finished tours | No | Yes |
| Your license | No | No |
| Which data folder you use, if you changed it | No | No |

Your license and your choice of data folder are kept in the app-settings folder, which belongs
to each computer. Don't copy it across: the new computer gets its own when you
[activate your license](/getting-started/free-and-licensed/#moving-to-another-computer) there.
See [Where your data lives](/data/where-your-data-lives/#the-app-settings-folder).

## Before you start

- **Use the same version of Abstractica, or newer, on the new computer.** An older version may
  refuse a backup or data folder from a newer one; see
  [Data versions](/data/where-your-data-lives/#data-versions). The
  [releases page](https://github.com/elsewares/abstractica-releases/releases/latest) always has
  the latest version.
- **Let the old computer finish saving.** Before you back up or quit, wait until the status bar
  says **Saved**.
- **Versions 0.9.25 and earlier have no backup command.** Update the old computer first, or copy
  the data folder instead.

## Moving with a backup file

1. On the old computer, [make a backup](/data/backup-and-restore/#making-a-backup) and put the
   `.zip` file somewhere the new computer can reach: an external drive or a cloud storage folder.
2. On the old computer, release your license. The steps are in
   [Moving to another computer](/getting-started/free-and-licensed/#moving-to-another-computer).
3. On the new computer, [install Abstractica](/getting-started/install/) and open it.
4. Choose Abstractica menu → **Import a Backup…** on macOS, or **File** → **Import a Backup…** on
   Windows and Linux, and pick the backup file.
5. Activate your license on the new computer.

You can import before you activate. Each campaign arrives with *(imported)* after its name; see
[Restoring a backup](/data/backup-and-restore/#restoring-a-backup) for why, and how to remove
it. Your preferences start fresh: set them again in **Settings**, and with the theme button.

## Moving by copying the data folder

1. On the old computer, quit Abstractica and copy your whole data folder to an external drive or
   a cloud storage folder. That's `.abstractica` in your home folder, unless you chose another
   folder in **Settings** → **Abstractica Data Directory**.
2. On the old computer, release your license. The steps are in
   [Moving to another computer](/getting-started/free-and-licensed/#moving-to-another-computer).
3. On the new computer, [install Abstractica](/getting-started/install/), open it once, and quit.
   This creates an empty data folder in the right place.
4. Replace everything inside the new `.abstractica` folder with everything inside your copy.
5. Start Abstractica and activate your license.

If you'd rather keep the data somewhere else on the new computer, such as a synced folder, put
your copy there instead. Then open **Settings**, choose **Change…** under
**Abstractica Data Directory**, pick the folder that holds `campaigns/` and `config.json`, and
click **Save**.

:::caution
Step 4 replaces whatever is in the new computer's data folder. If you've already started a
campaign there, back it up first and import it afterwards.
:::

## Between operating systems

Nothing in your data depends on the operating system. Files and folders have the same names on
macOS, Windows, and Linux, and none of them hold a path to anywhere on your disk, so a backup or
a folder copy works in any direction. Only the location of the data folder differs:

| System | Data folder |
|---|---|
| macOS | `/Users/<you>/.abstractica` |
| Windows | `C:\Users\<you>\.abstractica` |
| Linux | `/home/<you>/.abstractica` |

Opening Abstractica once on the new computer, as in step 3 above, creates the folder for you.
Folders whose names start with a dot are hidden; the FAQ shows
[how to see them](/help/faq/#where-are-my-campaigns-stored) on each system.

## If the old computer is gone

You need whatever copy you made before: a backup file, a copy of the data folder, or a data
folder kept in a synced location. Restore it on the new computer as above. To free the old
computer's license activation, release it from the Polar customer portal, as described in
[Moving to another computer](/getting-started/free-and-licensed/#moving-to-another-computer).

## After the move

Before you delete anything on the old computer, check that everything arrived:

- **The campaign list** shows every campaign you expect. Open each one and look at its latest
  session.
- **The Oracle tab** lists your custom oracles, in campaigns that have the tables they roll on.
- **Settings** → **License** says *This device is licensed*.
- **Settings** → **Abstractica Data Directory** shows the folder you meant to use.
- **Your preferences** in **Settings** are as you want them, if you moved with a backup file.
  The theme button sits at the bottom right of the campaign list and the status bar.

If a campaign is missing, see
[My campaigns are missing](/help/troubleshooting/#my-campaigns-are-missing). Keep your backup file
or folder copy until you've played a session on the new computer.
