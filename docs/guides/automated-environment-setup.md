---
title: Environment Setup
description: Environment setup guidance for automating screen readers for accessibility testing with Guidepup
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

This guide applies to users of the [`@guidepup/guidepup`](https://github.com/guidepup/guidepup) or [`@guidepup/playwright`](https://github.com/guidepup/guidepup-playwright) packages. OS environment setup is not required for users of the [`@guidepup/virtual-screen-reader`](https://github.com/guidepup/virtual-screen-reader) package.

## Automated Setup

For some operating systems, enabling control of screen readers is tightly controlled.

To make environment setup easier [`@guidepup/setup`](https://github.com/guidepup/setup) was created to handle the setup of your OS for you. Run the setup with:

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
npx @guidepup/setup
```

</TabItem>
<TabItem value="ci">

```bash
npx @guidepup/setup --ci
```

</TabItem>
</Tabs>

The CLI will first attempt to configure your environment itself, but on systems with tighter security controls such as MacOS with [System Integrity Protection (SIP)](https://support.apple.com/en-gb/HT204899), it may prompt you for additional inputs such as username and password so that it can complete setup through UI automation.

If you are uncomfortable with providing credentials to this CLI you can manually achieve these steps by following the [Manual VoiceOver Setup](/docs/guides/manual-voiceover-setup) guide.

> **⚠️ Warning**
>
> You might be tempted to disable [System Integrity Protection (SIP)](https://support.apple.com/en-gb/HT204899) to streamline this process, but this comes with **serious security implications** so please first refer to the [Apple documentation](https://developer.apple.com/documentation/security/disabling_and_enabling_system_integrity_protection) for more details before taking any action.
>
> It is strongly advised that you use [`@guidepup/setup`](https://github.com/guidepup/setup) or the [Manual VoiceOver Setup](/docs/guides/manual-voiceover-setup) guide for local development in preference to changing SIP status.

## Recording Setup (MacOS Only)

If you are encountering errors in CI for MacOS you can pass a `--record` flag to the command which will output a screen-recording of the setup to a `./recordings/` folder within the current working directory.

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
npx @guidepup/setup --record
```

</TabItem>
<TabItem value="ci">

```bash
npx @guidepup/setup --ci --record
```

</TabItem>
</Tabs>

## GitHub Action

Add this [`guidepup/setup-action`](https://github.com/marketplace/actions/guidepup-setup) step to enable screen reader test automation in GitHub CI:

```yaml
- name: Guidepup Setup
  uses: guidepup/setup-action
```

## Issues

If you are encountering issues with [`@guidepup/setup`](https://github.com/guidepup/setup) then please reach out and raise a [GitHub issue](https://github.com/guidepup/setup/issues).
