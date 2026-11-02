---
title: Generators
description: Roll up a whole person, place or thing with a generator, and work through procedures and loops step by step.
sidebar:
  order: 5
---

A **generator** rolls on several tables at once and fills in a whole person, place or thing: a
foe with its rank and tactics, a settlement with its trouble, a planet with its atmosphere and
life. You keep the result as an entity in your campaign.

A **procedure** is a short routine you work through a step at a time: roll here, ask the oracle
there, make a check, start a clock. A **loop** links procedures into a cycle of play.

All three live in the **Generators & Procedures** tab of the right sidebar. Every system in this
release has at least one generator, so the tab is in every campaign.

## What each system has

| Game system | Generators | Procedures and loops |
|---|---|---|
| Ironsworn | 8: Anomaly, Delve Site, Denizen, Foe, Location, Site Danger, Threat, Trap | None |
| Starforged | 19: Character, Creature, Derelict, Faction, Precursor Vault, Settlement, Starship, Starting Sector, and 11 kinds of world, from Desert World to Vital World | None |
| Abstractica | 1: Town | 4 procedures and 1 loop |

Ironsworn and Starforged campaigns that include Abstractica Content also have **Town**: a
settlement's size, name, population, trouble, notable feature and notable folk.

## Run a generator

1. Open **Generators & Procedures** and click a generator. Type in **Search generators &
   procedures…** to find one by name.
2. A **Create** window opens, already filled in: **Create Monster** for a foe, **Create
   Settlement** for a town.
3. Change anything you like. To roll the whole thing again, click the dice button at the top
   (*Generate: Foe*, for a foe).
4. Click **Create** at the bottom (**Create Monster**, **Create Settlement**) to keep it.

It's saved with your other entities, in the **Entities** tab. Type `@` and its name to mention it
in your text. Close the window instead and nothing is kept. See [Entities](/guide/entities/) for
what you can do with it next.

**Starting Sector** (Starforged) makes more than one thing: the sector and the settlements in it.
The window lists them under *Also creating*, and **Create** makes each one its own entity.

### Other ways in

- **From the editor:** type `/generator` (or `/gen`) and pick one from the list. The result goes
  into your text as a block.
- **From the Entities tab:** when you create a person, place or thing of a type a generator
  makes, the same dice button is at the top of the window. Where several generators make the same
  type (Starforged's 11 kinds of world all make a Planet), a list beside it chooses which one runs.
- **A new character:** in Ironsworn and Starforged, the character creation window has **Roll a
  Character**, which rolls a random character for you to adjust.

## Procedures

*Abstractica.* Click a procedure in the tab, or type `/procedure` (or `/proc`) and pick one. A
block goes into your text with the procedure's steps listed in order.

| Procedure | What it's for |
|---|---|
| **Frame a Scene** | Open a scene: what it's about, then what bends it out of shape. |
| **Travel Leg** | Cover ground. Make a Check with Force; a miss costs you a complication and leaves you Exhausted, a weak hit a minor cost. |
| **Explore a Site** | Find a place worth stopping at: generate it, put it in your Cast as a place, see what draws you in, and ask whether you're welcome. |
| **Make Camp** | End a day of travel. Ask whether the night is disturbed; if it is, roll what disturbs it and start a 4-segment clock for it, and if not, gain 1 Resolve. Then roll tomorrow's weather and spend 1 Resources. |

Work down the block one step at a time. The first step has a button named for what it does:
**Roll**, **Generate**, **Create**, **Start**, **Track**, **Draw**, **Apply**, or **Done**. Click it
and the result appears beside the step, and the next step opens.

- A step that only applies in some cases, such as *What is the trouble?* when you aren't welcome,
  is skipped when it doesn't apply.
- **Reroll**, beside a finished step, rolls it again. Every step after it is cleared, because its
  result may have depended on this one.
- **Reset**, at the foot of the block, starts the procedure over and undoes what it changed.

:::note
Steps that change your character, such as Make Camp's Resolve and Resources, change your
character sheet as soon as you click them. **Reroll** and **Reset** put the sheet back.
:::

## Loops

*Abstractica.* The **Expedition** loop is a cycle of overland play built from the four
procedures:

1. **Travel Leg**, then **Frame a Scene**.
2. Then your choice: **Explore a Site**, **Make Camp**, or another **Travel Leg**.
3. **Explore a Site** leads to **Make Camp**, and **Make Camp** back to **Travel Leg**.

Click **Expedition** in the tab, or type `/loop` and pick it. When you finish a procedure in the
loop, buttons for what comes next appear at the foot of its block; click one to add that
procedure below. Nothing moves on until you click.

Your place in the loop is saved with the campaign. While it's running, the tab shows **Resume:**
and the procedure you're on, and starting the loop again picks up there.

## Write your own

Generators, procedures and loops are plain data files. To write your own, see
[Generators](/authoring/generators/) and [Procedures](/authoring/procedures/) in the System
authoring guide.
