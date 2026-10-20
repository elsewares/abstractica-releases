---
title: Troubleshooting
description: Fixes for problems installing, updating, activating a license, and saving.
sidebar:
  order: 1
---

Find the message you saw, or the closest description, below. If nothing here helps,
[ask in Discussions](https://github.com/elsewares/abstractica-releases/discussions/categories/q-a)
or [report a bug](/help/reporting-bugs/).

## Installing

### Windows says "Windows protected your PC"

That's SmartScreen. The installer is code-signed, but the certificate is still building its
reputation with Microsoft. Click **More info**, then **Run anyway**.

### Linux: the app won't start, or WebKitGTK is missing

Abstractica needs WebKitGTK 4.1. Installing the `.deb` with `apt` or the `.rpm` with `dnf`
pulls it in. For the AppImage, install it yourself:

```bash
sudo apt install libwebkit2gtk-4.1-0    # Debian or Ubuntu
sudo dnf install webkit2gtk4.1          # Fedora
```

Older releases such as Ubuntu 20.04 don't offer WebKitGTK 4.1; you need Ubuntu 22.04,
Debian 12, Fedora 36, or later.

### Linux: the AppImage won't start and mentions libfuse.so.2

AppImages need FUSE 2, which newer distributions don't install by default.

```bash
sudo apt install libfuse2      # Ubuntu 22.04, Debian 12
sudo apt install libfuse2t64   # Ubuntu 24.04 and later
```

Or install the `.deb` or `.rpm` instead.

## Updating

### "Could not check for updates"

Abstractica couldn't reach the update server. Check your internet connection and try
**Check for Updates…** again. Abstractica keeps working in the meantime.

### "Update Failed"

The download or install didn't finish. Try again later, or download the latest installer from the
[releases page](https://github.com/elsewares/abstractica-releases/releases/latest) and install
it over your current version. Your campaigns aren't affected.

### Linux: "installed from a system package, so it cannot update itself"

`.deb` and `.rpm` installs are updated through the package, not the app. Click
**Open Downloads**, download the new package, and install it the way you installed the first
one. See [Installing → Updates](/getting-started/install/#updates).

### Windows: a new window opens blank and the app freezes

Versions before 0.9.20 could open the character sheet or Help as a blank window on Windows.
Update to the latest version.

## License problems

These appear in red under the key field in **Settings** → **License**.

| Message | What to do |
|---|---|
| *Enter a license key.* | Paste your key into the field before clicking **Activate**. |
| *License key not found.* | Check the key against your purchase email or the [Polar customer portal](https://polar.sh/elsewares/portal). Copy and paste rather than typing it. |
| *Device limit reached. Deactivate another device in your Polar account.* | Your key is active on 2 computers already. Click **Deactivate on this device** on one of them, or release one from the [Polar customer portal](https://polar.sh/elsewares/portal). |
| *Could not reach the licensing service. Check your connection.* | You're offline, or something is blocking the connection. Activation needs the internet; try again once you're connected. |
| *Could not verify the license. Try again shortly.* | The licensing service had a problem. Wait a few minutes and try again. |
| *The licensing service answered …* or *…sent an unreadable answer…* | Same as above: a temporary problem on the service's side. |
| *The license could not be verified on this device.* | Click **Activate** again. If it keeps happening, email **hello@elsewares.io**. |
| *This license key is no longer active.* | The key was revoked or refunded. Email **hello@elsewares.io** if that's unexpected. |
| *Activation failed (…)* | Something unexpected. Try again; if it persists, email **hello@elsewares.io** with the number in brackets. |

### "Reconnect to the internet to reverify your license"

Abstractica hasn't been able to check your license for over 30 days. Everything still works
for up to 14 more days. Go online and restart Abstractica. See
[Playing offline](/getting-started/free-and-licensed/#playing-offline).

### My license disappeared

If Abstractica went more than 44 days without checking in, this computer is treated as free
until it can check again. Your key is kept: go online, open **Settings** → **License**, and
click **Reactivate**.

## Campaigns and saving

### The status bar says "Save failed"

Abstractica couldn't write to your data folder. Check that the disk isn't full and that the
folder is writable. If you keep your data folder in a synced or network location, make sure it's
available. Leave Abstractica open until the status bar says **Saved**.

### "Failed to create campaign"

Usually a permissions problem with the data folder. Check that your user account can write to
`~/.abstractica` (or the folder in **Settings** → **Abstractica Data Directory**).

### My campaigns are missing

- **Did you change the data folder?** Changing **Abstractica Data Directory** in Settings doesn't
  move anything; your campaigns are still in the old folder. Switch back with
  **Reset to default** and **Save**, or move the campaign folders across yourself while
  Abstractica is closed.
- **Did the campaign use a game system that's no longer offered?** Campaigns for a system that
  isn't currently available are hidden from the list. Their files are still in `campaigns/` in
  your data folder.

### Two computers, one data folder

If your data folder is in Dropbox, iCloud Drive, or similar, only open Abstractica on one
computer at a time, and let the sync finish before you switch. Two copies writing to the same
files will overwrite each other's changes.

## Resetting preferences

If Abstractica's preferences seem stuck, quit Abstractica and delete `config.json` from your
data folder. It recreates the file with defaults at the next start. This resets preferences and
which tours you've seen; your campaigns aren't touched.
