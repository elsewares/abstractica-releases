---
title: Release notes
description: What changed in each version of Abstractica.
---

What's new and fixed in each version, newest first. Abstractica
[updates itself](/getting-started/install/#updates); every installer is on the
[releases page](https://github.com/elsewares/abstractica-releases/releases).

## v0.9.25

*Released 24 September 2026* · [Download](https://github.com/elsewares/abstractica-releases/releases/tag/v0.9.25)

### Oracles that answer in your campaign's genre

Abstractica's four themed oracles — **Fate**, **Story**, **The World**, and **The Unseen** — are
rewritten. Each one now answers in your campaign's **oracle theme**: Low Fantasy, High Fantasy,
Space Opera, or Cyberpunk. Ironsworn campaigns offer the two fantasy themes, Starforged the two
science-fiction ones, and Abstractica campaigns all four. Choose a theme when you create a
campaign, and change it any time in **Campaign settings**.

- Every answer is two draws, and each draw carries a charge — negative, plain, double-edged, or
  positive — shown by a glyph beside it.
- **Lean** a consult **Favourable** or **Unfavourable** to tilt the answer, or leave it **Open**.
- A new **Oracle gloss** setting shows the meaning behind each draw: **Always**, **On hover**,
  or **Off**.
- In your journal, the two draws sit side by side, and hovering no longer makes the page jump.
- Every line is reworded to read as plain English: no invented hyphenated compounds, no lines
  that staple two clauses together, and consistent title case.

Oracle results already in your journal keep their wording.

### Moves suggest oracles

After you roll a move, the move block offers the oracles that suit it under **Ask**, one click
each. The answer leans with your result: favourable on a strong hit, open on a weak hit,
unfavourable on a miss. 36 moves across Ironsworn, Starforged, and Abstractica have suggestions.
Most point to the themed oracles, so in Ironsworn and Starforged campaigns they appear when the
campaign includes Abstractica Content.

### Smaller changes

- Dice blocks and the `/roll` command use the Dice tab's d20 icon, and suggested-oracle buttons
  use the oracle icon.

## v0.9.20

*Released 19 September 2026* · [Download](https://github.com/elsewares/abstractica-releases/releases/tag/v0.9.20)

The first public release of Abstractica.

### What's in it

- **The Chronicle** — a block editor where your story and your game log are one document. Type
  `/` to ask an oracle, roll on a table, make a move, or roll dice, and the result lands in your text.
- **Three game systems** — **Ironsworn** and **Starforged**, with their moves, oracles, and
  assets; and **Abstractica**, a system-neutral sandbox with clocks, timers, decks, and custom
  character sheets for any game you play.
- **Abstractica Content** — original oracles and tables you can add to Ironsworn and Starforged
  campaigns.
- **Entities** for the people, places, and things in your story, **progress tracks** and
  **vows**, Starforged's **truths**, and **generators and procedures**.
- **Offline, with no account.** Your campaigns are plain files in `~/.abstractica`.
- **Free with one campaign.** A license unlocks unlimited campaigns on 2 computers.
- **Automatic updates.** Abstractica checks at startup and asks before installing.
- Downloads for macOS (Apple Silicon and Intel), Windows 10 and 11, and Linux (x64 and arm64,
  as `.deb`, `.rpm`, and AppImage).

### Fixes in this build

- **Windows:** opening the character sheet or Help no longer produces a blank window that
  freezes Abstractica.
- **Windows:** drop-down menus follow Abstractica's light or dark theme.
