---
title: Testing interactions
description: Use Guidepup Virtual Screen Reader to exercise controls and item interaction APIs.
---

# Testing interactions

The Virtual Screen Reader exposes the same broad interaction contract as the real screen reader APIs.

The main APIs to use are:

- [`act()`](../api/class-virtual#virtual-act)
- [`interact()`](../api/class-virtual#virtual-interact)
- [`click([options])`](../api/class-virtual#virtual-click)
- [`press(key)`](../api/class-virtual#virtual-press)
- [`type(text)`](../api/class-virtual#virtual-type)
- [`itemText()`](../api/class-virtual#virtual-item-text)

These methods are meant to be used in a DOM-driven test environment, usually with a `virtual.start({ container })` setup.

## Activate the current item

The Virtual Screen Reader supports the same default activation shape as the real screen reader interface:

```ts
await virtual.start({ container: document.body });

try {
  await virtual.next();
  await virtual.act();
} finally {
  await virtual.stop();
}
```

Use `act()` when a DOM control should be triggered through its default action.

## Type and press keys

Use `press()` and `type()` to simulate input-style workflows:

```ts
await virtual.press("Control+f");
await virtual.type("checkout");
```

The input APIs are the Virtual Screen Reader keyboard and text injection points.

## Click through a control model

Use `click()` when a test needs to drive a pointer behaviour in the Virtual Screen Reader environment:

```ts
await virtual.click({ button: "left", clickCount: 1 });
```

## Read the current item text

`itemText()` reports the current item label or text under the virtual reader cursor:

```ts
const currentItem = await virtual.itemText();
expect(currentItem).toContain("Checkout");
```

That can be used to confirm which node the Virtual Screen Reader cursor is focused on.
