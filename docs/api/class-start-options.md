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

  // Stop Virtual.
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

  // Stop Virtual.
  await virtual.stop();
});
```

**Contents:**

- [startOptions.container](./class-start-options#start-options-container)

## startOptions.container {#start-options-container}

The bounding HTML element to use the Virtual Screen Reader in.

To use the entire page pass `document.body`.

**Type:** [HTMLElement]

[htmlelement]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement "HTMLElement"
