---
title: Virtual Screen Reader
description: Getting started with Guidepup Virtual Screen Reader for screen reader automation in accessibility unit testing
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Virtual Screen Reader

Guidepup Virtual Screen Reader is a headless screen reader driver for unit test automation.

It aims to provide a reliable set of APIs to automate your screen reader unit test workflows in JavaScript the same you as would for mouse or keyboard based scenarios.

- **Mirrors Real User Experience** - assert on what users really do and hear when using screen readers.
- **Test Framework Agnostic** - run with Jest, with Playwright, as an independent script, no vendor lock-in.
- **UI Framework Agnostic** - want to use React, Vue, Solid, Svelte, etc.? All good here! Works with any UI framework, and plays nicely with the [Testing Library](https://testing-library.com/) suite.
- **Fast Feedback** - avoid the cumbersome overhead of running an e2e test with a running screen reader by running virtually over the provided DOM.

## Contents

- [Installation](./virtual#installation)
- [First Virtual Screen Reader Code](./virtual#first)

## Installation {#installation}

Install Guidepup to your project:

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

## First Virtual Screen Reader Code {#first}

Let's automate our Virtual Screen Reader!

Using [Jest](https://jestjs.io/) as our test runner, create `example.test.js` (or `example.test.ts` for TypeScript) to define your screen reader unit test code.

<Tabs
  groupId="js-flavor"
  defaultValue="ts"
  values={[
    {label: 'Typescript', value: 'ts'},
    {label: 'JavaScript', value: 'js'},
  ]
}>
<TabItem value="ts">

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("should navigate to the input and announce the placeholder", async () => {
  document.body.innerHTML = `
  <label id="label1">Search for topics</label>
  <input type="text" aria-labelledby="label1" value="" placeholder="Search..."/>
  `;

  // Start Virtual.
  await virtual.start({ container: document.body });

  // Move to the label element.
  await virtual.next();

  // Move to the input element.
  await virtual.next();

  // Expect on the spoken phrase for the input element.
  expect(await virtual.lastSpokenPhrase()).toEqual(
    "textbox, Search for topics, placeholder Search..."
  );

  // Stop Virtual.
  await virtual.stop();
});
```

</TabItem>
<TabItem value="js">

```js
const { virtual } = require("@guidepup/virtual-screen-reader");

test("should navigate to the input and announce the placeholder", async () => {
  document.body.innerHTML = `
  <label id="label1">Search for topics</label>
  <input type="text" aria-labelledby="label1" value="" placeholder="Search..."/>
  `;

  // Start Virtual.
  await virtual.start({ container: document.body });

  // Move to the label element.
  await virtual.next();

  // Move to the input element.
  await virtual.next();

  // Expect on the spoken phrase for the input element.
  expect(await virtual.lastSpokenPhrase()).toEqual(
    "textbox, Search for topics, placeholder Search..."
  );

  // Stop Virtual.
  await virtual.stop();
});
```

</TabItem>
</Tabs>

Running our test with [Jest](https://jestjs.io/) we should see something like:

```txt
PASS  test/virtual.test.ts
  ✓ should navigate to the input and announce the placeholder (42 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.361 s
Ran all test suites matching /virtual.test/i.

Watch Usage: Press w to show more.
```