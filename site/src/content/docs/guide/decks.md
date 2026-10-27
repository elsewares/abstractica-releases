---
title: Decks
description: Draw playing cards and tarot cards into your text, from decks that keep their own shuffle and discard pile. Abstractica campaigns only.
sidebar:
  order: 8
---

A deck gives you randomness that remembers: a card you've drawn stays out until the deck is
shuffled, so you won't see it again until then. Draw from the sidebar or with a slash command,
and the cards land in your text as a block.

Decks are in Abstractica campaigns only. Ironsworn and Starforged campaigns have no **Decks** tab
and no `/deck` command; see the [FAQ](/help/faq/#why-dont-i-have-clocks-or-decks-in-my-ironsworn-campaign).

## The decks

Abstractica comes with four deck templates. A template is a list of cards. You add a deck to your
campaign from a template, and that deck keeps its own order and its own discard pile.

| Template | Cards | What's in it |
|---|---|---|
| **Standard Playing Cards** | 52 | Ace, 2 to 10, Jack, Queen, and King in Hearts, Diamonds, Clubs, and Spades. No jokers. |
| **Rider-Waite Tarot** | 78 | The Major Arcana and the Minor Arcana together. |
| **Major Arcana** | 22 | The Fool (0) to The World (21). |
| **Minor Arcana** | 56 | Ace, 2 to 10, Page, Knight, Queen, and King in Wands, Cups, Swords, and Pentacles. |

Every tarot card carries a one-line meaning, which you see when you draw it. Cards are always
drawn upright; there are no reversed meanings.

## Adding a deck to your campaign

1. Open the **Decks** tab in the sidebar.
2. Under **Create Deck**, choose a template. Each one shows its card count, such as
   *Standard Playing Cards (52 cards)*.
3. Type a **Custom name** if you like. Without one, the deck takes the template's name.
4. Click **Create Deck**.

The deck appears under **Active Decks**, freshly shuffled. A campaign can hold as many decks as you
like, including several from one template. Give those different names, because the name is how
you tell them apart when you draw.

Decks belong to the campaign, not the session: a deck carries its draws from one session to the
next.

## Drawing

**From the Decks tab:** each deck has a number box next to **Draw**. Set how many cards you want
(1 by default) and click **Draw**.

**With a command:** type `/deck` or `/draw`.

- Choose it with **Enter** and the menu lists your decks. Pick one to draw a card.
- Click it instead to open **Draw from Deck**: pick a **Deck** (each shows how many cards remain),
  set **Cards to draw** (1 to 10), and click **Draw**.

If the campaign has no decks yet, the form says *No active decks. Create one from the sidebar
first.* See [Slash commands](/guide/slash-commands/#deck).

## What lands in your text

A deck block, titled with the deck's name. Expanded, it shows each card's name, its suit and rank,
and for a tarot card its meaning, then how many cards remain in the deck. Collapsed, it shows the
first card, with *+2 more* when you drew three.

Copied into another app, the block becomes one line, such as
`[Deck: Rider-Waite Tarot — The Tower, Three of Cups]`.

Deleting a deck block from your text doesn't put its cards back in the deck.

## The draw pile and the discard pile

There's no hand to hold cards in. Every card you draw goes straight to the deck's discard pile.
Each deck in the **Decks** tab shows how many cards remain and how many are discarded, with a bar
for the cards left to draw.

- **When the draw pile runs out**, your next draw shuffles the discard pile back in first, then
  draws.
- **When you ask for more cards than remain**, you get the ones that are left. The reshuffle waits
  for your next draw.
- **Shuffle** (the crossed arrows, *Shuffle draw pile + discard pile*) puts the discard pile back
  and shuffles the whole deck.
- **Reset** (the circular arrow, *Reset deck (all cards back)*) returns the deck to its full set
  of cards, shuffled. With the decks that come with Abstractica, Shuffle and Reset end the same
  way, because no card ever leaves a deck for good.

## Removing a deck

Click **×** (*Delete deck*) on the deck, then **Yes** at *Delete this deck?*. The deck leaves the
campaign. Cards it already put in your sessions stay where they are.
