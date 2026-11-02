---
title: Moves and dice
description: Make moves from the Moves tab or with /move, read the action roll, burn momentum, and roll any dice with the Dice tab or /roll.
sidebar:
  order: 4
---

A move is what your character does when the outcome is uncertain: face danger, gather
information, swear a vow. Abstractica carries each move's text, rolls its dice, and writes the
result into your text, with the outcome's options ready to tick. It doesn't teach the rules
themselves: for Ironsworn and Starforged, those are in Shawn Tomkin's rulebooks at
[ironswornrpg.com](https://www.ironswornrpg.com).

| Game system | Moves |
|---|---|
| Ironsworn | 48, including Delve's |
| Starforged | 56 |
| Abstractica | 18 |

## Make a move from the Moves tab

The **Moves** tab lists your system's moves by category. Open a category, or type in **Search
moves…**, then click a move to see its trigger. The tag beside each name says how it's rolled:
**Action**, **Progress**, **Special**, or **No Roll**.

For an action roll:

1. Choose the stat from the list. Where the move offers several, each says what using it looks
   like.
2. **STAT** shows your character's value for it. **ADDS** is for any bonus the move or your
   situation gives you; set it with **−** and **+**.
3. Click **Roll**.

For a progress move, pick the track it resolves, or type the progress score, and click **Roll
Progress**. A move with no roll has **Embed Move**, which puts its text into yours.

Some moves need something settled before the roll, such as the name and rank of a journey they
begin. Those say *Opens in your journal* and open the move's form in your text instead.

## Make a move with /move

Type `/move` (or `/m`) and pick a move from the list. The **Make a Move** form opens with that
move chosen: pick the **Stat**, set **ADDS**, and click **Roll**. A move that starts a track asks
for the track's name and rank first.

`/vow` (or `/swear`) is a shortcut for Swear an Iron Vow in Ironsworn and Starforged: `/vow
Find my brother` opens the move with the vow already named.

## The action roll

*Ironsworn, Starforged.* You roll an action die (d6) and add your stat and adds: that's your
**Action Score**, which can't go above 10. You also roll two challenge dice (d10s).

- Beat both challenge dice: **Strong Hit**.
- Beat one: **Weak Hit**.
- Beat neither: **Miss**. A tie doesn't beat a die.

The move block shows each die, your stat, your Action Score, and the result, followed by the
move's text for that outcome.

### Matches

When both challenge dice show the same number, the block marks a **Match** and says what it
means for your outcome: *An unexpected boon* on a strong hit, *A twist* on a weak hit, *A dire
turn* on a miss. A button such as **Ask Story what it is** consults an oracle for the detail. It
asks **Story** when your campaign includes Abstractica Content, and **Action and Theme**
(Ironsworn) or **Action + Theme** (Starforged) when it doesn't.

A few moves have their own rule for a match. Their block says so and points you to the move's
text.

### Momentum

*Ironsworn, Starforged.* Your momentum is on your character in the left panel. Many outcomes
raise or lower it; tick those options on the move block and the number changes.

When your momentum is high enough to beat more challenge dice than your action score did, the
block shows **Burn Momentum**. Click it and the outcome improves: a miss becomes a weak or strong
hit, or a weak hit a strong one. Your momentum resets, and the block is tagged **Momentum
Burned**. Momentum can't be burned on a progress roll.

## After the roll

What a move block can offer once it's rolled:

- **Choices.** When an outcome lets you choose (take +1 momentum, mark progress, suffer −1
  health), the options are checkboxes. Ticking one applies it to your character; unticking it
  puts things back exactly as they were. **Done** locks your choices in.
- **Consequences.** A miss, and on some moves a weak hit, offers a button for the follow-up move:
  **Pay the Price** in Ironsworn and Starforged, **Face a Complication** in Abstractica. It adds a
  form below the move: **Imagine** the cost, **Ask the Oracle**, or **Roll the Table**, then click
  **Price Paid**.
- **Ask.** Oracles that suit the move, one click each. See
  [Oracles your moves suggest](/guide/oracles-and-tables/#oracles-your-moves-suggest).
- **Roll.** Tables the move tells you to roll on, one click each.
- **?** (*How this block works*) walks you through the block.

Progress moves, such as Fulfill Your Vow, roll your progress against the challenge dice. See
[Clocks and progress tracks](/guide/clocks-and-progress-tracks/#the-progress-roll).

## Roll now or roll on the block

*Ironsworn, Starforged.* Each campaign chooses how a move gets its dice. Set it in **Campaign
settings** under **Move rolls**, or with the switch at the top of the Moves tab:

| Campaign settings | Moves tab | What happens |
|---|---|---|
| **Roll automatically** (the default) | **Auto-roll** | The dice are thrown as soon as you choose the move. |
| **Roll on the block** | **Roll on block** | The move goes into your text unrolled. |

An unrolled move shows your stat and empty dice. Adjust the **Modifier** (your stat plus adds)
with **−** and **+**, or type a number, then click **Roll** on the block. With this setting,
`/move` puts most moves straight into your text unrolled, the Moves tab's button reads **Add to
chronicle**, and the form's reads **Add move**.

## Moves in Abstractica campaigns

Abstractica's 18 moves are grouped as **Checks**, **Story**, **Tracks**, **Recover** and
**Session**. On the default character sheet your stats are **Force**, **Finesse**, **Focus**,
**Flair** and **Guile**.

Each of the four checks rolls a different way, so you can use the dice that suit your game:

| Move | Roll | Strong hit | Weak hit |
|---|---|---|---|
| **Make a Check** | d6 + stat + adds against two d10s | Beat both | Beat one |
| **Risk It** | 2d6 + stat + adds | 10 or more | 7 to 9 |
| **Test Fate** | 4dF + stat + adds against a **Difficulty** | Beat it | Tie it |
| **Beat the Odds** | d20 + stat + adds against a **DC** | Meet it | Miss by 3 or less |

Anything else is a miss. Test Fate's **Difficulty** starts at Fair (+2), and Beat the Odds' **DC**
at 12; set either with its stepper before you roll. On Beat the Odds a natural 20 always succeeds
and a natural 1 always fails.

Set a Goal, Form a Bond and Begin a Journey roll 2d6 like Risk It. Abstractica campaigns have no
momentum and no **Move rolls** setting: moves always roll when you choose them.

## The Dice tab and /roll

The **Dice** tab rolls anything. Click a die (**d4**, **d6**, **d8**, **d10**, **d12**, **d20**,
**d100**, **dF**) to add it to the roll; right-click or Shift-click to take one away. Or type the
dice in the field. Click **Roll**.

The result shows each die and the total. **Embed** puts it into your text, and **↻** rolls the
same dice again. Earlier rolls are listed under **Recent**.

From the editor, type `/roll` and the dice: `/roll 2d6+1`. If the dice can't be read, the **Roll
Dice** form opens with the reason.

| You type | You roll |
|---|---|
| `2d6`, `d20`, `3d8+2` | Dice of any size, with or without a number added or taken away |
| `d%` | A d100 |
| `4dF` | Fate dice, each showing −, blank, or + |
| `d66` | Two d6 read as tens and ones (11 to 66) |
| `2d6+1d4-1` | Several groups added together |

Up to 100 dice in a group, with up to 1,000 sides each.

## Dice on screen and dice sounds

**Settings** → **Display** → **Animated dice** throws 3D dice across the window when you roll
from the Dice tab, use `/roll`, or make a move. The dice you see decide the roll. Click anywhere to
clear them once they land. With it off, rolls resolve at once. If your computer is set to reduce
motion, the dice stay off.

Oracles, tables and generators always roll without the 3D dice.

**Settings** → **Sound** → **Dice sounds** plays a dice sound whenever you roll, with **Dice
volume** below it. A campaign can turn its own sounds off in **Campaign settings** → **Dice
sounds**.

## Assets

*Ironsworn, Starforged.* Asset cards are your character's paths, companions and other edges:
Ironsworn has 78 (companions, combat talents, paths and rituals), Starforged 87 (paths,
companions, deeds, modules and vehicles). To add one, type `/asset` and pick it from the list.
It's added to your character's sheet; nothing goes into your text. See
[Entities](/guide/entities/) for the sheet itself.

Abstractica campaigns have no asset cards.

:::tip
Rolling your own dice at the table? Write the result as prose. See the
[FAQ](/help/faq/#can-i-use-my-own-dice).
:::
