---
title: Getting started
description: Install Guidepup and run your first screen reader automation test.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting started

This page covers how to install Guidepup and run a first screen reader test.

## Machine setup

Set up your machine for screen reader automation with [`@guidepup/setup`](https://www.npmjs.com/package/@guidepup/setup):

```bash
npx @guidepup/setup setup
```

On some machines, screen reader automation requires additional configuration. This command configures your machine and only needs to be run once per machine.

For more information, see the [machine setup guide](/docs/guides/machine-setup).

## Installation

Install Guidepup in your project:

<Tabs
groupId="pm-flavor"
defaultValue="npm"
values={[
{label: 'npm', value: 'npm'},
{label: 'Yarn', value: 'yarn'}
]}

> <TabItem value="npm">

```bash
npm install @guidepup/guidepup
```

</TabItem>
<TabItem value="yarn">

```bash
yarn add @guidepup/guidepup
```

</TabItem>
</Tabs>

Install the screen reader assets required by your installed version of Guidepup:

```bash
npx @guidepup/setup install
```

Run this command again after upgrading `@guidepup/guidepup` so that the matching assets are available.

## Your first screen reader test

Create `example.ts` (or `example.js` for JavaScript):

<Tabs
groupId="js-flavor"
defaultValue="ts"
values={[
{label: 'TypeScript', value: 'ts'},
{label: 'JavaScript', value: 'js'}
]}

> <TabItem value="ts">

```ts title="./example.ts"
import { screenReader } from "@guidepup/guidepup";

(async () => {
  await screenReader.start();

  try {
    await screenReader.next();

    const spokenPhrase = await screenReader.lastSpokenPhrase();
    console.log(`Screen reader announced: ${spokenPhrase}`);
  } finally {
    await screenReader.stop();
  }
})();
```

</TabItem>
<TabItem value="js">

```js title="./example.js"
const { screenReader } = require("@guidepup/guidepup");

(async () => {
  await screenReader.start();

  try {
    await screenReader.next();

    const spokenPhrase = await screenReader.lastSpokenPhrase();
    console.log(`Screen reader announced: ${spokenPhrase}`);
  } finally {
    await screenReader.stop();
  }
})();
```

</TabItem>
</Tabs>

Run the example:

<Tabs
groupId="js-flavor"
defaultValue="ts"
values={[
{label: 'TypeScript', value: 'ts'},
{label: 'JavaScript', value: 'js'}
]}

> <TabItem value="ts">

```bash
npx ts-node example.ts
```

</TabItem>
<TabItem value="js">

```bash
node example.js
```

</TabItem>
</Tabs>

Guidepup starts the screen reader, moves to the next item, captures what was spoken, and then stops the screen reader.

From here, you can start writing screen reader tests around your application's real user journeys.

See the [real world example](/docs/getting-started/real-world-example) to see how Guidepup can be used with Playwright.
