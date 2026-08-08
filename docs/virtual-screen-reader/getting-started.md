---
title: Getting started
description: Install and run a first Virtual Screen Reader test.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting started

The Virtual Screen Reader is a screen reader simulator for testing.

Install it in your test project and use it to automate screen reader style workflows over a DOM container.

This package should supplement your wider screen reader testing strategy. It gives you fast coverage of common navigation and output expectations without replacing real screen reader coverage.

## Installation

Install the Virtual Screen Reader package:

<Tabs
groupId="pm-flavor"
defaultValue="yarn"
values={[
{label: 'Yarn', value: 'yarn'},
{label: 'NPM', value: 'npm'}
]
}>
<TabItem value="yarn">

```bash
yarn add -D @guidepup/virtual-screen-reader
```

</TabItem>
<TabItem value="npm">

```bash
npm install --save-dev @guidepup/virtual-screen-reader
```

</TabItem>
</Tabs>

## Your first Virtual Screen Reader test

Create a DOM fixture, start the Virtual Screen Reader, navigate to the current item, and assert the spoken phrase.

<Tabs
groupId="js-flavor"
defaultValue="ts"
values={[
{label: 'Typescript', value: 'ts'},
{label: 'JavaScript', value: 'js'},
]
}>
<TabItem value="ts">

```ts title="./example.test.ts"
import { virtual } from "@guidepup/virtual-screen-reader";

test("should navigate to the input and announce the placeholder", async () => {
  document.body.innerHTML = `
  <label id="label1">Search for topics</label>
  <input type="text" aria-labelledby="label1" value="" placeholder="Search..."/>
  `;

  await virtual.start({ container: document.body });

  try {
    await virtual.next();
    await virtual.next();

    expect(await virtual.lastSpokenPhrase()).toEqual(
      "textbox, Search for topics, placeholder Search...",
    );
  } finally {
    await virtual.stop();
  }
});
```

</TabItem>
<TabItem value="js">

```js title="./example.test.js"
const { virtual } = require("@guidepup/virtual-screen-reader");

test("should navigate to the input and announce the placeholder", async () => {
  document.body.innerHTML = `
  <label id="label1">Search for topics</label>
  <input type="text" aria-labelledby="label1" value="" placeholder="Search..."/>
  `;

  await virtual.start({ container: document.body });

  try {
    await virtual.next();
    await virtual.next();

    expect(await virtual.lastSpokenPhrase()).toEqual(
      "textbox, Search for topics, placeholder Search...",
    );
  } finally {
    await virtual.stop();
  }
});
```

</TabItem>
</Tabs>

This is the basic pattern for the Virtual Screen Reader: start it against a DOM container, move through the page, observe what it speaks, and stop it when the test is done.

The package is best used as a fast way to gain coverage over common screen reader scenarios, while real screen readers remain the source of highest fidelity coverage.

When you need a framework-specific example, see [using with Jest, Vitest, and Testing Library](./using-with-jest-vitest-testing-library).
