---
title: "StartOptions"
---

Options for starting the Virtual Screen Reader.

For example, to use the Virtual Screen Reader against the entire page:

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start Virtual on the entire page.
  await virtual.start({ container: document.body });

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

To instead use the Virtual Screen Reader within a particular element (with that element included):

```ts
import { virtual } from "@guidepup/virtual-screen-reader";
import { screen } from "@testing-library/dom";

test("example test", async () => {
  const container = screen.getByRole("navigation");

  // Start Virtual within a <nav> element in the page.
  await virtual.start({ container });

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

If using in a headed browser environment such as [Storybook](https://storybook.js.org/), you can also opt-in to having the virtual cursor displayed visually:

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start Virtual on the entire page with the virtual cursor displayed visually.
  await virtual.start({ container: document.body, displayCursor: true });

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Contents:**

- [startOptions.container](./class-start-options#start-options-container)
- [startOptions.window](./class-start-options#start-options-window)
- [startOptions.displayCursor](./class-start-options#start-options-display-cursor)

## startOptions.container {#start-options-container}

The bounding HTML element to use the Virtual Screen Reader in.

To use the entire page pass `document.body`.

**Type:** [HTMLElement]

## startOptions.window {#start-options-window}

**Optional:** The window instance.

Only required if the `window` instance is not already globally available. For example, when you are in a Node environment and using a custom DOM implementation that is not attached to the global scope.

Defaults to using the global `window` instance.

**Type:** [Window]

## startOptions.displayCursor {#start-options-display-cursor}

**Optional:** Display the Virtual Screen Reader cursor visually on the target element.

> Note: There is a performance overhead to visually rendering the cursor.

**Type:** [boolean]

[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean "boolean"
[htmlelement]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement "HTMLElement"
[window]: https://developer.mozilla.org/en-US/docs/Web/API/Window "Window"
