---
title: Authoring overview
description: What you can make for Abstractica yourself, where it's kept, which campaigns can use it, and how to set up a content pack of your own.
sidebar:
  order: 1
---

Each game system's moves, oracles, tables, and generators are built into Abstractica, and you
can't edit them. Around them, you can add your own. Two kinds of content have editors in the
app; the rest you write as JSON files in a content pack of your own.

Everything on this page works in the free version.

## What you can make

| What | How you make it | Where it's kept | Which campaigns can use it |
|---|---|---|---|
| Custom oracles | In the app: **New custom oracle** in the Oracle tab | `custom-oracles` in your data folder, shared by all your campaigns | Any campaign that has both of the oracle's tables |
| Character sheets | In the app: the sheet builder | `custom-sheets` in your data folder; each campaign keeps its own copy | Abstractica campaigns |
| Tables, generators, procedures, and loops | By writing JSON files | A content pack: a folder in `game-systems` in your data folder | Campaigns of the systems the pack names, once you turn it on in **Campaign settings** |

Your data folder is `~/.abstractica` on macOS and Linux and `C:\Users\<you>\.abstractica` on
Windows, unless you chose another in **Settings** → **Abstractica Data Directory**. See
[Where your data lives](/data/where-your-data-lives/).

| What | When your changes show | If something is wrong |
|---|---|---|
| Custom oracles | As soon as you save in the app | The builder won't save until the oracle has a name and two tables |
| Character sheets | As soon as the campaign switches to the sheet | The builder lists each problem in red and won't save |
| Content packs | The next time you open the campaign from the campaign list | Nothing tells you: Abstractica leaves out whatever it can't read or check |

## Custom oracles

A custom oracle rolls two tables and joins the answers, such as *Cozy Fantasy* + *Trade*. You
build it in the Oracle tab, and it's saved outside your campaigns, so every campaign that has
both tables can roll it. See [Custom oracles](/authoring/custom-oracles/).

## Character sheets

In Abstractica campaigns you can replace the character sheet with your own: its sections,
fields, and progress track categories. Ironsworn and Starforged keep their own sheets.

- **When you create a campaign:** under **Character sheet**, pick one of your sheets, click
  **Edit** to change it, or click **New sheet**. Sheets you save here go into your library.
- **During play:** open **Campaign settings** (the gear next to the campaign name in the left
  panel). Under **Character sheet**, **Edit sheet…** changes this campaign's sheet;
  **Use this sheet** applies it. **Switch to…** swaps in a sheet from your library or
  **The default sheet**. **Save to my sheets** copies the campaign's sheet into your library.

A campaign keeps its own copy of its sheet. Editing a sheet in your library doesn't change the
campaigns already using it, and editing a campaign's sheet doesn't change your library.

If the campaign already has characters, switching sheets asks first. Characters keep every
value, but fields the new sheet doesn't have stop showing until you switch back.

There's no button to delete a sheet from your library. Quit Abstractica and delete its file from
`custom-sheets` in your data folder.

## Campaign content

A content pack adds oracles, tables, and other content to a game system. Abstractica ships one,
**Abstractica Content**: the themed oracles and Abstractica's own tables. Abstractica campaigns
always include it.

To choose a campaign's content, open **Campaign settings** and look under **Content**. Each pack
for the campaign's system has a checkbox: **Include Abstractica Content** in Ironsworn and
Starforged campaigns, and **Include** followed by the pack's name for any pack of your own. Tick
or untick, then click **Save changes**. The sidebar updates without a restart.

Turning content off keeps what you made with it. If you created entities from an entity type the
pack adds, such as Abstractica Content's settlements, Abstractica says how many first: they're
kept, but they can't be opened until you turn the pack back on.

## Your own content pack

A content pack of your own is a folder of JSON files: tables, generators, procedures, and loops.
Abstractica finds it in the `game-systems` folder of your data folder and offers it in
**Campaign settings**.

:::caution[For players comfortable editing JSON]
There's no editor for content packs in the app. Abstractica doesn't report mistakes in your
files: anything it can't read, or that breaks a rule, is left out without a message. The format
may change in a later version.
:::

### Make the folder

Create a folder inside `game-systems` and give it the name you'll use as the pack's `slug`. The
examples in these docs build a pack called `wayside`:

```text
.abstractica/
└── game-systems/
    └── wayside/
        ├── manifest.json
        ├── tables/
        │   ├── traveller-table.json
        │   ├── carrying-table.json
        │   ├── want-table.json
        │   └── letter-table.json
        ├── generators/
        │   └── stranger-generator.json
        ├── procedures/
        │   └── inn-procedure.json
        └── loops/
            └── road-loop.json
```

