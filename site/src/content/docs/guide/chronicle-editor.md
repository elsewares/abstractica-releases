---
title: The Chronicle editor
description: Write your session, read and manage the blocks your rolls leave in it, organise it into scenes, and know when it's saved.
sidebar:
  order: 1
---

The Chronicle is the page in the middle of the session screen. You write the story there, and
every oracle you ask, move you make, and die you roll lands in the same text as a block. Each
session is one Chronicle page. For a tour of the whole screen, see
[Your first campaign](/getting-started/first-campaign/#the-session-screen).

## Writing

Click into the page and type. **Enter** starts a new paragraph; **Shift+Enter** breaks the line
without starting one.

When the story needs the game, type `/` at the start of a line or after a space to open the
command menu, or `@` to mention a character, place, or thing you've recorded. See
[Slash commands](/guide/slash-commands/) and
[Entities](/guide/entities/#mentioning-entities-in-your-text).

## Blocks

A block is the record of something you did with the game: an oracle's answer, a table roll, a
move, a dice roll, a card drawn, a clock advanced, a track marked. Slash commands insert blocks at
your cursor, and so do the tools in the sidebar.

Some commands open a small form first, in the text where the block will go: which oracle, which
deck, how many cards. Fill it in and click its button (**Consult**, **Roll**, **Draw**), or click
**Cancel** to remove it.

### Collapsed and expanded

A block that goes straight into your text, from the sidebar or from a slash command that needs no
form, arrives collapsed to a single line: an icon, the name, and the result, such as a table entry
or `2d6+1 = 9`. A session that leans on the tools still reads as prose. Click the chevron at the
right end of the line (**Expand block**) to see everything: the question you asked, the dice,
every card. Click it again (**Collapse block**) to fold it away. Abstractica saves the state with
the session.

A result you get by filling in a form takes the form's place expanded. Collapse it the same way.

Three kinds of block always arrive expanded, because they still need you:

- **Moves**, which may have outcomes to choose and buttons to press.
- **Procedures**, which have steps to roll.
- **A full track's notice**, which offers the move that resolves it, such as **Fulfill Your Vow**.

An expanded block's header shows its icon, its name, and the command that makes it, such as
`/oracle` or `/deck`, even when the block came from the sidebar.

### Buttons on blocks

Some blocks carry buttons. A button that acts on the game, such as **Pay the Price** after a move
or **Fulfill Your Vow** on a full track's notice, works once: after you use it, it stays greyed
out, including after you restart. The suggested oracles under **Ask** on a move can be asked as
often as you like. [Moves and dice](/guide/moves-and-dice/) covers what each button does.

### Changing your mind

A block is a record of what happened, so you can't edit its text. Oracle, table, dice, and card
blocks can't be rolled again either: run the command again, and the new block goes in where your
cursor is. Write around blocks however you like.

- **Delete a block:** click it (anywhere but a button) and press **Delete** or **Backspace**. A
  block inside a selection goes with the selection.
- **Undo:** ⌘Z on macOS, Ctrl+Z on Windows and Linux, brings it back.
- **Move a block:** cut it and paste it where you want it.

Deleting a block removes it from the page. It doesn't undo what happened: a drawn card stays
drawn, an advanced clock stays advanced, a marked track stays marked.

## Scenes

Every session is divided into scenes. A new session starts with one, *Scene 1*.

- **Start a scene:** type `/scene`, or `/scene The Drowned Hall` to give it a title, or click
  **+** at the end of the scene strip. New scenes always go at the end of the session. Untitled
  ones are numbered: *Scene 2*, *Scene 3*.
- **Rename a scene:** click its title, type, and press **Enter**. **Esc** cancels.
- **Collapse a scene:** click the chevron at the left of its header. A collapsed scene shows only
  its header. Inserting a block into it opens it again.
- **Where you are:** the scene holding your cursor is outlined, and its header says
  **Active Scene**. The others show how many blocks they hold, with *· Collapsed* when they're
  folded.
- **Remove a scene:** open the **⋯** menu at the right of its header.
  - **Delete scene (keep contents)** removes the title and joins what the scene holds to the
    scene before it. The first scene joins the one after. Pressing **Backspace** at the very start
    of a scene does the same.
  - **Delete scene and contents** removes the scene and everything in it. It asks first: click it,
    then click **Click again to delete**.

  Both are greyed out while the session has only one scene.

When a scene ends on a block, a **Continue writing** strip below the block adds a line to write
on. Clicking the empty space under the block does the same.

### The scene strip

The strip under the toolbar shows the scene you're in and where it sits, such as *3/5*. Click
**Scene** at its left to open it: every scene appears as a chip, with its block count. Click a chip
to jump to that scene; a collapsed scene opens as you arrive. **+** adds a scene at the end of
the session.

In Ironsworn and Starforged, when your character is in the middle of a fight, a journey, an
expedition, or another track that's in play, a row of cards under the scene strip shows it. See
[Clocks and progress tracks](/guide/clocks-and-progress-tracks/).

## Formatting

The toolbar above the scene strip formats text. Each button's tooltip names it. On macOS, use ⌘
where Windows and Linux use Ctrl, and ⌥ for Alt.

| Button | macOS | Windows and Linux |
|---|---|---|
| **Bold** | ⌘B | Ctrl+B |
| **Italic** | ⌘I | Ctrl+I |
| **Underline** | ⌘U | Ctrl+U |
| **Strikethrough** | ⇧⌘S | Ctrl+Shift+S |
| **Inline Code** | ⌘E | Ctrl+E |
| **Bullet List** | ⇧⌘8 | Ctrl+Shift+8 |
| **Ordered List** | ⇧⌘7 | Ctrl+Shift+7 |
| **Task List** | ⇧⌘9 | Ctrl+Shift+9 |
| **Blockquote** | ⇧⌘B | Ctrl+Shift+B |
| **Code Block** | ⌥⌘C | Ctrl+Alt+C |
| **Heading 1**, **2**, **3** | ⌥⌘1, ⌥⌘2, ⌥⌘3 | Ctrl+Alt+1, 2, 3 |
| **Horizontal Rule** | — | — |

⌥⌘0 (Ctrl+Alt+0) turns a heading back into plain text. In a list, **Tab** indents an item and
**Shift+Tab** brings it back out. Redo is ⇧⌘Z (Ctrl+Shift+Z).

You can also type the formatting as you write. At the start of a line: `# `, `## `, or `### ` for
a heading, `- ` for a bullet, `1. ` for a numbered list, `[ ] ` for a task, `> ` for a quote,
` ``` ` for a code block, and `---` for a rule. Inside a line: `**bold**`, `*italic*`,
`~~strikethrough~~`, and `` `code` ``.

## Copy and paste

Copy, cut, and paste work as usual, from the keyboard or the **Edit** menu.

- **Within the same session**, a pasted block is a full copy that shares its buttons with the
  original: use a button on either one, and it's used on both.
- **Into another session or campaign**, a pasted block keeps everything it shows but has no
  buttons, and its header carries a **Copy** tag. You can still expand and collapse it.
- **Unfinished forms** are left out of a paste.
- **Into another app**, your text arrives as plain text and each block becomes one line in square
  brackets, such as `[Dice: 2d6+1 = 9]` or `[Deck: Rider-Waite Tarot — The Tower]`.

## Saving

There's nothing to press. Abstractica saves the session about 5 seconds after you stop typing,
and again as you switch to another session or leave the session screen. The left end of the
status bar, at the bottom of the window, says where things stand:

| Status | Meaning |
|---|---|
| **Unsaved changes** | You've typed since the last save; it's waiting for you to pause. |
| **Saving…** | Writing to disk now. |
| **Saved** | Everything on the page is on disk. |
| **Save failed** | Abstractica couldn't write to your data folder. See [Troubleshooting](/help/troubleshooting/#the-status-bar-says-save-failed). |

:::tip
Before you quit, wait until the status bar says **Saved**.
:::

Next to it, **Words:** counts the words you've written in the session. Blocks and @mentions don't
add to it. The other end of the status bar has **Background**, which picks the campaign's
background image (**System Default** is the game system's own), **Help**, and the theme button,
which cycles through **Light Theme**, **Dark Theme**, and **System Theme**.

## Ending a session

**End Session**, at the top of the page, asks *End Session?* first. Confirm, and the session
becomes read-only for good: a banner reads **Session ended** with the date and **Read-only**, and
the text, the title, and the scenes can't be changed. You can still read it, jump between scenes,
and expand blocks and scenes to read them; that isn't saved. Start the next session with **+ New**
in the left panel. See the [FAQ](/help/faq/#can-i-reopen-a-session-i-ended).

## Taking a session elsewhere

Abstractica has no export command yet. To take a session's text into another app, click into the
page, select everything (⌘A or Ctrl+A), copy, and paste: blocks arrive as the one-line summaries
described in [Copy and paste](#copy-and-paste). Sessions are also stored as plain JSON files in
your data folder; see [Where your data lives](/data/where-your-data-lives/).
