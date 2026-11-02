---
title: Clocks and progress tracks
description: Swear vows, mark progress, make progress rolls, and run clocks and real-time timers, and find where each one lives on screen.
sidebar:
  order: 6
---

A **progress track** measures how close you are to something: a vow, a journey, a fight won. A
**clock** measures something closing in. A **timer** counts real minutes.

| Game system | Progress tracks | Clocks | Timers |
|---|---|---|---|
| Ironsworn | Vows, journeys, combat, expeditions, delve sites | — | — |
| Starforged | Vows, connections, expeditions, combat, scene challenges, legacy | Tension clocks, started by Begin the Scene | — |
| Abstractica | Goals, bonds, threats, journeys | Yes | Yes |

## Progress tracks

A track has 10 boxes, and each box holds 4 ticks. Its rank says how much one mark of progress
fills:

| Ironsworn, Starforged | Abstractica | One mark fills |
|---|---|---|
| Troublesome | Minor | 3 boxes |
| Dangerous | Moderate | 2 boxes |
| Formidable | Major | 1 box |
| Extreme | Grand | 2 ticks |
| Epic | Legendary | 1 tick |

### Start a track

- **Swear a vow.** *Ironsworn, Starforged.* Type `/vow` (or `/swear`), with the vow if you like:
  `/vow Find my brother`. It opens the Swear an Iron Vow move with the vow named; choose its rank
  and roll.
- **Make a move that begins one.** Undertake a Journey, Enter the Fray and Delve the Depths in
  Ironsworn; Make a Connection, Undertake an Expedition, Enter the Fray and Begin the Scene in
  Starforged; Set a Goal, Form a Bond, Begin a Journey and Face a Threat in Abstractica. The move's
  form asks you to begin a new track, with its name and rank, or to pick one you already have.
- **Add one by hand.** On your character's sheet, click **+ Add Vow** (Ironsworn, Starforged) or
  **+ Add Track** (Abstractica), give it a name, a kind and a rank, and click **Add**.

### Mark progress

- **`/progress`** (or `/track`; in Abstractica also `/goal`), then pick the track from the list.
  It's marked once, by its rank, and a block records the ticks before and after.
- **The top bar.** Hover over a track to see its boxes. **+** marks progress and **−** takes a mark
  back.
- **Move outcomes.** Many moves offer *mark progress* as one of their choices. Tick it on the move
  block.

When a mark fills a track, a gold block announces it (*Vow Progress Complete*, for a vow) with a
button for the move that finishes it, such as **Fulfill Your Vow**. A full track isn't finished
until you make that move: the roll can still miss.

### The progress roll

A progress move rolls your **Progress Score** (the number of filled boxes) against the two
challenge dice. There's no action die, and momentum can't be burned. You can make it from the
button on the gold block, from the track on your sheet or in the In play strip, from the Moves
tab, or with `/move`. Pick the track it resolves and the score fills itself in.

On a hit, the block offers **Mark Complete**. The track is finished and a gold block records it:
*Vow Fulfilled* in Ironsworn and Starforged, *Goal Achieved* in Abstractica.

On a miss, choose what happens next:

- **Recommit** (**Try Again** in Abstractica) keeps the track and raises its rank one step, unless
  it's already at the top. Ironsworn and Abstractica clear all but one filled box; Starforged
  clears as many boxes as the lower challenge die showed.
- **Forsake Your Vow**, for a vow, adds that move below so you can play out giving it up. Other
  tracks that can be given up show **Forsake** (**Abandon** in Abstractica).

A track that ends is listed as *Completed*, or *Forsaken* (*Abandoned* in Abstractica).

## Where tracks live

**The top bar** runs across the top of the window. It holds your vows (Ironsworn, Starforged), or
all of your tracks (Abstractica), along with clocks, timers, conditions and Abstractica's Chaos
Factor. **×** on a chip hides it from the bar until you next open the campaign; it doesn't delete
anything.