The other folders in `game-systems` are Abstractica's copies of its built-in content. Abstractica
reads that content from the app itself and overwrites these copies, so changing them has no
effect. Read them to find ids (see [Ids](#ids)), but don't edit them.

### Write the manifest

`manifest.json` names the pack and lists its files:

```json
{
  "slug": "wayside",
  "type": "content-pack",
  "name": "Wayside",
  "description": "Strangers on the road, and an inn to rest at.",
  "version": "1.0.0",
  "author": "Your name",
  "compatibleSystems": ["abstractica-sandbox"],
  "features": {
    "tables": [
      "traveller-table.json",
      "carrying-table.json",
      "want-table.json",
      "letter-table.json"
    ],
    "generators": ["stranger-generator.json"],
    "procedures": ["inn-procedure.json"],
    "loops": ["road-loop.json"]
  }
}
```

| Field | What it does |
|---|---|
| `slug` | The pack's id. It must match the folder name exactly. Choose one no other pack uses. |
| `type` | Always `"content-pack"`. |
| `name` | Shown in **Campaign settings** as **Include Wayside**, and in the message when you turn the pack on or off. |
| `description` | Shown under the name in **Campaign settings**. |
| `compatibleSystems` | Which campaigns can turn the pack on: `"ironsworn"`, `"starforged"`, `"abstractica-sandbox"` for Abstractica campaigns, or `"*"` for every system. |
| `features` | The files to load, by kind: `tables`, `generators`, `procedures`, `loops`. Each name is relative to the folder of that kind: `traveller-table.json` means `tables/traveller-table.json`. |
| `version`, `author` | For your own records. Abstractica doesn't use them. |

A file that isn't listed in `features` doesn't load, even if it's in the folder.

### Turn it on

1. Go back to your campaigns with the **←** link at the top of the left panel. Abstractica looks
   for new packs when the campaign list opens. Restarting Abstractica works too.
2. Open the campaign, then **Campaign settings**.
3. Under **Content**, tick **Include Wayside**. The line under it counts what the pack adds, such
   as *Adds 4 tables, 1 generator*; procedures and loops aren't counted there.
4. Click **Save changes**. Abstractica confirms with *Wayside added*.

The pack is on for that campaign only. Turn it on in each campaign that should have it.

### Change it

Edit the files in any text editor. Abstractica reads the pack each time it opens a campaign, so
after you save a file, go back to the campaign list and open the campaign again. A new file
needs a line in `features` before it loads.

If you delete or rename the pack's folder, campaigns that use it open without it. Results
already in your journal stay: a procedure block keeps the steps it resolved, but its buttons
disappear.

### Ids

Content refers to other content by `id`: a generator names the tables it rolls, a procedure
names its oracle. Each id must be unique across everything a campaign loads. If yours matches an
id that's already loaded, your copy is skipped.

- Start your ids with your pack's slug: `table-wayside-traveller`, not `table-traveller`.
- Generator ids start with `generator-`, procedure ids with `proc-`, and loop ids with `loop-`,
  followed by lowercase letters, digits, and hyphens.
- To use built-in content, find its id in Abstractica's copies in `game-systems`: open a file
  and read its `id`. Abstractica campaigns' own content is in `abstractica-sandbox`; Abstractica
  Content is in `abstractica`.
- Your content can use built-in content, content from your own pack, and content from any other
  pack the campaign has turned on. It can't use custom oracles.

### When something doesn't appear

Abstractica loads what it can and leaves out the rest, without a message:

- A file that isn't valid JSON is skipped. JSON allows no comments and no trailing commas, and
  every key and text value needs double quotes.
- A generator, procedure, or loop that breaks a rule is left out. The most common cause is an id
  that isn't loaded in this campaign, such as a table from Abstractica Content in a campaign
  that doesn't include it. The rules are on [Writing generators](/authoring/generators/#rules-abstractica-checks)
  and [Writing procedures](/authoring/procedures/#rules-abstractica-checks).
- If the pack isn't listed in **Campaign settings**, check that `slug` matches the folder name,
  `type` is `"content-pack"`, and `compatibleSystems` names this campaign's system. Then go back
  to the campaign list so Abstractica looks again.

Use a text editor that checks JSON as you type, and add one thing at a time, so that when
something goes missing you know which change did it.

### Keep a copy

**Back Up Your Data…** saves your campaigns, custom oracles, and character sheets, but not
`game-systems`, so it doesn't include your packs. Keep your own copy of each pack
folder. Copying the whole data folder to a new computer, as in
[Moving to a new computer](/data/moving-to-a-new-computer/), brings your packs with it.

If you change **Abstractica Data Directory**, your packs stay in the old folder's
`game-systems`. Move them across with your campaigns.
