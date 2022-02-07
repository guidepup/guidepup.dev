---
title: "Getting Started"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Started

Guidepup is a screen-reader driver for automation.

It aims to provide a reliable set of APIs to automate your screen-reader a11y workflows through JavaScript. Specifically to accommodate the needs of a11y testing and alleviate the overhead of manual testing with screen-readers.

- [Environment Setup](./intro#environment)
- [Installation](./intro#installation)
- [First Screen-Reader Code](./intro#first)

## Environment Setup {#environment}

Setup your environment for screen-reader automation with [`@guidepup/setup`](https://github.com/guidepup/setup).

```bash
npx @guidepup/setup
```

For some operating systems, enabling automation of screen-readers is tightly controlled. This CLI handles the setup for your OS.

In some cases manual configuration may be required - checkout these [guides to setup your environment](./guides/environment).

## Installation {#installation}

Install Guidepup to your project.

```bash
npm i @guidepup/guidepup
```

## First Screen-Reader Code {#first}

Let's automate VoiceOver for MacOS.

Create `example.js` (or `example.ts` for TypeScript) to define your screen-reader code.

<Tabs
  groupId="js-flavor"
  defaultValue="ts"
  values={[
    {label: 'TypeScript', value: 'ts'},
    {label: 'JavaScript', value: 'js'}
  ]
}>
<TabItem value="ts">

```ts
import { VoiceOver } from "@guidepup/guidepup";

(async () => {
  const vo = new VoiceOver();
  await vo.start();
  await vo.next();
  await vo.stop();
})();
```

</TabItem>
<TabItem value="js">

```js
const { VoiceOver } = require("@guidepup/guidepup");

(async () => {
  const vo = new VoiceOver();
  await vo.start();
  await vo.next();
  await vo.stop();
})();
```

</TabItem>
</Tabs>

> Note: this example assumes you are using MacOS!

Now run your code to see an automated screen-reader! 🚀

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