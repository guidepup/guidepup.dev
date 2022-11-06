---
title: "Real World Example"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Real World Example

Let's take a look at a more complete example of how you might use Guidepup.

> **Note:** this example assumes you are using MacOS!

Here we're making use of the [@guidepup/playwright](https://www.npmjs.com/package/@guidepup/playwright) module to integrate Guidepup into an automated [Playwright](https://playwright.dev/) test to assert the VoiceOver flow behaves as we expect. This modules handles the starting and stopping VoiceOver for you between tests so you can focus on writing your tests straight away. It also provides a `voTest` export - a convenience wrapper for the Playwright `test` method which provides a `voiceOver` instance for you alongside the `page` object.

The test will check that you can navigate to the first heading on the [GitHub README.md for Guidepup](https://github.com/guidepup/guidepup#guidepup) with the following steps:

## Contents

- [Environment Setup](./example#environment)
- [Installation](./example#installation)
- [Create Playwright Config File](./example#playwright)
- [Create Test File](./example#test)
- [Create Expected Log File](./example#expected)
- [Run Test](./example#run)

## Environment Setup {#environment}

Setup your environment for screen-reader automation with [`@guidepup/setup`](https://github.com/guidepup/setup).

```bash
npx @guidepup/setup
```

## Installation {#installation}

Install the Guidepup Playwright module to your project as well as the necessary Playwright dependencies.

```bash
# Install dependencies.
npm i @guidepup/playwright @playwright/test

# Install WebKit browser for Playwright.
npx playwright install webkit
```

## Create Playwright Config File (#playwright)

To tell Playwright how we want to run our tests we create a `playwright.config.js` (or `playwright.config.ts` for TypeScript) file for our configuration.

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
import { voConfig } from "@guidepup/playwright";
import { devices, PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  ...voConfig,
  reportSlowTests: null,
  timeout: 2 * 60 * 1000,
  retries: 3,
  projects: [
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"], headless: false, video: "on" },
    },
  ],
};

export default config;
```

</TabItem>
<TabItem value="js">

```js
const { voConfig } = require("@guidepup/playwright");
const { devices } = require("@playwright/test");

const config = {
  ...voConfig,
  reportSlowTests: null,
  timeout: 2 * 60 * 1000,
  retries: 3,
  projects: [
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"], headless: false, video: "on" },
    },
  ],
};

module.exports = config;
```

</TabItem>
</Tabs>

For this example we are using the recommended configuration from the Guidepup Playwright package which ensures we only run the tests with one worker as VoiceOver can only act on one browser instance at a time.

In addition to recommended configuration, we also set a long timeout and disable slow test warnings as automating VoiceOver is slightly slower than Playwright expects if simply automating the browser.

We also setup some retry configuration, and let Playwright know that we want to test against WebKit in headed mode with video recording switched on.

## Create Test File {#test}

Create a `voiceOver.spec.js` (or `voiceOver.spec.ts` for TypeScript) to define your screen-reader code.

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
import { voTest as test } from "@guidepup/playwright";
import { expect } from "@playwright/test";
import itemTextSnapshot from "./itemTextSnapshot.json";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForWebContentAnnouncement(voiceOver) {
  for (let i = 0; i < 10; i++) {
    const itemText = await voiceOver.itemText();

    if (itemText?.includes("web content")) {
      return;
    }

    await delay(50);
  }

  throw new Error("web content could not be found");
}

test.describe("Playwright VoiceOver", () => {
  test("I can navigate the Guidepup Github page", async ({
    page,
    voiceOver,
  }) => {
    // Navigate to Guidepup GitHub page 🎉
    await page.goto("https://github.com/guidepup/guidepup", {
      waitUntil: "domcontentloaded",
    });

    // Wait for page to be ready and interact 🙌
    await expect(page.locator('header[role="banner"]')).toBeVisible();
    await waitForWebContentAnnouncement(voiceOver);
    await voiceOver.interact();

    // Move across the page menu to the Guidepup heading using VoiceOver 🔎
    while ((await voiceOver.itemText()) !== "Guidepup heading level 1") {
      await voiceOver.perform(voiceOver.keyboard.commands.findNextHeading);
    }

    // Assert that we've ended up where we expected and what we were told on
    // the way there is as expected.
    const itemTextLog = await voiceOver.itemTextLog();

    for (const expectedItem of itemTextSnapshot) {
      expect(itemTextLog).toContain(expectedItem);
    }
  });
});
```

</TabItem>
<TabItem value="js">

```js
const { voTest as test } = require("@guidepup/playwright");
const { expect } = require("@playwright/test");
const itemTextSnapshot = require("./itemTextSnapshot.json");

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForWebContentAnnouncement(voiceOver) {
  for (let i = 0; i < 10; i++) {
    const itemText = await voiceOver.itemText();

    if (itemText?.includes("web content")) {
      return;
    }

    await delay(50);
  }

  throw new Error("web content could not be found");
}

test.describe("Playwright VoiceOver", () => {
  test("I can navigate the Guidepup Github page", async ({
    page,
    voiceOver,
  }) => {
    // Navigate to Guidepup GitHub page 🎉
    await page.goto("https://github.com/guidepup/guidepup", {
      waitUntil: "domcontentloaded",
    });

    // Wait for page to be ready and interact 🙌
    await expect(page.locator('header[role="banner"]')).toBeVisible();
    await waitForWebContentAnnouncement(voiceOver);
    await voiceOver.interact();

    // Move across the page menu to the Guidepup heading using VoiceOver 🔎
    while ((await voiceOver.itemText()) !== "Guidepup heading level 1") {
      await voiceOver.perform(voiceOver.keyboard.commands.findNextHeading);
    }

    // Assert that we've ended up where we expected and what we were told on
    // the way there is as expected.
    const itemTextLog = await voiceOver.itemTextLog();

    for (const expectedItem of itemTextSnapshot) {
      expect(itemTextLog).toContain(expectedItem);
    }
  });
});
```

</TabItem>
</Tabs>

## Create Expected Log File {#expected}

In our test file above we reference a `itemTextSnapshot.json` file which contains our expectations on the `itemTextLog` that we retrieve from VoiceOver after navigating to the README.md heading to check the journey was as expected.

Create this `itemTextSnapshot.json` file with the following contents:

```json
[
  "Skip to content link",
  "guidepup/guidepup heading level 1",
  "Latest commit heading level 2",
  "Git stats heading level 2",
  "Files heading level 2",
  "README.md heading level 2",
  "Guidepup heading level 1"
]
```

## Run Test {#run}

Now run your code to see an automated screen-reader test 🚀

```bash
npx playwright test
```

You should observe something similar to below:

![Gif of Playwright controlled Safari browser being driven with VoiceOver. Announcements read: "heading level 2, Latest commit", "heading level 2, Git stats", "You are currently on a heading level 2.", "heading level 2, Files", "You are currently on a heading level 2.", "heading level 2, link, README.md", "heading level 1, Guidepup"](/img/playwright-voiceover.gif)

With a terminal output of:

```console
Running 1 test using 1 worker
·

  1 passed (20s)
Done in 32.56s.
```
