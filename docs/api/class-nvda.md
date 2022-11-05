---
title: "NVDA"
---

A NVDA instance can be used to launch and control NVDA.

Here's a typical example using a [NVDA] instance:

```ts
const { nvda } = require("@guidepup/guidepup");

(async () => {
  await nvda.start();
  await nvda.stop();
})();
```

This module is currently WIP so the full [ScreenReader] interface has not yet been implemented.

**Contents:**

- [nvda.default()](./class-nvda#nvda-default)
- [nvda.detect()](./class-nvda#nvda-detect)
- [nvda.start()](./class-nvda#nvda-start)
- [nvda.stop()](./class-nvda#nvda-stop)

## nvda.default() {#nvda-default}

Detect whether NVDA is the default screen reader for the current OS.

```ts
const { nvda } = require("@guidepup/guidepup");

(async () => {
  const isNvdaDefaultScreenReader = await nvda.default();

  console.log(isNvdaDefaultScreenReader);
})();
```

**Returns:** &#60;[Promise]<[boolean]>&#62;

## nvda.detect() {#nvda-detect}

Detect whether NVDA is supported for the current OS.

```ts
const { nvda } = require("@guidepup/guidepup");

(async () => {
  const isNvdaSupportedScreenReader = await nvda.detect();

  console.log(isNvdaSupportedScreenReader);
})();
```

**Returns:** &#60;[Promise]<[boolean]>&#62;

## nvda.start() {#nvda-start}

Turn NVDA on.

```ts
const { nvda } = require("@guidepup/guidepup");

(async () => {
  // Start NVDA.
  await nvda.start();
})();
```

**Returns:** &#60;[Promise]<[void]>&#62;

## nvda.stop() {#nvda-stop}

Turn NVDA off.

```ts
const { nvda } = require("@guidepup/guidepup");

(async () => {
  // Start NVDA.
  await nvda.start();

  // ... perform some commands.

  // Stop NVDA.
  await nvda.stop();
})();
```

**Returns:** &#60;[Promise]<[void]>&#62;

[screenreader]: ./class-screenreader "ScreenReader"
[nvda]: ./class-nvda "NVDA"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean "boolean"
[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"
[void]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void"
