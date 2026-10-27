---
title: Writing procedures
description: Write procedures that walk you through a routine one step at a time, and loops that chain procedures into a cycle of play.
sidebar:
  order: 4
---

A procedure is a routine you run during play, such as making camp or taking a room at an inn,
written as a list of steps. Each step does one thing Abstractica already does: roll a table, ask
an oracle, make a move, change your character. Steps open one at a time, and a step can depend
on what an earlier one rolled. A loop chains procedures into a cycle.

There's no procedure editor in the app. You write procedures and loops as JSON files in a content
pack of your own, then turn the pack on in a campaign. [Set one up](/authoring/overview/#your-own-content-pack)
first.

Abstractica campaigns come with four procedures, *Explore a Site*, *Frame a Scene*, *Make Camp*,
and *Travel Leg*, and one loop, *Expedition*. Their files, in `game-systems/abstractica-sandbox`
in your data folder, are good models. Ironsworn and Starforged campaigns have none of their own.

## How a procedure plays

Click a procedure under **Procedures** in the **Generators & Procedures** tab, or type
`/procedure` (or `/proc`) and choose one from the list. A block appears at your cursor, titled
with the procedure's name, with every step listed.

- The first step is ready. Its button says what it does: **Roll**, **Done**, **Apply**,
  **Generate**, **Create**, **Start**, **Track**, or **Draw**. A choice step has one button per
  option.
- The result appears beside the step, and the next step opens. Steps the run hasn't reached are
  dimmed.
- A step whose condition doesn't hold is skipped and struck through. Hover over it to see why,
  such as *Skipped: room.yes is not true*.
- **Reroll**, beside a result, runs that step again. Every step after it is undone, with any
  changes it made to your character, and waits to be run again.
- **Reset**, at the bottom of the block, undoes the whole run and starts it over.
- A step that can't run shows the reason in red, and the run moves on to the next step.

## A complete example

*Rest at an Inn* asks whether there's a room, takes payment, rests your character or sends them
to the barn, and sets up the evening. It's for Abstractica campaigns. This is
`procedures/inn-procedure.json` in the example pack:

```json
{
  "id": "proc-wayside-inn",
  "name": "Rest at an Inn",
  "category": "Wayside",
  "summary": "Take a room for the night, and see who else is staying.",
  "steps": [
    {
      "id": "room",
      "label": "Is there a room free?",
      "kind": "oracle",
      "oracleId": "oracle-abstractica-yes-no",
      "probability": "likely"
    },
    {
      "id": "pay",
      "label": "How do you pay?",
      "kind": "choice",
      "when": { "step": "room", "key": "yes", "equals": true },
      "options": [
        { "id": "coin", "label": "In coin" },
        { "id": "work", "label": "Work in the kitchen" }
      ]
    },
    {
      "id": "spend",
      "label": "Pay for the room",
      "kind": "effect",
      "when": { "step": "pay", "key": "choice", "equals": "coin" },
      "effects": [{ "kind": "meter", "key": "resources", "delta": -1 }]
    },
    {
      "id": "bed",
      "label": "A night in a bed",
      "kind": "effect",
      "when": { "step": "room", "key": "yes", "equals": true },
      "effects": [
        { "kind": "meter", "key": "health", "delta": 1 },
        { "kind": "list_remove", "key": "conditions", "value": "Exhausted" }
      ]
    },
    {
      "id": "barn",
      "label": "A night in the barn",
      "kind": "effect",
      "when": { "step": "room", "key": "yes", "equals": false },
      "effects": [{ "kind": "list_add", "key": "conditions", "value": "Exhausted" }]
    },
    {
      "id": "who",
      "label": "Who else is staying?",
      "kind": "table",
      "tableId": "table-wayside-traveller"
    },
    {
      "id": "evening",
      "label": "Write the evening",
      "kind": "prompt",
      "text": "The {{who}} has taken the seat nearest the fire. What do they want with you?"
    }
  ]
}
```

If the oracle says yes, you choose how to pay: **In coin** takes 1 from your character's
**Resources**; **Work in the kitchen** skips that step. A bed adds 1 to **Health** and clears
*Exhausted*. If the oracle says no, the payment and bed steps are skipped and the barn marks
*Exhausted*. Either way, the run rolls on *Wayside Traveller*
([Writing generators](/authoring/generators/#a-complete-example) has the table) and ends with a
line such as *The Tinker has taken the seat nearest the fire. What do they want with you?*

## The procedure file

| Field | Required | What it does |
|---|---|---|
| `id` | Yes | `proc-` followed by lowercase letters, digits, and hyphens, such as `proc-wayside-inn`. |
| `name` | Yes | Shown in the Generators & Procedures tab, in `/procedure`, and as the block's title. |
| `summary` | No | One line, shown under the block's title and when you hover over the procedure in the tab. |
| `category` | No | Groups procedures in the tab. `/procedure` shows it beside the name. |
| `steps` | Yes | The steps, in order. |

Abstractica's own files also carry `description`, `icon`, and `source`. This version doesn't
show them, so you can leave them out.

## Steps

Every step has these fields, plus the ones its kind needs:

| Field | Required | What it does |
|---|---|---|
| `id` | Yes | The step's name, unique within the procedure. Later steps use it to read this step's result. |
| `label` | Yes | What the step's row says. |
| `kind` | Yes | What the step does. See [Step kinds](#step-kinds). |
| `when` | No | Run the step only if an earlier step's result matches. See [Conditions](#conditions). |
| `effects` | No | Changes to your character, made when the step runs. See [Effects](#effects). |

Steps in Abstractica's own files may also carry `hint`, which this version doesn't show.

## Step kinds

| `kind` | Also needs | Button | Result |
|---|---|---|---|
| `table` | `tableId` | **Roll** | The row's text. `value` is the roll. |
| `oracle` | `oracleId`; optionally `probability`, `lean` | **Roll** | The answer. `value` is the roll; a yes/no oracle also gives `yes`. |
| `dice` | `expression`, such as `"2d6"` | **Roll** | The total. |
| `prompt` | Optionally `text` | **Done** | The text, or *Done* without one. |
| `choice` | `options` | One per option | The option's `label`. `choice` is its `id`. |
| `effect` | `effects` | **Apply** | Nothing to show; it makes its changes. |
| `generator` | `generatorId` | **Generate** | The generator's first three values, separated by dots. |
| `move` | `moveId`; optionally `stat`, `adds` | **Roll** | The move's outcome. `outcome` is `strong_hit`, `weak_hit`, or `miss`. |
| `clock` | `clockName`, `segments`; optionally `clockType` | **Start** | The clock's name and size. |
| `progress` | `trackName`, `category`; optionally `rank` | **Track** | The track's name and rank. |
| `entity` | `entityType`; optionally `nameTemplate` | **Create** | The new entity's name. |
| `deck` | `deckId`; optionally `count` | **Draw** | The cards drawn. |

### oracle

For a yes/no oracle, `probability` sets the odds: `certain`, `likely`, `even`, `unlikely`, or
`impossible`. Without it, the odds are `even`. The yes/no oracle is `oracle-fate` in Ironsworn,
`oracle-starforged-fate` in Starforged, and `oracle-abstractica-yes-no` in Abstractica. The
answer is *Yes*, *No*, *Yes, and...*, or *No, and...*, and `yes` is `true` for both kinds of
yes.

The themed oracles take `"lean": "favourable"` or `"lean": "unfavourable"`, as in
[generators](/authoring/generators/#oracle). A procedure can't use custom oracles.

### choice

Each option has an `id` and a `label`; the label is the button. To make an option change
something, follow the choice with an `effect` step whose `when` names the option's `id`, as
`spend` does in the example.

**Reroll** on a choice step doesn't ask again: it takes the first option. To choose again, click
**Reset**.

### generator

Runs a generator and shows a short summary. It doesn't create an entity; for the whole result,
use `/generator`.

### move

Rolls the move for your tracked character, straight away, whatever **Move rolls** is set to in
**Campaign settings**. `stat` is the stat to roll, such as `force`; left out, it's the first stat
the move offers. `adds` is a bonus, 0 if left out. Move ids are in Abstractica's copies, under
`game-systems/<system>/moves/`. A move rolled against a progress track can't be a step: the step
shows an error instead.

### clock

Creates a clock named `clockName`, with `segments` segments. `clockType` is `"countdown"`, the
default, or `"progress"`. Clocks are an Abstractica campaign tool; see
[Clocks and progress tracks](/guide/clocks-and-progress-tracks/).

### progress

Adds a progress track to your tracked character. `category` is the kind of track, such as `goal`
or `journey` in Abstractica, or `vow` in Ironsworn and Starforged. `rank` is a rank such as
`moderate` in Abstractica or `dangerous` in Ironsworn and Starforged; left out, it's the
category's usual rank.

### entity

Creates an entity of `entityType`, such as `place`, named from `nameTemplate`, or after the
entity type if there's none. Its other fields are left empty. The entity types each system has
are listed on [Writing generators](/authoring/generators/#filling-an-entity).

### deck

Draws `count` cards, 1 if left out, from a deck already in the campaign, named by its name.
Decks are an Abstractica campaign tool; see [Decks](/guide/decks/).

## Conditions

`when` runs a step only if an earlier step's result matches:

```json
"when": { "step": "room", "key": "yes", "equals": true }
```

```json
"when": { "step": "check", "key": "outcome", "in": ["weak_hit", "miss"] }
```

```json
"when": { "step": "weather", "equals": "Storm" }
```

`step` names an earlier step. `key` is the part of its result to test, `result` if left out:

| `key` | Given by |
|---|---|
| `result` | Every step: the text shown beside it |
| `value` | `table`, `oracle`, and `dice` steps: the number rolled |
| `yes` | Yes/no oracle steps: `true` or `false` |
| `outcome` | `move` steps: `strong_hit`, `weak_hit`, or `miss` |
| `choice` | `choice` steps: the chosen option's `id` |

`equals` takes one value and `in` a list. The match is exact, capitals included; write `true`,
`false`, and numbers without quotes. A condition on a step that was skipped or couldn't run
never holds, so the step that depends on it is skipped too.

Order and `when` are the only branching a procedure has.

## Text from earlier steps

In a prompt's `text`, a clock's `clockName`, a progress step's `trackName`, and an entity step's
`nameTemplate`, `{{who}}` puts in the `who` step's result, and `{{who.value}}` another of its
keys. The step must be earlier. A step that was skipped puts in nothing.

## Effects

`effects` change your tracked character when the step runs:

| `kind` | Fields | What it does |
|---|---|---|
| `meter` | `key`, `delta` | Adds `delta` to a number on the sheet, such as `-1`, staying within its minimum and maximum |
| `list_add` | `key`, `value` | Adds `value` to a list on the sheet, such as a condition |
| `list_remove` | `key`, `value` | Takes `value` off the list |

`key` is a field key on the character sheet. On Abstractica's own sheet, `health`, `resolve`,
`resources`, and `luck` run from 0 to 5, and `conditions` holds `Wounded`, `Shaken`,
`Exhausted`, `Hunted`, `Impaired`, and `Marked`. If your campaign uses a sheet of your own, use
its keys. For Ironsworn and Starforged, read the keys in
`game-systems/<system>/entity-schemas/character-schema.json`.

Effects need a tracked character. If any effect in a step can't be made, because no character is
tracked or a `meter` names a number the sheet doesn't have, none of that step's effects are made,
and the step still counts as done.

**Reroll** and **Reset** undo the effects of every step they undo.

## Loops

A loop is a cycle of procedures: travel, then choose where to sleep, then travel again. This is
`loops/road-loop.json` in the example pack:

```json
{
  "id": "loop-wayside-road",
  "name": "On the Road",
  "description": "Travel a leg, then choose where to spend the night.",
  "category": "Wayside",
  "start": "travel",
  "nodes": [
    { "id": "travel", "procedureId": "proc-travel-leg", "next": { "choose": ["inn", "camp"] } },
    { "id": "inn", "procedureId": "proc-wayside-inn" },
    { "id": "camp", "procedureId": "proc-make-camp" }
  ]
}
```

It starts with Abstractica's *Travel Leg*, then offers *Rest at an Inn* or Abstractica's
*Make Camp*.

| Field | Required | What it does |
|---|---|---|
| `id` | Yes | `loop-` followed by lowercase letters, digits, and hyphens. |
| `name` | Yes | Shown in the Generators & Procedures tab and in `/loop`. |
| `description` | No | Shown when you hover over the loop in the tab. |
| `category` | No | Groups loops in the tab. |
| `start` | Yes | The `id` of the node each cycle begins with. |
| `nodes` | Yes | The procedures in the loop. Each has an `id`, a `procedureId`, and optionally `next`. |

`next` says what follows a node once its procedure is finished:

- **A node `id`:** one button, labelled with that node's procedure name.
- **`{ "choose": [ … ] }`:** one button for each node listed.
- **Left out:** the cycle ends, and the button is **Next cycle**, which goes back to `start`.

A choice between nodes is always yours; to make the story decide, put a `when` inside the
procedure instead. `icon` and `sceneTitle`, which Abstractica's own loop carries, aren't used in
this version.

### How a loop plays

Click the loop under **Loops** in the Generators & Procedures tab, or type `/loop` and choose it.
Abstractica adds the block for the loop's current procedure. When you finish a procedure, its
block shows the buttons for what comes next; nothing moves on until you click one. Each click
adds the next procedure's block after the last.

Abstractica remembers where the campaign is in the loop, even after you close it. While a loop
is under way, its button in the tab reads *Resume:* and the procedure it's on. A campaign follows
one loop at a time: starting a different loop starts that one from its `start` and forgets where
the other was.

## Rules Abstractica checks

Abstractica checks procedures and loops when it opens a campaign, after it has loaded all the
campaign's content. One that breaks a rule is left out: it's missing from the tab, `/procedure`,
and `/loop`, and nothing tells you why.

A procedure is left out when:

- The `id` doesn't start with `proc-`, or has characters other than lowercase letters, digits,
  and hyphens. The `name` is empty. There are no `steps`.
- A step has no `id` or no `label`, or two steps share an `id`.
- A step's `kind` is misspelled or unknown.
- A table, oracle, generator, or move id isn't loaded in this campaign.
- A `dice` step's expression isn't valid dice notation.
- A `choice` step has no options.
- A `clock` step's `segments` isn't a whole number above 0.
- A `when` or a `{{…}}` names a step that isn't above it.
- A `lean` isn't `favourable` or `unfavourable`.

A loop is left out when its `id` doesn't start with `loop-`, its `name` is empty, it has no
nodes, its `start` isn't a node, a node's `next` names a node that isn't there, or a node's
procedure isn't loaded, including one left out by the rules above.

These load, but don't do what you meant:

- An `effect` step with no `effects` does nothing.
- A `when` with neither `equals` nor `in` always holds.

Some problems show only when the step runs, as a message in red on that step: a `probability`
the oracle doesn't have, an `entityType` the campaign doesn't have, a deck that isn't in the
campaign, a move rolled against a progress track, or a progress step with no tracked character.
