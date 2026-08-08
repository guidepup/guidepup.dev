---
title: Using with Jest / Vitest / Testing Library
description: Write Virtual Screen Reader assertions in Jest, Vitest, and Testing Library style tests.
---

# Using with Jest / Vitest / Testing Library

The Virtual Screen Reader is designed to work with normal DOM test environments.

You can use it with Jest, Vitest, Testing Library, Web Test Runner, Storybook, or another assertion driven runner that can mount a DOM environment and execute asynchronous tests.

A typical pattern is:

1. Build a DOM fixture.
2. Start the Virtual Screen Reader with a container.
3. Move through the DOM with `next()`, `previous()`, or a command from `commands`.
4. Assert on `lastSpokenPhrase()` or the phrase log.
5. Stop the Virtual Screen Reader.

## Jest

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("checkout heading is the correct level and announced", async () => {
  document.body.innerHTML = `
    <h1>Checkout</h1>
  `;

  await virtual.start({ container: document.body });

  try {
    await virtual.next();

    expect(await virtual.lastSpokenPhrase()).toEqual(
      "heading, Checkout, level 1",
    );
  } finally {
    await virtual.stop();
  }
});
```

For Jest snapshot testing, see the [`@guidepup/jest`](https://github.com/guidepup/jest) package.

A Jest matcher example looks like:

```ts
describe("Screen Reader Tests", () => {
  beforeEach(() => {
    setupBasicPage();
  });

  afterEach(() => {
    document.body.innerHTML = ``;
  });

  test("should match the snapshot of expected screen reader spoken phrases", async () => {
    await expect(document.body).toMatchScreenReaderSnapshot();
  });

  test("should match the inline snapshot of expected screen reader spoken phrases", async () => {
    await expect(document.body).toMatchScreenReaderInlineSnapshot(`
[
  "document",
  "navigation",
  "Nav Text",
  "end of navigation",
  "region",
  "heading, Section Heading, level 1",
  "Section Text",
  "article",
  "banner",
  "heading, Article Header Heading, level 1",
  "Article Header Text",
  "end of banner",
  "Article Text",
  "end of article",
  "end of region",
  "contentinfo",
  "Footer",
  "end of contentinfo",
  "end of document",
]
`);
  });
});
```

## Vitest

```ts
import { expect, test } from "vitest";
import { virtual } from "@guidepup/virtual-screen-reader";

test("email input is labelled correctly", async () => {
  document.body.innerHTML = `
    <label for="email">Email address</label>
    <input id="email" value="" />
  `;

  await virtual.start({ container: document.body });

  try {
    await virtual.next();
    await virtual.next();

    const currentItem = await virtual.itemText();
    expect(currentItem).toContain("Email address");
  } finally {
    await virtual.stop();
  }
});
```

## Testing Library

Testing Library focuses on user level DOM checks. The Virtual Screen Reader can complement that by adding a screen reader assertion layer:

```ts
import { render, screen } from "@testing-library/dom";
import { virtual } from "@guidepup/virtual-screen-reader";

test("checkout button is announced", async () => {
  render(`<button>Checkout</button>`);

  await virtual.start({ container: document.body });

  try {
    await virtual.next();

    expect(await virtual.lastSpokenPhrase()).toContain("Checkout");
  } finally {
    await virtual.stop();
  }
});
```

The Virtual Screen Reader API works the same way in each environment. The main difference is how the DOM fixture is created and how the runner exposes `test()`, `describe()`, and assertions.

Use this library to add fast screen reader assertions to a test suite, but keep real screen reader coverage for the highest fidelity workflows.
