---
title: Custom oracles
description: Build an oracle from two tables in the app, and write tables of your own in a content pack.
sidebar:
  order: 2
---

A custom oracle rolls two tables at once and joins the two answers into one, such as
*Cozy Fantasy* + *Trade* for a two-word prompt. You build it in the app, from any tables your
campaign has.

There's no table editor in the app. To roll on tables of your own, you write them as JSON files
in a content pack, covered in [the second half of this page](#write-your-own-tables).

## Build a custom oracle

1. Open a campaign and the **Oracle** tab.
2. Click **New custom oracle**, under the search box.
3. Fill in **Name**, up to 60 characters. **Description** is optional; it shows under the name
   in the Oracle tab.
4. Under **First table**, click **Choose table**, type to filter the list, and pick a table. Do
   the same under **Second table**. You can pick the same table twice.
5. Under **Join results with**, choose what goes between the two answers: **+**, **/**, **—**,
   or **␣** for a space.
6. Optional: click **Roll preview** to try it. Previews are never logged.
7. Click **Save oracle**. Abstractica confirms with *Custom oracle "Cozy Trade" created*.

**Save oracle** stays greyed out until the oracle has a name and two tables.

## Rolling it

Custom oracles appear in the Oracle tab under **Custom**, and in the list `/oracle` offers.
Clicking one rolls both tables: **Rolls** shows both dice, and the answer is the two results
joined, in the order of the tables. Click **Embed in journal** to add it to your session. In
your journal it reads like any other oracle result.

## Where custom oracles work

Custom oracles are saved outside your campaigns, in the `custom-oracles` folder of your data
folder, so every campaign can use them. A campaign can roll one only when it has both of its
tables.

*Cozy Fantasy*, for example, is an Abstractica Content table for fantasy games. It's in every
Abstractica campaign and in Ironsworn campaigns that include Abstractica Content, but never in
Starforged. A *Cozy Fantasy* + *Trade* oracle doesn't appear in a Starforged campaign.

When a campaign can't roll some of your custom oracles, the Oracle tab says so under the list:
*1 custom oracle needs content this campaign doesn't have*. Click that line to open
**Custom Oracles**, a list of every custom oracle you've made. One the campaign can't roll shows
*Needs:* and the missing tables, *— not in this campaign*, with **Add content to this
campaign…**, which opens **Campaign settings**. See
[Campaign content](/authoring/overview/#campaign-content).

## Editing and deleting

Hover over a custom oracle in the Oracle tab to show its pencil and bin icons.

- **Edit** (the pencil) opens **Edit Custom Oracle**. Click **Save changes** when you're done.
  Results you already embedded keep their wording.
- **Delete** (the bin) asks *Delete custom oracle?* The oracle is removed from every campaign;
  results already embedded in your journal are unaffected.

## The custom oracle file

Each custom oracle is one file in `custom-oracles`:

```json
{
  "schemaVersion": 1,
  "id": "custom-oracle-3f2c9a4e-8d1b-4c6a-9e2f-5b7d1a0c4e88",
  "name": "Cozy Trade",
  "description": "What is the shop's trouble today?",
  "tableIds": ["table-cozy", "table-trade"],
  "tableNames": ["Cozy Fantasy", "Trade"],
  "joinWith": " + ",
  "createdAt": "2026-10-20T19:04:11.000Z",
  "updatedAt": "2026-10-20T19:04:11.000Z"
}
```

- `tableIds` are the two tables, in the order they're rolled.
- `tableNames` are the tables' names when you saved, so the **Custom Oracles** list can name a
  table the campaign doesn't have.
- `joinWith` is one of `" + "`, `" / "`, `" — "`, or `" "`.

To share an oracle, copy its file into the other computer's `custom-oracles` folder and restart
Abstractica there. **Back Up Your Data…** includes the folder.

Make changes in the app rather than in the file: the builder checks an oracle when you save it,
but a file you edit by hand is read as it is, at the next start.

## Write your own tables

Your own tables live in a content pack: a folder in your data folder that a campaign turns on in
**Campaign settings**. [Set one up](/authoring/overview/#your-own-content-pack) first.

Each table is one JSON file in the pack's `tables` folder, listed under `features.tables` in the
pack's `manifest.json`. This is `tables/want-table.json` from the example pack:

```json
{
  "id": "table-wayside-want",
  "name": "Wayside Want",
  "description": "What a stranger on the road is after.",
  "category": "Wayside",
  "diceExpression": "1d6",
  "entries": [
    { "rangeStart": 1, "rangeEnd": 2, "value": "Safe passage to the next town" },
    { "rangeStart": 3, "rangeEnd": 3, "value": "News of someone they lost" },
    { "rangeStart": 4, "rangeEnd": 4, "value": "A buyer who asks no questions" },
    { "rangeStart": 5, "rangeEnd": 5, "value": "To deliver a letter", "subtableId": "table-wayside-letter" },
    { "rangeStart": 6, "rangeEnd": 6, "value": "To be left alone" }
  ]
}
```

And `tables/letter-table.json`, which the fifth row rolls on:

```json
{
  "id": "table-wayside-letter",
  "name": "Wayside Letter",
  "category": "Wayside — Letters",
  "diceExpression": "1d4",
  "entries": [
    { "rangeStart": 1, "rangeEnd": 1, "value": "A debt called in" },
    { "rangeStart": 2, "rangeEnd": 2, "value": "A warning, unsigned" },
    { "rangeStart": 3, "rangeEnd": 3, "value": "A proposal of marriage" },
    { "rangeStart": 4, "rangeEnd": 4, "value": "News of a death" }
  ]
}
```

With the pack turned on, a custom oracle can join *Wayside Traveller* and *Wayside Want* with
**—** to answer *Courier — To deliver a letter*.

### Table fields

| Field | Required | What it does |
|---|---|---|
| `id` | Yes | The table's id, used by custom oracles, generators, and procedures. Start it with your pack's slug. See [Ids](/authoring/overview/#ids). |
| `name` | Yes | Shown in the Tables tab, in `/table`, and in the custom oracle builder. |
| `description` | No | Shown under the name in the Tables tab and the builder's table list. |
| `category` | No | Groups tables in the Tables tab. Write `Wayside — Letters`, with a space, an em dash, and a space, to nest *Letters* under *Wayside*. Tables without one are grouped under *Uncategorized*. |
| `diceExpression` | No | The dice to roll, such as `1d6`, `d100`, `2d6`, or `d66`. Without it, Abstractica rolls a number from 1 to the highest `rangeEnd`. |
| `tags` | No | Genre tags; see [Tables in Ironsworn and Starforged](#tables-in-ironsworn-and-starforged). |
| `entries` | Yes | The rows, each with the fields below. |

| Row field | Required | What it does |
|---|---|---|
| `rangeStart`, `rangeEnd` | Yes | The rolls that land on this row, inclusive. A row for a single number has the same start and end. |
| `value` | Yes | The row's text: the result. |
| `subtableId` | No | Another table's id, rolled once when this row comes up. |
| `data` | No | Extra facts about the row that only generators read. See [Writing generators](/authoring/generators/#entry). |

### How a roll finds its row

Abstractica rolls the table's dice, then takes the row whose `rangeStart` and `rangeEnd` hold
the total. The ranges must cover every number the dice can roll:

- `1d6` and `d100` roll every number from 1 up, so the ranges run from 1 to the top with no gaps.
- `2d6` rolls 2 to 12, so start at 2.
- `d66` reads two six-sided dice as tens and ones, giving 11 to 16, 21 to 26, and so on up to 66.
  It never rolls 17 to 20, so those numbers need no rows.

A roll that lands on no row gives *No matching entry* in the Tables tab, and a custom oracle
using that table gives no answer at all.

### Rolling on another table

When the Tables tab or `/table` lands on a row with a `subtableId`, Abstractica also rolls that
table once and shows its result under **Subtable Results:**, with the table's name. Rolling
*Wayside Want* might give *To deliver a letter*, then *Wayside Letter: A warning, unsigned*.

Only that one extra roll is shown, so a subtable's own `subtableId` rows don't add a third.
Custom oracles, generators, and procedures use the row's `value` alone and don't roll its
subtable.

### Tables in Ironsworn and Starforged

A pack table's `tags` decide whether it loads in Ironsworn and Starforged campaigns:

| Tag | Ironsworn | Starforged | Abstractica |
|---|---|---|---|
| `"fantasy"` | Yes | No | Yes |
| `"sci-fi"` | No | Yes | Yes |
| `"generic"`, or no tag | Yes | Yes | Yes |

Abstractica Content's tables follow the same rule, which is why *Cozy Fantasy* never appears in
Starforged.

### Where your tables show up

- In the **Tables** tab, under their category. Click one to roll; **Embed in Journal** adds the
  result to your session.
- In `/table`: start typing the table's name.
- In the custom oracle builder's table lists.
- In your generators and procedures, by id.

If a table doesn't appear, see
[When something doesn't appear](/authoring/overview/#when-something-doesnt-appear).
