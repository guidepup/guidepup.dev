---
title: "Environment Setup"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

For some operating systems, enabling control of screen-readers is tightly controlled.

To make environment setup easier [`@guidepup/setup`](https://github.com/guidepup/setup) was created to handle the setup of your OS for you.

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

The CLI will first attempt to configure your environment itself, but on systems with tighter security controls such as MacOS with [System Integrity Protection (SIP)](https://support.apple.com/en-gb/HT204899), it may prompt you for additional inputs so that it can complete setup through UI automation.

Alternatively, if you would prefer to configure your environment yourself manually, checkout these guides.

| Guide                          | Description                                                        |
| ------------------------------ | ------------------------------------------------------------------ |
| [NVDA Setup](./nvda)           | Guide on setting up the prerequisites to use NVDA automation.      |
| [VoiceOver Setup](./voiceover) | Guide on setting up the prerequisites to use VoiceOver automation. |
