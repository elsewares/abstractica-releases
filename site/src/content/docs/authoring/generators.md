---
title: Writing generators
description: Write generators that roll several tables into one result, such as a person met on the road, and fill in an entity from it.
sidebar:
  order: 3
---

A generator is a list of fields, filled top to bottom: roll a traveller, name them after where
they come from, look up how they feel about you, roll what they carry. One click gives you the
whole person.

There's no generator editor in the app. You write a generator as a JSON file in a content pack
of your own, then turn the pack on in a campaign. [Set one up](/authoring/overview/#your-own-content-pack)
first. To use the generators Abstractica ships, see [Generators](/guide/generators/).

## How a generator shows up

- **The Generators & Procedures tab** lists, under **Generators**, each generator whose
  `entityType` is an entity type the campaign has. Clicking one opens the create form for that
  entity type, filled in from a fresh roll.
- **`/generator`** (or `/gen`) offers every generator the campaign has, with or without an
  entity type. Choosing one adds a block titled with the generator's name, with a line for each
  field: its label and its value. Empty and skipped fields are left out.
- **A procedure** can run a generator as one of its steps. See
  [Writing procedures](/authoring/procedures/).

## A complete example

*Wayside Stranger* makes an NPC for Abstractica campaigns. This is
`generators/stranger-generator.json` in the example pack:

```json
{
  "id": "generator-wayside-stranger",
  "name": "Wayside Stranger",
  "category": "Wayside",
  "source": "Wayside",
  "entityType": "npc",
  "fields": [
    {
      "key": "role",
      "label": "Role",
      "source": { "kind": "table", "tableId": "table-wayside-traveller" }
    },
    {
      "key": "name",
      "label": "Name",
      "source": {
        "kind": "template",
        "template": "The {{role}} from {{roll:table-town-name-prefix}}{{roll:table-town-name-suffix}}"
      }
    },
    {
      "key": "disposition",
      "label": "Disposition",
      "source": { "kind": "entry", "field": "role", "key": "disposition" }
    },
    {
      "key": "goal",
      "label": "Wants",
      "source": { "kind": "table", "tableId": "table-wayside-want" }
    },
    {
      "key": "carrying",
      "label": "Carrying",
      "attribute": "notes",
      "count": "1d3",
      "unique": true,
      "source": { "kind": "table", "tableId": "table-wayside-carrying" }
    },
    {
      "key": "coins",
      "label": "Coins",
      "excludeFromEntity": true,
      "when": { "field": "role", "in": ["Pedlar", "Courier"] },
      "source": {
        "kind": "compute",
        "expression": {
          "op": "multiply",
          "terms": [
            { "op": "dice", "expression": "2d6" },
            { "op": "const", "value": 5 }
          ]
        }
      }
    },
    {
      "key": "secret",
      "label": "Secret",
      "excludeFromEntity": true,
      "source": {
        "kind": "pick",
        "on": "role",
        "cases": {
          "Deserter": { "kind": "literal", "value": "Their old company is looking for them." },
          "Courier": { "kind": "literal", "value": "The letter they carry has been opened." }
        },
        "default": { "kind": "literal", "value": "" }
      }
    }
  ]
}
```

It rolls two tables from the same pack. `tables/traveller-table.json` carries a `data` record on
each row, which the `disposition` field reads:

```json
{
  "id": "table-wayside-traveller",
  "name": "Wayside Traveller",
  "description": "Who you meet on the road.",
  "category": "Wayside",
  "diceExpression": "1d6",
  "entries": [
    { "rangeStart": 1, "rangeEnd": 1, "value": "Pilgrim", "data": { "disposition": "Friendly" } },
    { "rangeStart": 2, "rangeEnd": 2, "value": "Pedlar", "data": { "disposition": "Neutral" } },
    { "rangeStart": 3, "rangeEnd": 3, "value": "Deserter", "data": { "disposition": "Wary" } },
    { "rangeStart": 4, "rangeEnd": 4, "value": "Courier", "data": { "disposition": "Wary" } },
    { "rangeStart": 5, "rangeEnd": 5, "value": "Tinker", "data": { "disposition": "Neutral" } },
    { "rangeStart": 6, "rangeEnd": 6, "value": "Minstrel", "data": { "disposition": "Friendly" } }
  ]
}
```

`tables/carrying-table.json`:

```json
{
  "id": "table-wayside-carrying",
  "name": "Wayside Carrying",
  "description": "Something a traveller has with them.",
  "category": "Wayside",
  "diceExpression": "1d6",
  "entries": [
    { "rangeStart": 1, "rangeEnd": 1, "value": "A lantern with a cracked pane" },
    { "rangeStart": 2, "rangeEnd": 2, "value": "Forty feet of good rope" },
    { "rangeStart": 3, "rangeEnd": 3, "value": "A sack of last year's apples" },
    { "rangeStart": 4, "rangeEnd": 4, "value": "A map with one town scratched out" },
    { "rangeStart": 5, "rangeEnd": 5, "value": "A dog that isn't theirs" },
    { "rangeStart": 6, "rangeEnd": 6, "value": "A locked box they won't open" }
  ]
}
```

`table-wayside-want` is the table on [Custom oracles](/authoring/custom-oracles/#write-your-own-tables).
The town name tables, `table-town-name-prefix` and `table-town-name-suffix`, come with
Abstractica Content, which every Abstractica campaign has.

With the pack turned on, clicking **Wayside Stranger** in the Generators & Procedures tab opens
the create form for an NPC, filled in: a name such as *The Courier from Ashford*, a **Role**, a
**Disposition**, a **Goal**, and **Notes** listing one to three things they carry, separated by
semicolons. **Coins** and **Secret** aren't NPC fields, so they appear only in the `/generator`
block.

## The generator file

| Field | Required | What it does |
|---|---|---|
| `id` | Yes | `generator-` followed by lowercase letters, digits, and hyphens, such as `generator-wayside-stranger`. |
| `name` | Yes | Shown in the Generators & Procedures tab, in `/generator`, and as the block's title. |
| `category` | No | Groups generators in the tab. `Wayside — People`, with an em dash, nests *People* under *Wayside*. `/generator` shows it beside the name. |
| `source` | No | A short note on where the generator comes from. The tab shows it when you hover over the generator's button. |
| `entityType` | No | The entity type the generator fills in. See [Filling an entity](#filling-an-entity). |
| `fields` | Yes | The fields, in order. |
| `description` | No | Not shown in this version. |

## Fields

| Field | Required | What it does |
|---|---|---|
| `key` | Yes | The field's name, unique within the generator. Later fields use it to refer to this one. It's also the entity field this one fills, unless `attribute` says otherwise. |
| `label` | No | Shown in the `/generator` block. Defaults to `key`. |
| `source` | Yes | Where the value comes from. See [Sources](#sources). |
| `when` | No | Fill this field only when an earlier field has a given value. See [Conditions](#conditions). |
| `count`, `unique` | No | Fill this field several times. See [Several values](#several-values). |
| `attribute` | No | The entity field to fill, when it isn't `key`. |
| `excludeFromEntity` | No | `true` keeps the field out of the entity, so it shows only in the `/generator` block. |
| `choosable` | No | Abstractica's own generators use it to mark fields you might choose rather than roll. The app doesn't act on it. |

Fields fill from top to bottom, and a field can refer only to fields above it.

## Sources

Each field's `source` has a `kind`:

| `kind` | Gives | Example |
|---|---|---|
| `table` | Text | `{ "kind": "table", "tableId": "table-wayside-traveller" }` |
| `oracle` | Text | `{ "kind": "oracle", "oracleId": "oracle-tapestry-story" }` |
| `dice` | A number | `{ "kind": "dice", "expression": "2d6" }` |
| `template` | Text | `{ "kind": "template", "template": "The {{role}} from somewhere" }` |
| `compute` | A number | `{ "kind": "compute", "expression": { "op": "dice", "expression": "1d6" } }` |
| `pick` | Whatever the chosen case gives | See [pick](#pick) |
| `entry` | Text or a number | `{ "kind": "entry", "field": "role", "key": "disposition" }` |
| `literal` | The value you write | `{ "kind": "literal", "value": "" }` |

### table

Rolls the table the way the Tables tab does and gives the row's `value`. A row's `subtableId`
isn't rolled.

### oracle

Consults an oracle and gives its answer. A yes/no oracle is asked at even odds. The themed
oracles, *Fate* (`oracle-tapestry-fate`), *Story* (`oracle-tapestry-story`), *The World*
(`oracle-tapestry-world`), and *The Unseen* (`oracle-tapestry-unseen`), answer in the campaign's
oracle theme; add `"lean": "favourable"` or `"lean": "unfavourable"` to tilt the answer.

A generator can't use custom oracles.

### dice

Rolls dice and gives the total. Use the notation `/roll` takes, such as `2d6`, `1d8+2`, `d100`,
or `d66`.

### template

Builds text. Inside the `template`:

- `{{key}}` puts in an earlier field's value. A list is joined with commas; a skipped field puts
  in nothing.
- `{{roll:table-id}}` rolls a table and puts in the row's `value`.
- `{{dice:1d6}}` rolls dice and puts in the total.

There's no way to write a literal `{{`.

### compute

Arithmetic, written as a small tree of operations, each with an `op`:

| `op` | Shape | Gives |
|---|---|---|
| `const` | `{ "op": "const", "value": 5 }` | The number |
| `dice` | `{ "op": "dice", "expression": "2d6" }` | The roll's total |
| `field` | `{ "op": "field", "key": "grit" }` | An earlier field's value, which must be a number |
| `add` | `{ "op": "add", "terms": [ … ] }` | The sum of the terms |
| `subtract` | `{ "op": "subtract", "terms": [ … ] }` | The first term minus the rest |
| `multiply` | `{ "op": "multiply", "terms": [ … ] }` | The product of the terms |
| `clamp` | `{ "op": "clamp", "value": { … }, "min": 1, "max": 10 }` | The inner value, kept between `min` and `max`; either can be left out |

Health of 1d8 plus an earlier `grit` field, never below 1:

```json
{
  "kind": "compute",
  "expression": {
    "op": "clamp",
    "min": 1,
    "value": {
      "op": "add",
      "terms": [
        { "op": "dice", "expression": "1d8" },
        { "op": "field", "key": "grit" }
      ]
    }
  }
}
```

### pick

Chooses a source by an earlier field's value. `on` names the field; `cases` holds a source for
each value, written exactly as the value reads; `default` is used for any other value. A case
can be any source, including another `pick`.

If the value has no case and there's no `default`, the generator stops and gives nothing. Always
include a `default`; `{ "kind": "literal", "value": "" }` gives an empty field that's left out
of the block.

### entry

Reads a table row's `data`. `field` names an earlier field whose source is a `table` (or a
`pick` whose cases are all tables); `key` names the item to read from the row that field landed
on. A row without that item gives empty text.

In the example, a *Courier* row carries `"data": { "disposition": "Wary" }`, so the
`disposition` field reads *Wary*. A table roll never shows `data`; only generators read it.

### literal

A fixed value: text, a number, or `true` or `false`.

## Conditions

`when` fills a field only if an earlier field has a given value:

```json
"when": { "field": "role", "equals": "Courier" }
```

```json
"when": { "field": "role", "in": ["Pedlar", "Courier"] }
```

The match is exact, capitals included. Write numbers without quotes. When the condition fails,
the field is skipped: it isn't in the block, and it isn't copied to the entity.

## Several values

`count` fills a field more than once and makes its value a list. It takes a number, such as `3`,
or dice, such as `"1d3"`. With `"unique": true`, Abstractica re-rolls a value it already has, up
to 20 times, then keeps the repeat rather than fail.

## Filling an entity

With an `entityType`, the generator appears in the Generators & Procedures tab of every campaign
that has that entity type, and clicking it opens that type's create form, filled in. Without
one, or in a campaign that doesn't have the type, the generator is only in `/generator`.

| System | `entityType` values |
|---|---|
| Ironsworn | `character`, `delve-site`, `hazard`, `location`, `monster`, `threat` |
| Starforged | `character`, `creature`, `derelict`, `faction`, `npc`, `planet`, `sector`, `settlement`, `starship`, `vault`, `vehicle` |
| Abstractica | `character`, `creature`, `faction`, `npc`, `place` |

Abstractica Content adds `settlement` to every campaign that includes it.

Each field fills the entity field named by its `attribute`, or by its `key`:

- `name` fills the entity's name, and `description` its description.
- A number field gets a number; a value that isn't a number is left out.
- A field with a fixed list of options, such as an NPC's **Disposition**, should get one of
  those options.
- A list from `count` is joined with semicolons in a text field.
- A field the entity type doesn't have is left out of the entity, as is any field with
  `excludeFromEntity`. Both still show in the `/generator` block.

To find an entity type's field keys, open its file in Abstractica's copies, in
`game-systems/<system>/entity-schemas/`, and read the `key` of each item under `attributes`.
An Abstractica NPC has `role`, `disposition` (one of `Hostile`, `Wary`, `Neutral`, `Friendly`,
or `Devoted`), `goal`, and `notes`.

## Rules Abstractica checks

Abstractica checks each generator when it opens a campaign, after it has loaded all the
campaign's content. A generator that breaks one of these rules is left out: it's missing from
the tab and from `/generator`, and nothing tells you why.

- The `id` doesn't start with `generator-`, or has characters other than lowercase letters,
  digits, and hyphens. The `name` is empty. There are no `fields`.
- A field's `key` is empty, or two fields share one.
- A `kind` or `op` is misspelled or unknown.
- A table or oracle id isn't loaded in this campaign, including ids inside templates and picks.
- A field refers to a field that isn't above it: in `when`, in a pick's `on`, in a template's
  `{{key}}`, in a compute `field`, or in an entry's `field`.
- An `entry` reads a field that doesn't roll a table.
- Dice in a `dice` source, a `count`, a `{{dice:…}}`, or a compute `dice` aren't valid notation,
  or a `count` number isn't a whole number of 1 or more.
- An `add`, `subtract`, or `multiply` has no terms, or a `clamp` has a `min` above its `max`.

These load, but don't do what you meant:

- An `entityType` the campaign doesn't have: the generator is only in `/generator`.
- An `attribute` the entity type doesn't have: the value isn't copied to the entity.
- A `pick` case that isn't a value of the table it picks on: that case is never used.
- An `entry` key that no row carries: the field is always empty.

A generator can also stop partway through a roll: a pick finds no case and has no `default`, or a
compute `field` isn't a number. Then `/generator` adds no block, and the create form stays as it
was.
