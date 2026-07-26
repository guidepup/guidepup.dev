---
title: Machine setup
description: Machine setup guidance for automating screen readers for accessibility testing with Guidepup
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

This guide applies to users of the [`@guidepup/guidepup`](https://github.com/guidepup/guidepup) or [`@guidepup/playwright`](https://github.com/guidepup/guidepup-playwright) packages.

Machine setup <em>is not required</em> for users of the [`@guidepup/virtual-screen-reader`](https://github.com/guidepup/virtual-screen-reader) package.

## Automated setup

For some operating systems, enabling control of screen readers is tightly controlled.

To make machine setup easier, [`@guidepup/setup`](https://github.com/guidepup/setup) provides separate commands to configure your machine and to install screen reader assets. This guide applies to both steps.

## Configure your machine

The `setup` command configures your machine for screen reader automation. It only needs to be run once per machine:

<Tabs
groupId="env-flavor"
defaultValue="local"
values={[
{label: 'Local', value: 'local'},
{label: 'CI / CD', value: 'ci'}
]
}>
<TabItem value="local">

```bash
npx @guidepup/setup setup
```

</TabItem>
<TabItem value="ci">

```bash
npx @guidepup/setup setup --ci
```

</TabItem>
</Tabs>

The CLI first attempts to configure your machine. On machines with tighter security controls, such as macOS with [System Integrity Protection (SIP)](https://support.apple.com/en-gb/HT204899), it may prompt for additional manual steps.

If you are uncomfortable with providing credentials to this CLI you can manually achieve these steps by following the [Manual VoiceOver Setup](/docs/guides/manual-voiceover-setup) guide.

> **⚠️ Warning**
>
> You might be tempted to disable [System Integrity Protection (SIP)](https://support.apple.com/en-gb/HT204899) to streamline this process, but this comes with **serious security implications** so please first refer to the [Apple documentation](https://developer.apple.com/documentation/security/disabling_and_enabling_system_integrity_protection) for more details before taking any action.
>
> It is strongly advised that you use [`@guidepup/setup`](https://github.com/guidepup/setup) or the [Manual VoiceOver Setup](/docs/guides/manual-voiceover-setup) guide for local development in preference to changing SIP status.

### Recording setup (macOS only)

If you are encountering errors in CI for macOS, you can pass a `--macos-record` flag to the `setup` command. It outputs a screen recording to a `./recordings/` folder within the current working directory.

<Tabs
groupId="env-flavor"
defaultValue="local"
values={[
{label: 'Local', value: 'local'},
{label: 'CI / CD', value: 'ci'}
]
}>
<TabItem value="local">

```bash
npx @guidepup/setup setup --macos-record
```

</TabItem>
<TabItem value="ci">

```bash
npx @guidepup/setup setup --ci --macos-record
```

</TabItem>
</Tabs>

## Install screen reader assets

After installing `@guidepup/guidepup` (or a package that depends on it), run `install` from your project directory:

```bash
npx @guidepup/setup install
```

Guidepup reads the installed package's manifest to select the screen reader assets supported by that version. Run the command again whenever you upgrade Guidepup.

You can install an individual supported screen reader when needed:

```bash
npx @guidepup/setup install voiceover
npx @guidepup/setup install nvda
```

### Cache location

By default, installed assets are stored in your operating system's cache directory:

- `~/.cache/guidepup/` on Linux
- `~/Library/Caches/guidepup/` on macOS
- `%USERPROFILE%\AppData\Local\guidepup\` on Windows

To use a different location, set `GUIDEPUP_SCREEN_READERS_PATH`:

```bash
GUIDEPUP_SCREEN_READERS_PATH=$HOME/guidepup npx @guidepup/setup install
```

### Proxy configuration

Screen reader assets are downloaded from GitHub release URLs. If your network uses an HTTPS proxy, set `HTTPS_PROXY` when running `install`:

```bash
HTTPS_PROXY=https://192.0.2.1 npx @guidepup/setup install
```

### Cleanup

Unused assets are cleaned up automatically when `install` next runs.

## Issues

If you are encountering issues with [`@guidepup/setup`](https://github.com/guidepup/setup) then please reach out and raise a [GitHub issue](https://github.com/guidepup/setup/issues).
