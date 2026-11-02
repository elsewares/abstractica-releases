---
title: Oracles and tables
description: Ask a yes/no question, consult the themed oracles, and roll on random tables from the Oracle and Tables tabs or with /oracle and /table.
sidebar:
  order: 3
---

An oracle answers the questions a game master would: *Is the gate guarded? What happens next?*
A table gives you one random entry from a list: a name, a place, a complication. Ask either one
from the sidebar or from the editor, and the answer lands in your text as a block.

## What each system has

| Game system | Oracles | Tables |
|---|---|---|
| Ironsworn | 2 | 136 |
| Ironsworn with Abstractica Content | 6 | 201 |
| Starforged | 4 | 256 |
| Starforged with Abstractica Content | 8 | 321 |
| Abstractica | 5 | 91 |

Ironsworn's and Starforged's own oracles are **Ask the Oracle**, for yes/no questions, and
oracles that roll two tables into one prompt: **Action and Theme** in Ironsworn; **Action +
Theme**, **Descriptor + Focus** and **Sector Name** in Starforged. Abstractica campaigns have
**Ask the Oracle** and the four [themed oracles](#the-themed-oracles). Any custom oracles you build
are added to these.

## Ask a yes/no question

Type `/oracle`, pick **Ask the Oracle** from the list, and fill in the **Consult Oracle** form:

- **Probability** — how likely a yes is: **Certain**, **Likely**, **Even**, **Unlikely**, or
  **Impossible**. It starts at **Even**.
- **Chaos Factor** — used only by Abstractica's **Ask the Oracle**; Ironsworn and Starforged
  ignore it. Abstractica campaigns keep their Chaos Factor in the top bar, starting at 5. The form
  doesn't read it from there, so type the number in.
- **Question** — optional. It's printed above the answer, so you can read the exchange later.

Click **Consult**. The answer is **Yes** or **No**.

In Abstractica campaigns the oracle can also give an emphatic answer, **Yes, and…** or **No,
and…**, on the rolls at either end of the d100. With a Chaos Factor of 1 or more, a roll of
doubles (11, 22, up to 99) adds **Random Event** to the answer: something unexpected happens as
well.

The other oracles in the `/oracle` list answer as soon as you pick them, except the themed
oracles, which open the same form so you can set a lean and a question.

:::tip
The Oracle tab asks yes/no questions at **Even** odds. To set the odds, use `/oracle`.
:::

## The Oracle tab

The **Oracle** tab lists every oracle your campaign has, grouped by category. Type in
**Search oracles…** to find one by name.

Click an oracle and it answers at once, under its name. Nothing goes into your text yet:

- **Embed in journal** puts the answer into your text at the cursor.
- **↻** rolls again. Ask as often as you like before you embed.

Answers you don't embed aren't kept.

## The themed oracles

Abstractica's own oracles answer in your campaign's genre. They are listed under **Themed
Oracles**, and each one answers one kind of question:

| Oracle | Its question | Ask it about |
|---|---|---|
| **Fate** | *What does this mean for me?* | Where you came from, what is asked of you, what comes due |
| **Story** | *What happens next?* | Who arrives, what blocks the way, what it costs |
| **The World** | *What is here?* | Weather, work, kin and the cost of things |
| **The Unseen** | *What is hidden?* | Traces, secrets, what keeps watch |

Every answer is two draws, shown side by side. Read them together as one answer.

**Lean** tilts a consult before it's rolled: **Favourable** toward better draws,
**Unfavourable** toward worse, **Open** for neither. You set it in the `/oracle` form, or with the
three buttons that appear under a themed oracle in the Oracle tab.

Under each draw, in smaller type, is its *gloss*: the plain meaning the themed line stands for.
Choose when it shows in **Settings** → **Display** → **Oracle gloss**: **Always**, **On hover**
(the default), or **Off**.

### Oracle themes

The theme is the genre the themed oracles answer in. The same roll means the same thing in every
theme; only the wording changes.

| Theme | Offered in | In the app's words |
|---|---|---|
| **Low Fantasy** | Ironsworn (the default), Abstractica (the default) | Mud, iron and hearth. Magic is a rumour; winter is not. |
| **High Fantasy** | Ironsworn, Abstractica | Ages, orders and open magic — mythic in scale, baroque in its workings. |
| **Space Opera** | Starforged (the default), Abstractica | Many worlds, a ship and a crew — pulp adventure on a lived-in frontier, under great houses. |
| **Cyberpunk** | Starforged, Abstractica | One city, a body and a contract. Noir streets under corporate weather. |

You choose a theme when you [create a campaign](/getting-started/first-campaign/#create-a-campaign).
To change it, open **Campaign settings** (the gear next to the campaign name in the left panel),
choose under **Oracle theme**, and click **Save changes**. Answers already in your text keep their
wording.

### Abstractica Content

Ironsworn and Starforged campaigns have the themed oracles only when they include Abstractica
Content. It's on by default when you create a campaign. To turn it on or off later, use **Include
Abstractica Content** in **Campaign settings**. It adds the 4 themed oracles; 65 tables, in the
**Chronicle**, **Spark Tables**, **Settlement** and **Themed Oracles** categories of the Tables
tab; and the **Town** [generator](/guide/generators/). Abstractica campaigns always include it,
with all 87 of its tables.

## Oracles your moves suggest

Some moves come with oracles that suit them. After you roll one, the move block shows them under
**Ask**: click one and its answer appears below the move. A second click asks again.

The answer leans with your result: **Favourable** on a strong hit, **Open** on a weak hit,
**Unfavourable** on a miss. Most suggestions are themed oracles, so in Ironsworn and Starforged
they appear only when the campaign includes Abstractica Content.

In Ironsworn and Starforged, when the challenge dice on a move come up as a match, the block
offers one more: a button such as **Ask Story what it is**. See
[Matches](/guide/moves-and-dice/#matches) on the Moves and dice page.

## Roll on a table

The **Tables** tab works like the Oracle tab. Tables are grouped by category, and some categories
open into subcategories: Starforged's **Planets**, for example, holds a group for each type of
world. Click a table to roll it; **Embed in Journal** puts the result into your text, and **↻**
rolls again.

From the editor, type `/table`, then pick a table from the list. It's rolled at once and the
result goes into your text.

Some entries send you to a second table. Abstractica rolls that one too and shows its result
underneath, marked with **→**.

## What lands in your text

Each answer is a block in your text, between your paragraphs. An oracle block shows the oracle's
name, your question, the answer, the odds or lean you chose, and the dice that were rolled. A table
block shows the table's name, the result, any second-table result, and the roll.

Results added from the sidebar, or rolled straight from a slash command, arrive collapsed to one
line: the name and the answer. Click the arrow at the right of the line to open the whole block,
and again to close it.

## Rolling again

Once an answer is in your text, it's part of the record and has no re-roll button. If you want a
different answer, click the block, press **Delete** or **Backspace**, and ask again.

## Your own oracles

**New custom oracle**, at the top of the Oracle tab, builds an oracle from two tables. Custom
oracles appear with the rest and can be used in every campaign that has their tables. See
[Custom oracles](/authoring/custom-oracles/).
