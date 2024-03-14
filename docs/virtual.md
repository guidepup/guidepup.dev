---
title: Virtual Screen Reader
description: Getting started with Guidepup Virtual Screen Reader for screen reader automation in accessibility unit testing
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Virtual Screen Reader

Guidepup Virtual Screen Reader is a screen reader simulator for unit tests.

This package aims to supplement your testing by enabling you to automate a Virtual Screen Reader for unit test workflows the same you as would for mouse or keyboard based scenarios.

- **Mirrors Screen Reader Functionality** - simulate and assert on what users can do when using screen readers.
- **Test Framework Agnostic** - run with Jest, Vitest, Web Test Runner, in Storybook, as an independent script, no vendor lock-in.
- **UI Framework Agnostic** - want to use React, Vue, Solid, Svelte, etc.? All good here! Works with any UI framework, and plays nicely with the [Testing Library](https://testing-library.com/) suite.
- **Fast Feedback** - avoid the cumbersome overhead of running an e2e test with a real screen reader by running virtually over the provided DOM.

> <svg style={{ display:"inline-block", fill: "#fff", verticalAlign: "text-bottom", marginRight: "0.5rem" }} viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg> **Important**
>
> This package should not replace but augment your screen reader testing, there is no substitute for testing with real screen readers and with real users.

If you are looking to automate real screen readers, check out the [`@guidepup/guidepup`](https://github.com/guidepup/guidepup) package.

If you are looking to for quick and easy Jest snapshot testing, check out the [`@guidepup/jest`](https://github.com/guidepup/jest) package.

## Contents

- [Installation](./virtual#installation)
- [First Virtual Screen Reader Code](./virtual#first)

## Installation {#installation}

Install Guidepup Virtual Screen Reader to your project:

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

```ts title="./example.test.ts"
import { virtual } from "@guidepup/virtual-screen-reader";

test("should navigate to the input and announce the placeholder", async () => {
  document.body.innerHTML = `
  <label id="label1">Search for topics</label>
  <input type="text" aria-labelledby="label1" value="" placeholder="Search..."/>
  `;

  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Move to the label element.
  await virtual.next();

  // Move to the input element.
  await virtual.next();

  // Expect on the spoken phrase for the input element.
  expect(await virtual.lastSpokenPhrase()).toEqual(
    "textbox, Search for topics, placeholder Search..."
  );

  // Stop the Virtual Screen Reader.
  await virtual.stop();
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

  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Move to the label element.
  await virtual.next();

  // Move to the input element.
  await virtual.next();

  // Expect on the spoken phrase for the input element.
  expect(await virtual.lastSpokenPhrase()).toEqual(
    "textbox, Search for topics, placeholder Search..."
  );

  // Stop the Virtual Screen Reader.
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
