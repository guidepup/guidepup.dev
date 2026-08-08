---
title: Testing navigation
description: Use Guidepup Virtual Screen Reader to move through a DOM tree and assert what it reports.
---

# Testing navigation

The Virtual Screen Reader gives you a screen reader style navigation model for DOM tests.

The main API shape you will work with is:

- [`next()`](../api/class-virtual#virtual-next)
- [`previous()`](../api/class-virtual#virtual-previous)
- [`perform(command[, options])`](../api/class-virtual#virtual-perform)
- [`lastSpokenPhrase()`](../api/class-virtual#virtual-last-spoken-phrase)
- [`commands`](../api/class-virtual#virtual-commands)

Those APIs are available on the shared `virtual` instance provided by the Virtual Screen Reader library.

## Start the Virtual Screen Reader

A basic test starts the Virtual Screen Reader against a container element:

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

await virtual.start({ container: document.body });

try {
  // Work with the virtual reader.
} finally {
  await virtual.stop();
}
```

## Move through a page

Use `next()` and `previous()` to move the Virtual Screen Reader cursor through the current DOM:

```ts
await virtual.next();
await virtual.previous();
```

The Virtual Screen Reader is designed to simulate real screen reader behaviour in a DOM-like environment, so the commands can be used to exercise navigation loops and expectations around items and their spoken output.

## Use command collections

`commands` exposes a command set for Virtual Screen Reader navigation. That makes it possible to move by a semantic target rather than by raw cursor movement:

```ts
await virtual.perform(virtual.commands.moveToNextHeading);

const phrase = await virtual.lastSpokenPhrase();
expect(phrase).toContain("heading");
```

The command collection is the API extension point for the virtual reader vocabulary.

## Assert the current announcement

When you move the virtual cursor, check what the reader reports through `lastSpokenPhrase()`:

```ts
await virtual.next();

const phrase = await virtual.lastSpokenPhrase();
expect(phrase).toContain("Search");
```

This is usually the first assertion in a navigation-style Virtual Screen Reader test.

## Navigation checklist

A simple Virtual Screen Reader test usually follows this shape:

1. Build a DOM fixture.
2. Start the virtual reader with a container.
3. Move with `next()`, `previous()`, or `perform()`.
4. Read the current spoken phrase.
5. Stop the virtual reader.
