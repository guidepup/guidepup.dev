---
title: Real world example
description: Use Guidepup with Playwright to automate a real screen reader workflow.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Real world example

This example shows how to combine Guidepup with Playwright.

It uses [`@guidepup/playwright`](https://www.npmjs.com/package/@guidepup/playwright) to automate VoiceOver alongside [Playwright](https://playwright.dev/).

The test will:

1. Open the Guidepup GitHub repository.
2. Navigate the page using VoiceOver.
3. Find the first heading.
4. Assert the screen reader output.

The same approach can be used with NVDA on Windows.

## Machine setup

Set up your machine for screen reader automation with [`@guidepup/setup`](https://www.npmjs.com/package/@guidepup/setup):

```bash
npx @guidepup/setup setup
```

For more information, see the [machine setup guide](../guides/machine-setup).

## Installation

Install the Guidepup Playwright integration and Playwright:

<Tabs
groupId="pm-flavor"
defaultValue="npm"
values={[
{label: 'npm', value: 'npm'},
{label: 'Yarn', value: 'yarn'}
]}

> <TabItem value="npm">

```bash
npm install @guidepup/playwright @playwright/test
npx playwright install webkit
```

</TabItem>
<TabItem value="yarn">

```bash
yarn add @guidepup/playwright @playwright/test
npx playwright install webkit
```

</TabItem>
</Tabs>

Install the screen reader assets required by Guidepup:

```bash
npx @guidepup/setup install
```

## Configure Playwright

Create a `playwright.config.ts` (or `playwright.config.js` for JavaScript):

<Tabs
groupId="js-flavor"
defaultValue="ts"
values={[
{label: 'TypeScript', value: 'ts'},
{label: 'JavaScript', value: 'js'}
]}

> <TabItem value="ts">

```ts title="./playwright.config.ts"
import { screenReaderConfig } from "@guidepup/playwright";
import { devices, PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  ...screenReaderConfig,
  reportSlowTests: null,
  timeout: 3 * 60 * 1000,
  retries: 2,
  projects: [
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"], headless: false },
    },
  ],
};

export default config;
```

</TabItem>
<TabItem value="js">

```js title="./playwright.config.js"
const { screenReaderConfig } = require("@guidepup/playwright");
const { devices } = require("@playwright/test");

const config = {
  ...screenReaderConfig,
  reportSlowTests: null,
  timeout: 3 * 60 * 1000,
  retries: 2,
  projects: [
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"], headless: false },
    },
  ],
};

module.exports = config;
```

</TabItem>
</Tabs>

The `screenReaderConfig` provides the recommended Playwright configuration for screen reader testing, including running with a single worker because a screen reader can only interact with one browser instance at a time.

The longer timeout and disabled slow-test reporting account for the additional time involved in controlling a screen reader.

## Write the test

Create a `voiceOver.spec.ts` (or `voiceOver.spec.js` for JavaScript):

<Tabs
groupId="js-flavor"
defaultValue="ts"
values={[
{label: 'TypeScript', value: 'ts'},
{label: 'JavaScript', value: 'js'}
]}

> <TabItem value="ts">

```ts title="./voiceOver.spec.ts"
import { voiceOverTest as test } from "@guidepup/playwright";
import { expect } from "@playwright/test";

test.describe("Playwright VoiceOver", () => {
  test("I can navigate the Guidepup GitHub page", async ({
    page,
    voiceOver,
  }) => {
    await page.goto("https://github.com/guidepup/guidepup", {
      waitUntil: "load",
    });

    await expect(page.locator('header[role="banner"]')).toBeVisible();

    await voiceOver.navigateToWebContent();

    while (
      (await voiceOver.lastSpokenPhrase()) !== "heading level 1, Guidepup"
    ) {
      await voiceOver.perform(voiceOver.keyboardCommands.findNextHeading);
    }

    expect(JSON.stringify(await voiceOver.spokenPhraseLog())).toMatchSnapshot();
  });
});
```

</TabItem>
<TabItem value="js">

```js title="./voiceOver.spec.js"
const { voiceOverTest: test } = require("@guidepup/playwright");
const { expect } = require("@playwright/test");

test.describe("Playwright VoiceOver", () => {
  test("I can navigate the Guidepup GitHub page", async ({
    page,
    voiceOver,
  }) => {
    await page.goto("https://github.com/guidepup/guidepup", {
      waitUntil: "load",
    });

    await expect(page.locator('header[role="banner"]')).toBeVisible();

    await voiceOver.navigateToWebContent();

    while ((await voiceOver.itemText()) !== "Guidepup heading level 1") {
      await voiceOver.perform(voiceOver.keyboardCommands.findNextHeading);
    }

    expect(JSON.stringify(await voiceOver.spokenPhraseLog())).toMatchSnapshot();
  });
});
```

</TabItem>
</Tabs>

The `voiceOverTest` fixture starts and stops VoiceOver for each test and provides the `voiceOver` instance alongside Playwright's `page` fixture.

This lets you use normal Playwright APIs to control the browser while using Guidepup to control and observe the screen reader.

The test uses Playwright to navigate to the page and verify that it has loaded, then uses VoiceOver to navigate through the page by heading.

Finally, it snapshots the spoken phrases produced during the test so changes to the screen reader experience can be detected as regressions.

## Run the test

Run the test with:

```bash
npx playwright test
```

You should see the browser being controlled by Playwright while VoiceOver navigates the page.

The test should produce output similar to:

```console
Running 1 test using 1 worker
·

  1 passed (20s)
```

This is the basic pattern for combining browser automation with screen reader automation: use Playwright for the application and browser, and Guidepup for the screen reader experience.