**The In play strip.** *Ironsworn, Starforged.* Fights, journeys, expeditions, delve sites and
scene challenges hang below the scene strip, behind the **Progress Tracks in Play** tab, which
shows how many are running. The strip opens by itself when a move starts one. Each card shows the
track's rank and boxes, who has the upper hand in a fight, a scene challenge's tension clock, and
buttons for the moves you make with it, such as Strike or End the Fight. In Ironsworn fights, set
your **Harm** with **−** and **+**. **Finished** lists the ones that have ended.

**Your character's sheet** lists every vow (or track) with its boxes, a mark button, and buttons to
finish it or give it up. Starforged connections are in the **Entities** tab, under
**Connections**.

### Legacy tracks

*Starforged.* The **Legacy** section of your sheet holds three tracks: Quests, Bonds and
Discoveries. Moves that earn a legacy reward, such as Fulfill Your Vow, offer it as a choice on the
block, and **−** and **+** on the sheet change a track by one tick. Every filled box earns
experience: the section counts what you've earned, spent and have available. When a legacy track
is full, **Clear** starts it again, earning at the reduced rate.

*Ironsworn* characters also have Delve's **Failures** track. A miss offers **Mark your failure**,
and Learn From Your Failures rolls against it.

## Clocks

*Abstractica.* Open the **Clocks** tab and fill in **Create Clock**:

- A name.
- **Segments**: 4, 6, 8, 10 or 12.
- **Progress** or **Countdown**.
- The kind of clock. A **Threat clock** (6 segments) is a danger advancing on its own; you can ask
  the oracle whether it moves. A **Countdown** (4 segments) is a deadline you fill by hand. Choosing
  a kind sets its usual number of segments.

Click **Create Clock**. It appears under **Active Clocks** and as a chip in the top bar, and a block
records it in your text.

To fill a clock, click its chip in the top bar, or use **+** in the Clocks tab. The tab also has
**−** to empty one segment, **↻** to empty the clock, and **×** to delete it. Filling, emptying
and resetting each add a block to your text.

**Ask whether a threat clock advances.** Pick the odds on its chip or in the tab, then click
**advance?** on the chip or **Advance?** in the tab. Abstractica asks the oracle: a yes fills one
segment, a yes on doubles fills two, and a no fills nothing. The block records the roll either
way.

### /clock

| You type | What happens |
|---|---|
| `/clock` | Opens the **Create Clock** form. |
| `/clock Iron Syndicate` | Makes a clock with that name, or fills one segment if it exists. |
| `/clock Iron Syndicate 8` | Makes a new clock with 8 segments. If the clock exists, fills 8 segments instead. |
| `/clock Iron Syndicate +2` | Fills 2 segments. |
| `/clock Iron Syndicate -1` | Empties 1 segment. |
| `/clock Iron Syndicate reset` | Empties the clock. |

When `/clock` fills a clock, a message says so: *Iron Syndicate: The clock is full.*

Clocks also start from play: the Face a Threat move starts a 6-segment threat clock alongside its
track, and the Make Camp [procedure](/guide/generators/#procedures) starts a 4-segment clock when
the night is disturbed.

### Tension clocks in Starforged

Starforged campaigns have no Clocks tab or `/clock`. The **Begin the Scene** move starts a scene
challenge with a 4-segment tension clock. It shows on the scene challenge's card in the In play
strip and as a chip in the top bar; click the chip to fill a segment.

## Timers

*Abstractica.* A timer counts down real time: a deadline for a scene, or a limit on your evening.

- In the **Clocks** tab, fill in **Create Timer** with a name and a number of minutes (it starts at
  5) and click **Create Timer**.
- Or type `/timer`, a name and the minutes: `/timer Guards return 15`. Leave out the minutes and
  it runs for 10.

The timer starts at once. Its chip in the top bar shows the time left; click the chip to pause or
resume. In the last 30 seconds the chip pulses red, and at zero it stops. The Clocks tab lists
running timers under **Active Timers**, with **Pause**, **Resume** and **×** to delete.

A timer counts down only while the session is open. Close it and the timer waits; it picks up
where it left off when you come back.
