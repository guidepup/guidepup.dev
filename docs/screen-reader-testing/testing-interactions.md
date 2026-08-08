---
title: Testing interactions
description: Use Guidepup to exercise interactive controls with shared and screen reader specific APIs.
---

# Testing interactions

Guidepup can automate the interaction part of an accessibility workflow.

The common interaction APIs in the screen reader contract are:

- [`act([options])`](../api/class-screenreader#screenreader-act)
- [`interact([options])`](../api/class-screenreader#screenreader-interact)
- [`press(key[, options])`](../api/class-screenreader#screenreader-press)
- [`type(text[, options])`](../api/class-screenreader#screenreader-type)
- [`click([options])`](../api/class-screenreader#screenreader-click)
- [`itemText()`](../api/class-screenreader#screenreader-item-text)

These methods are available on the concrete screen reader objects, including [`voiceOver`](../api/class-voiceover) and [`nvda`](../api/class-nvda), and they share the same broad testing shape across both readers.

## Activate the current item

The most direct way to exercise a control is to move to it with a navigation command and then perform its default action:

```ts
import { voiceOver } from "@guidepup/guidepup";

await voiceOver.start();

try {
  await voiceOver.nextLink();
  await voiceOver.act();
} finally {
  await voiceOver.stop();
}
```

`act()` performs the default action for the current item. That can be a click, submit, open, or another control behaviour.

The same API exists on the shared and concrete reader objects for the common screen reader contract:

```ts
await nvda.perform(nvda.keyboardCommands.moveToNextButton);
await nvda.act();
```

## Interact with the current item

Some screen readers distinguish between activating the current cursor item and switching into an item interaction mode. Guidepup exposes that through `interact()`.

```ts
await voiceOver.start();

try {
  await voiceOver.next();
  await voiceOver.interact();
} finally {
  await voiceOver.stop();
}
```

For VoiceOver, `interact()` is the step that moves into an item interaction mode. NVDA treats the page as flat so does not need the extra `interact()` step, but it can be provided for consistency:

```ts
await nvda.next();
await nvda.interact(); // No-op
```

## Type and press keys

When a workflow depends on editing or keyboard driven control activation, Guidepup can generate input through `press()` and `type()`:

```ts
await voiceOver.press("Command+f");
await voiceOver.type("checkout");
```

```ts
await nvda.press("Control+f");
await nvda.type("checkout");
```

Use `press()` for shortcuts and `type()` for text input on the currently focused control.

## Click through a control model

Use `click()` when a test needs to drive a pointer action:

```ts
await voiceOver.click({ button: "left", clickCount: 1 });
```

## Read the current item text

When an interaction test needs to confirm that the cursor has moved to the right control, `itemText()` can provide the currently reported content:

```ts
const currentItem = await voiceOver.itemText();
expect(currentItem).toContain("Checkout");
```

Use `itemText()` when a test needs to confirm which control or content the reader has focused.

## Interaction checklist

A solid interaction test follows this shape:

1. Start the reader.
2. Move the reader to a control or element.
3. Activate or interact with it through `act()`, `interact()`, `press()`, `type()`, or `click()`.
4. Confirm the user-visible text or spoken result.
5. Stop the reader.
