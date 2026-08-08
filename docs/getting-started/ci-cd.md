---
title: CI/CD
description: Run Guidepup screen reader tests reliably in continuous integration.
---

# CI/CD

Guidepup tests can run in continuous integration alongside your existing automated tests.

Because Guidepup automates real screen readers, your CI environment needs to provide the operating system and browser required by your tests.

## Prepare the CI environment

The Guidepup setup CLI configures the environment and installs the screen reader assets required by your tests.

Run the setup during your CI job:

```bash
npx @guidepup/setup setup --ci
npx @guidepup/setup install
```

The `setup` command configures the machine for screen reader automation. The `install` command downloads the screen reader assets required by the installed version of Guidepup.

You can run both commands as part of your CI setup without requiring any manual interaction.

## GitHub Actions

For example, a GitHub Actions workflow can run your Playwright screen reader tests on macOS:

```yaml
name: Screen Reader Tests

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

permissions:
  contents: read

jobs:
  voiceover-tests:
    runs-on: macos-latest

    steps:
      - uses: actions/checkout
      - uses: actions/setup-node

      - run: npm ci
      - run: npx playwright install webkit
      - run: npx playwright test

      - run: npx @guidepup/setup setup --ci
      - run: npx @guidepup/setup install

      - run: npm run test
```

## Running real screen readers in CI

Real screen reader tests have different requirements from browser-only tests.

For example, VoiceOver tests require a macOS runner, while NVDA tests require a Windows runner.

Choose the runner based on the screen reader you are testing:

| Screen reader | CI operating system |
| ------------- | ------------------- |
| VoiceOver     | macOS               |
| NVDA          | Windows             |

See the [support matrix](../reference/support-matrix) for the current platform and screen reader support.

## Run screen reader tests separately

Screen reader tests are typically slower than browser-only tests because they control an operating system screen reader.

For larger projects, it can be useful to run them as a separate CI job from your faster unit, component, and browser tests.

For example:

```yaml
jobs:
  test:
    # Fast application and browser tests.

  screen-reader:
    # Guidepup screen reader tests.
```

This keeps the normal test suite fast while still running screen reader regression tests on every change.

## Configure Playwright for screen reader tests

If you are using [`@guidepup/playwright`](https://www.npmjs.com/package/@guidepup/playwright), use the configuration provided by the package:

```ts
import { screenReaderConfig } from "@guidepup/playwright";

export default {
  ...screenReaderConfig,
};
```

The configuration includes settings required for reliable screen reader automation, including limiting tests to a single worker where required by the screen reader.

See the [real world example](./real-world-example) for a complete Playwright configuration.

## Cache screen reader assets

Guidepup stores installed screen reader assets in a cache directory. Caching this directory in CI avoids downloading the assets on every run.

By default, the cache directory is:

- Linux: `~/.cache/guidepup/`
- macOS: `~/Library/Caches/guidepup/`
- Windows: `%USERPROFILE%\AppData\Local\guidepup\`

You can configure a different location with `GUIDEPUP_SCREEN_READERS_PATH`, which can be useful when configuring a CI cache:

```bash
GUIDEPUP_SCREEN_READERS_PATH=$HOME/guidepup npx @guidepup/setup install
```

When caching Guidepup assets, include the Guidepup version in your cache key so that upgrading Guidepup causes the appropriate assets to be downloaded.

## Troubleshooting CI

If a screen reader test works locally but fails in CI, first check:

1. The CI runner is using the operating system required by the screen reader.
2. `npx @guidepup/setup setup` has completed successfully.
3. `npx @guidepup/setup install` has installed the required assets.
4. The required browser is installed.
5. Screen reader tests are not running concurrently when the screen reader requires exclusive access.
6. The CI runner has the permissions and desktop environment required by the screen reader.
