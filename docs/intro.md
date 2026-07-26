---
title: Getting Started
description: Getting started with Guidepup for screen reader automation in accessibility testing
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Started

Guidepup is a screen reader automation library for testing.

It aims to provide a reliable set of APIs to automate your screen reader a11y workflows through JavaScript. Specifically to accommodate the needs of a11y testing and alleviate the overhead of manual testing with real screen readers.

## Contents

- [Machine Setup](./intro#environment)
- [Installation](./intro#installation)
- [First Screen Reader Code](./intro#first)

## Machine Setup {#environment}

Set up your machine for screen reader automation with [`@guidepup/setup`](https://www.npmjs.com/package/@guidepup/setup):

```bash
npx @guidepup/setup setup
```

On some machines, screen reader automation is tightly controlled. This command configures your machine for screen reader automation and only needs to be run once per machine.

For further information, see this [guide to set up your machine](./guides/automated-environment-setup).

## Installation {#installation}

Install Guidepup to your project:

```bash
yarn add @guidepup/guidepup
```

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
yarn add @guidepup/guidepup
```

</TabItem>
<TabItem value="npm">

```bash
npm install @guidepup/guidepup
```

</TabItem>
</Tabs>

Install the screen reader assets required by your installed version of Guidepup:

```bash
npx @guidepup/setup install
```

Run this command again after upgrading `@guidepup/guidepup` so that the matching assets are available.

## First Screen Reader Code {#first}

Let's automate a screen reader!

Create `example.js` (or `example.ts` for TypeScript) to define your screen reader code.

<Tabs
groupId="js-flavor"
defaultValue="ts"
values={[
{label: 'Typescript', value: 'ts'},
{label: 'JavaScript', value: 'js'},
]
}>
<TabItem value="ts">

```ts title="./example.ts"
import { screenReader } from "@guidepup/guidepup";

(async () => {
  // Start the default screen reader for your OS.
  await screenReader.start();

  // Move to the next item.
  await screenReader.next();

  // Stop the default screen reader for your OS.
  await screenReader.stop();
})();
```

</TabItem>
<TabItem value="js">

```js title="./example.js"
const { screenReader } = require("@guidepup/guidepup");

(async () => {
  // Start the default screen reader for your OS.
  await screenReader.start();

  // Move to the next item.
  await screenReader.next();

  // Stop the default screen reader for your OS.
  await screenReader.stop();
})();
```

</TabItem>
</Tabs>

Now run your code to see an automated screen reader!

<Tabs
groupId="js-flavor"
defaultValue="ts"
values={[
{label: 'TypeScript', value: 'ts'},
{label: 'JavaScript', value: 'js'}
]
}>
<TabItem value="ts">

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
