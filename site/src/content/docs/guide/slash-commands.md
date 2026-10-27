---
title: Slash commands
description: Every command you can type in the Chronicle, its aliases, what it opens, what it puts in your text, and which game systems have it.
sidebar:
  order: 2
---

Type `/` in the Chronicle to open the command menu. Choose a command and its result lands in your
text, at the place you typed it. This page covers every command in detail; the short version is
in [Your first campaign](/getting-started/first-campaign/#write-your-first-scene).

Which commands you see depends on the campaign's game system. **Help** lists exactly the ones the
open campaign has, with their aliases: click **Help** in the status bar, or press F1 on Windows
and Linux, ⇧⌘/ on macOS.

## Using the menu

- Type `/` at the start of a line or after a space. In the middle of a word, as in `and/or`, it's
  an ordinary slash.
- Keep typing to narrow the menu. It matches the start of a command's name or of any of its
  aliases, so `/dr` finds `/deck` through its alias `/draw`.
- **↑** and **↓** move through the menu. **Enter** or **Tab** chooses. **Esc** closes it, and so
  does deleting the `/`.
- You can click a command instead of choosing it from the keyboard.

Commands work in one of two ways.

**Commands that pick from a list:** `/oracle`, `/table`, `/move`, `/progress`, `/entity`,
`/asset`, `/deck`, `/generator`, `/procedure`, and `/loop`. Choose one with **Enter** or **Tab**
and the menu turns into a list of what the command can use: oracles, tables, moves, your decks.
Type part of a name to narrow it; a second line on each row gives its category, rank, or type.
Choose a row and the command runs on it, or opens its form with that row already picked.
*No matches* means nothing in the list contains what you typed.

Clicking `/oracle`, `/table`, `/move`, `/progress`, `/entity`, or `/deck` with the mouse skips
the list and opens the command's form, with nothing picked yet.

**Commands that take what you type:** `/scene`, `/roll`, `/vow`, `/clock`, and `/timer`. Type the
command, a space, and the rest, then press **Enter**: `/roll 2d6+1`, `/scene The Drowned Hall`.

Either way, the command text disappears and the result, or the form, takes its place. See
[Blocks](/guide/chronicle-editor/#blocks) for what you can do with a result afterwards.

## All commands

| Command | Also | What it does | Available in |
|---|---|---|---|
| `/scene [title]` | | Starts a new scene at the end of the session | All systems |
| `/oracle` | | Asks an oracle | All systems |
| `/table` | | Rolls on a table | All systems |
| `/roll <dice>` | | Rolls dice | All systems |
| `/move` | `/m` | Makes a move | All systems |
| `/progress` | `/track`, and `/goal` in Abstractica | Marks progress on one of your character's tracks | All systems |
| `/vow [name]` | `/swear` | Swears an iron vow | Ironsworn, Starforged |
| `/entity` | `/mention`, plus the system's word: `/codex` (Ironsworn, Starforged), `/databank` (Starforged), `/cast` and `/record` (Abstractica) | Mentions an entity, or creates one | All systems |
| `/asset` | | Adds an asset card to your character | All systems; Abstractica has no assets |
| `/generator` | `/gen` | Runs a generator | All systems |
| `/procedure` | `/proc` | Runs a procedure | All systems |
| `/loop` | | Starts or continues a loop | All systems |
| `/clock` | | Creates or advances a clock | Abstractica |
| `/timer` | | Starts a real-time timer | Abstractica |
| `/deck` | `/draw` | Draws from a deck | Abstractica |

In an Abstractica campaign whose custom character sheet has no tracks, `/progress` and its aliases
aren't offered.

## Story

### `/scene`

Adds a new scene at the end of the session and puts your cursor in it. Type a title after the
command, `/scene The Drowned Hall`, or leave it off and the scene is numbered: *Scene 4*. It
doesn't split the scene you're in. See
[Scenes](/guide/chronicle-editor/#scenes).

### `/entity`

**From the list:** your entities, each with its type. Choose one to insert a mention of it, such
as **@Kira Vance**. Resolved encounters aren't listed.

**Clicked:** opens **Select or Create Entity**:

- **Select Existing** lists your entities. Pick one and click **Insert Mention**.
- **Create New** asks for a **Type** and a **Name**. **Create & Insert** creates the entity and
  mentions it. Fill in the rest later on its sheet.

Typing `@` does the same as the list, faster: see [Mentions](#mentions-with-). For sheets, types,
and what a mention does, see [Entities](/guide/entities/).

## Oracles, tables, and dice

### `/oracle`

**From the list:** the campaign's oracles, each with its category. What happens next depends on
the oracle:

- **A yes/no oracle**, such as **Ask the Oracle**, opens the **Consult Oracle** form with it picked.
  Choose a **Probability**, type a **Question** if you like, and click **Consult**.
- **A themed oracle** (**Fate**, **Story**, **The World**, **The Unseen**) opens the same form with
  a **Lean**: **Unfavourable**, **Open**, or **Favourable**.
- **Any other oracle**, such as Ironsworn's **Action and Theme**, answers at once.

**Clicked:** opens **Consult Oracle** with an **Oracle** picker. Its other fields change with the
oracle you pick.

See [Oracles and tables](/guide/oracles-and-tables/).

### `/table`

**From the list:** every table in the campaign, with its category. Type part of the table's name;
there are a lot of them. Choose one and it rolls at once.

**Clicked:** opens **Roll on Table**. Pick a **Table** and click **Roll**.

### `/roll`

Type dice after the command: `/roll 2d6+1`. The notation:

| You type | You roll |
|---|---|
| `2d6`, `d20` | Dice: a count (1 to 100, default 1), `d`, and the number of sides (up to 1000) |
| `2d6+1`, `3d6-1d4` | Dice and numbers added or subtracted |
| `d%` | A d100 |
| `4dF` | Fate dice: each shows −, blank, or + |
| `d66` | Two d6 read as tens and ones |

`/roll` on its own opens **Roll Dice**. So does notation Abstractica can't read: the form keeps
what you typed and says what's wrong with it. Collapsed, a dice block reads as the expression and
the total, such as `2d6+1 = 9`. See [Moves and dice](/guide/moves-and-dice/).

## Moves and tracks

### `/move`

Also `/m`.

**From the list:** the system's moves, each with its category.

- **Pay the Price**, and **Face a Complication** in Abstractica, open their own block, where you
  choose how the price is set.
- In Ironsworn and Starforged, when the campaign's **Move rolls** setting is **Roll on the
  block**, most moves go straight in unrolled, with the roll on the block.
- Otherwise the **Make a Move** form opens with the move picked. Fill it in and click **Roll**
  (**Add move** under **Roll on the block**). Moves that start a track, or that ask how much harm
  first, always open the form.

**Clicked:** opens **Make a Move** with nothing picked.

Move blocks arrive expanded. See [Moves and dice](/guide/moves-and-dice/).

### `/progress`

Also `/track`; in Abstractica, also `/goal`.

Marks progress on one of your tracked character's unfinished tracks. It doesn't create tracks.

**From the list:** the character's unfinished tracks, each with its rank. Choose one to mark
progress on it. The block shows the ticks before and after. If that fills the track, a second
block says so and offers the move that resolves it, such as **Fulfill Your Vow**.

**Clicked:** opens **Mark Progress**. Pick a **Track** and click **Mark Progress**.

With no tracked character, the form says *Track a character to manage progress.* To start a track,
use `/vow` or the move that starts it in Ironsworn and Starforged, or a move such as **Set a Goal**
in Abstractica. See [Clocks and progress tracks](/guide/clocks-and-progress-tracks/).

### `/vow`

Ironsworn and Starforged. Also `/swear`.

Opens the **Swear an Iron Vow** move. Type the vow after the command, `/vow Find my sister's
killer`, and its name is filled in for you.

### `/asset`

Adds an asset card to your tracked character's sheet. Nothing is inserted in your text.

**From the list:** the system's asset cards, each with its type, such as **Path** or
**Companion**. Choose one to add it.

Without a tracked character, Abstractica says *Track a character first to add assets*. Clicked
without choosing an asset, it says *Pick an asset from the dropdown*. Abstractica campaigns have
no asset cards; there it says *No assets defined for this game system*.

## Generators, procedures, and loops

These three have no form of their own: choose them with **Enter** and pick from the list.

- **`/generator`** (also `/gen`) rolls the generator you pick and puts its results in your text as
  a block, one line per field. It doesn't create an entity; to make one from a generator, see
  [Generators](/guide/generators/).
- **`/procedure`** (also `/proc`) inserts the procedure you pick. It arrives expanded, with its
  first step ready to roll.
- **`/loop`** starts the loop you pick, or picks it up where it left off, and inserts the
  procedure for its current step.

Abstractica comes with 4 procedures (**Explore a Site**, **Frame a Scene**, **Make Camp**, and
**Travel Leg**) and 1 loop (**Expedition**). Ironsworn and Starforged come with none, so those two
lists are empty unless you've [written your own](/authoring/procedures/).

## Clocks, timers, and decks

Abstractica campaigns only. See [Clocks and progress tracks](/guide/clocks-and-progress-tracks/)
and [Decks](/guide/decks/).

### `/clock`

`/clock` on its own opens **Create Clock**: a **Name**, **Segments**, a **Type** (**Progress** or
**Countdown**), and a **Kind** (**Threat clock** or **Countdown**). Click **Create**.

Or type the clock's name after the command. Abstractica looks for a clock with that name,
ignoring capitals.

If there isn't one, it creates it: `/clock Iron Syndicate` makes a threat clock with 6 segments,
and `/clock Iron Syndicate 8` makes one with 8.

If there is one, the command moves it:

| You type | What happens to the clock |
|---|---|
| `/clock Iron Syndicate` | Fills 1 segment |
| `/clock Iron Syndicate +2` | Fills 2 segments |
| `/clock Iron Syndicate -1` | Empties 1 segment |
| `/clock Iron Syndicate reset` | Empties the clock |

Abstractica tells you when a clock fills.

### `/timer`

Starts a real-time timer. Type a name, then the minutes: `/timer Patrol 15`. Leave the minutes
off and it runs for 10. `/timer` on its own starts a 10-minute timer called *Timer*.

### `/deck`

Also `/draw`.

**From the list:** the decks you've added to the campaign in the **Decks** tab. Choose one to draw
a card.

**Clicked:** opens **Draw from Deck**. Pick a **Deck** (each shows how many cards remain), set
**Cards to draw** (1 to 10), and click **Draw**. If the campaign has no decks yet, it says *No
active decks. Create one from the sidebar first.*

## Mentions with @

Type `@` at the start of a line or after a space to list your entities. Each row shows the first
letter of the entity's type and its name.

- Keep typing to narrow the list. It matches any part of a name or of an alias.
- **↑** and **↓** move, **Enter** chooses, **Esc** closes.
- *No entities found* means nothing matches. `@` can't create an entity: use `/entity` and
  **Create New**.

The mention goes into your text as **@Name**. Click it to open the entity's sheet. See
[Entities](/guide/entities/#mentioning-entities-in-your-text).

## Keys at a glance

| Key | In the `/` menu | In the `@` menu |
|---|---|---|
| **↑** **↓** | Move through the menu | Move through the list |
| **Enter** | Choose; for a list command, open its list | Choose |
| **Tab** | Same as **Enter** | |
| **Esc** | Close | Close |
| **Backspace** past the `/` or `@` | Close | Close |
