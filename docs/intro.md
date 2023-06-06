---
title: Getting Started
description: Getting started with Guidepup for screen reader automation in accessibility testing
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Started

Guidepup is a screen reader driver for test automation.

It aims to provide a reliable set of APIs to automate your screen reader a11y workflows through JavaScript. Specifically to accommodate the needs of a11y testing and alleviate the overhead of manual testing with real screen readers.

## Contents

- [Environment Setup](./intro#environment)
- [Installation](./intro#installation)
- [First Screen Reader Code](./intro#first)

## Environment Setup {#environment}

Setup your environment for screen reader automation with [`@guidepup/setup`](https://www.npmjs.com/package/@guidepup/setup):

```bash
npx @guidepup/setup
```

For some operating systems, enabling automation of screen readers is tightly controlled. This CLI handles the setup for your OS.

For further information checkout this [guide to setup your environment](./guides/automated-environment-setup).

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
yarn add @guidepup/guidepup
```

</TabItem>
<TabItem value="npm">

```bash
npm install @guidepup/guidepup
```

</TabItem>
</Tabs>

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

If you're using MacOS:

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Move to the next item.
  await voiceOver.next();

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

Or if you're using Windows:

```ts
import { nvda } from "@guidepup/guidepup";

(async () => {
  // Start NVDA.
  await nvda.start();

  // Move to the next item.
  await nvda.next();

  // Stop NVDA.
  await nvda.stop();
})();
```

</TabItem>
<TabItem value="js">

If you're using MacOS:

```js
const { voiceOver } = require("@guidepup/guidepup");

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Move to the next item.
  await voiceOver.next();

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

Or if you're using Windows:

```js
const { nvda } = require("@guidepup/guidepup");

(async () => {
  // Start NVDA.
  await nvda.start();

  // Move to the next item.
  await nvda.next();

  // Stop NVDA.
  await nvda.stop();
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