---
title: Entities
description: Record the people, places, and things in your story, mention them in your text with @, and keep their sheets open beside it.
sidebar:
  order: 7
---

An entity is anything in your story worth keeping a record of: your character, the people you
meet, places, factions, creatures, ships. Each one has a sheet. You can mention any of them in your
text, and click the mention to open the sheet.

Every system calls the collection something different: the **Codex** in Ironsworn, the
**Databank** in Starforged, the **Cast** in Abstractica (see
[Words that change with the game](/getting-started/first-campaign/#words-that-change-with-the-game)).
In the app, the sidebar tab is called **Entities** in every system. The system's word shows up as
an extra name for `/entity` (`/codex`, `/databank`, `/cast`) and in the left panel before you've
created a character.

## Entity types

Each system has its own types, and each type has its own sheet. These are the **Create** buttons
at the top of the **Entities** tab:

| Ironsworn | Starforged | Abstractica |
|---|---|---|
| **Ironsworn** (your character) | **Starforged** (your character) | **Character** |
| **Delve Site** | **Creature** | **NPC** |
| **Hazard** | **Derelict** | **Place** |
| **Location** | **Faction** | **Creature** |
| **Monster** | **Character** (other people) | **Faction** |
| **Threat** | **Planet** | **Settlement** |
| | **Sector** | |
| | **Settlement** | |
| | **Starship** | |
| | **Precursor Vault** | |
| | **Vehicle** | |

The **Settlement** in Abstractica campaigns comes from Abstractica Content. Turn on **Include
Abstractica Content** in an Ironsworn or Starforged campaign and its Settlement type is added there
too; in Starforged it sits beside Starforged's own.

Your character's type is named after the system in Ironsworn and Starforged. In Starforged, the
type for other people is **Character**.

## Creating an entity

1. Open the **Entities** tab in the sidebar.
2. Under **Create**, click a type.
3. Type a **Name**. It's the one thing the form needs.
4. Add a **Description** and fill in the type's fields, or leave them for later.
5. Click **Create** followed by the type, such as **Create Location**.

Your character's type opens the character creation window instead, the same one a new campaign
starts with.

Most types can roll themselves up. A dice button at the top of the form, **Generate:** followed by
the generator's name, fills in the name, description, and fields from the system's tables. Click
it again for a different result, and change anything before you click **Create**. Where a type has
more than one generator, as Starforged's **Planet** does, a menu beside the button picks which one
runs. Leaving your character aside, every Ironsworn type has a generator, every Starforged type
but **Vehicle** has one, and in Abstractica, **Settlement** does. See
[Generators](/guide/generators/).

You can also create an entity from your text: type `/entity`, click it in the menu, choose
**Create New**, pick a **Type**, type a **Name**, and click **Create & Insert**. It creates the
entity with only its name and mentions it where you were typing.

## Finding your entities

The **Entities** tab lists every entity in the campaign, grouped by type and sorted by name.

- **Click an entity** to open its sheet.
- **Track** appears next to player characters. Click it to make that character the one
  Abstractica follows: the one the left panel shows, and the one moves, `/progress`, `/vow`, and
  `/asset` act on. It then reads **Tracking**. One character is tracked at a time.

### Encounters

Some types are encounters: things you meet once and then deal with. Abstractica's **Creature** and
Starforged's **Vehicle** are encounters, and the list marks them *enc*.

A Creature's sheet has a **Resolve Encounter** row: **Defeated**, **Driven off**, **Fled**,
**Placated**, **Escaped**, or **Other**. Pick one and the creature leaves the main list. **Show
resolved** at the bottom of the tab lists resolved encounters, crossed out, with the reason. Open
one and click **Restore** to bring it back.

## The sheet

A sheet has the entity's name at the top, then the type's fields, then these sections, depending on
the type and the system:

- **Vows** (Ironsworn, Starforged) or **Tracks** (Abstractica): progress tracks. See
  [Tracks on an entity](#tracks-on-an-entity).
- **Assets**: asset cards, on characters in Ironsworn and Starforged.
- **Details**, folded by default under a one-line preview: **Description**, **Aliases**, and
  **Notes**.

There's no Save button. Changes are written as you make them; typing is saved half a second after
you stop, or when you leave the field. To rename an entity, click its name at the top of the sheet
and type.

**Aliases** are other names the entity goes by, separated by commas. Typing `@` finds an entity by
any of its aliases as well as its name.

### Sheet windows

Clicking an entity in the **Entities** tab opens its sheet in a window of its own, floating above
Abstractica. Keep as many open as you like while you write.

- Click the same entity again and its window comes to the front, rather than opening a second one.
- Abstractica remembers where you put each sheet and how big you made it, and opens it there next
  time.
- When a sheet adds something to the story, such as marking progress, the block lands in the
  session you have open.
- Sheet windows close when you leave the session screen.

Your tracked character's sheet opens the same way from the left panel, with **Open character
sheet**. A mention in your text opens the sheet on top of the main window instead.

## Mentioning entities in your text

Type `@` at the start of a line or after a space, and a list of your entities appears. Keep typing
to narrow it by name or alias, use **↑** and **↓** to move, and press **Enter** to choose. **Esc**
closes the list.

The entity goes into your text as a mention, such as **@Kira Vance**. Click it to open the
entity's sheet.

`/entity` does the same. Choose it with **Enter** to get the list of entities, or click it to open
**Select or Create Entity**, where **Select Existing** inserts a mention of an entity you pick.
See [Slash commands](/guide/slash-commands/#entity).

A mention keeps the name the entity had when you inserted it. Renaming the entity later doesn't
change mentions already in your text.

## Tracks on an entity

In every system, a progress track belongs to your tracked character, and you can share it with
another entity: a vow to stop a threat, a goal tied to a place. Open the other entity's sheet:

- **+ Add Vow** (Ironsworn, Starforged) or **+ Add Track** (Abstractica) creates a track on your
  tracked character, shared with this entity. The sheet says so: *Adding to* your character,
  *shared with* the entity.
- **Link Existing** shares one of your character's existing tracks with this entity.

On the entity's sheet, a shared track is marked *via* your character's name. Without a tracked
character, the sheet says *Track a character to manage* vows or tracks. See
[Clocks and progress tracks](/guide/clocks-and-progress-tracks/).

## Connections (Starforged)

In Starforged, the people your character relies on are connections. They're listed in the
**Entities** tab under **Connections**, above the other entities, for your tracked character.

With no connections yet, the section offers **Make a Connection**, which opens that move in your
text. Each
connection shows its name, its rank, its role and the bonus its aid gives (*Aid +1*), and
**Bonded** once you've forged a bond. Click a connection to open it:

- Its progress boxes.
- **Give them a role…**: type a role, or pick one of the suggestions, and click **Set**.
- A row of buttons, each named in its tooltip: **Mark progress**, **Forge a Bond**,
  **Develop Your Relationship**, **Test Your Relationship**, **Edit**, and **Forsake**. Once
  you've said who the connection is, a button opens that person's sheet. Marking progress and the
  moves put their blocks or forms in your text.

**Edit** sets **Who** the connection is: one of your **Character** entities, **No one yet**, or
**New character…**, which creates one. **Forsake** asks first and can't be undone. Forsaken
connections move under **Lost** at the bottom of the section.

Ironsworn keeps bonds on your character's sheet rather than as a list of people. Abstractica has
**Bond** tracks you add like any other track.

## Deleting an entity

At the bottom of the sheet, click **Delete** and the entity's type. Abstractica asks first: it
removes the entity and everything recorded on it, and it can't be undone. Mentions of it stay in
your text as plain chips that no longer open anything.
