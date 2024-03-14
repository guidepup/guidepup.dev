---
title: "VirtualCommands"
---

**Extends:** [object]

**Implements:** [Record]&#60;[string], [string]&#62;

Collection of Virtual Screen Reader commands.

Use with the `perform` command to invoke an action:

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the next landmark.
  await virtual.perform(virtual.commands.moveToNextLandmark);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Contents:**

- [virtualCommands.jumpToControlledElement](./class-virtual-commands#virtual-commands-jumpToControlledElement)
- [virtualCommands.jumpToDetailsElement](./class-virtual-commands#virtual-commands-jumpToDetailsElement)
- [virtualCommands.jumpToErrorMessageElement](./class-virtual-commands#virtual-commands-jumpToErrorMessageElement)
- [virtualCommands.moveToNextAlternateReadingOrderElement](./class-virtual-commands#virtual-commands-moveToNextAlternateReadingOrderElement)
- [virtualCommands.moveToPreviousAlternateReadingOrderElement](./class-virtual-commands#virtual-commands-moveToPreviousAlternateReadingOrderElement)
- [virtualCommands.moveToNextBanner](./class-virtual-commands#virtual-commands-moveToNextBanner)
- [virtualCommands.moveToPreviousBanner](./class-virtual-commands#virtual-commands-moveToPreviousBanner)
- [virtualCommands.moveToNextComplementary](./class-virtual-commands#virtual-commands-moveToNextComplementary)
- [virtualCommands.moveToPreviousComplementary](./class-virtual-commands#virtual-commands-moveToPreviousComplementary)
- [virtualCommands.moveToNextContentinfo](./class-virtual-commands#virtual-commands-moveToNextContentinfo)
- [virtualCommands.moveToPreviousContentinfo](./class-virtual-commands#virtual-commands-moveToPreviousContentinfo)
- [virtualCommands.moveToNextFigure](./class-virtual-commands#virtual-commands-moveToNextFigure)
- [virtualCommands.moveToPreviousFigure](./class-virtual-commands#virtual-commands-moveToPreviousFigure)
- [virtualCommands.moveToNextForm](./class-virtual-commands#virtual-commands-moveToNextForm)
- [virtualCommands.moveToPreviousForm](./class-virtual-commands#virtual-commands-moveToPreviousForm)
- [virtualCommands.moveToNextHeading](./class-virtual-commands#virtual-commands-moveToNextHeading)
- [virtualCommands.moveToPreviousHeading](./class-virtual-commands#virtual-commands-moveToPreviousHeading)
- [virtualCommands.moveToNextHeadingLevel1](./class-virtual-commands#virtual-commands-moveToNextHeadingLevel1)
- [virtualCommands.moveToPreviousHeadingLevel1](./class-virtual-commands#virtual-commands-moveToPreviousHeadingLevel1)
- [virtualCommands.moveToNextHeadingLevel2](./class-virtual-commands#virtual-commands-moveToNextHeadingLevel2)
- [virtualCommands.moveToPreviousHeadingLevel2](./class-virtual-commands#virtual-commands-moveToPreviousHeadingLevel2)
- [virtualCommands.moveToNextHeadingLevel3](./class-virtual-commands#virtual-commands-moveToNextHeadingLevel3)
- [virtualCommands.moveToPreviousHeadingLevel3](./class-virtual-commands#virtual-commands-moveToPreviousHeadingLevel3)
- [virtualCommands.moveToNextHeadingLevel4](./class-virtual-commands#virtual-commands-moveToNextHeadingLevel4)
- [virtualCommands.moveToPreviousHeadingLevel4](./class-virtual-commands#virtual-commands-moveToPreviousHeadingLevel4)
- [virtualCommands.moveToNextHeadingLevel5](./class-virtual-commands#virtual-commands-moveToNextHeadingLevel5)
- [virtualCommands.moveToPreviousHeadingLevel5](./class-virtual-commands#virtual-commands-moveToPreviousHeadingLevel5)
- [virtualCommands.moveToNextHeadingLevel6](./class-virtual-commands#virtual-commands-moveToNextHeadingLevel6)
- [virtualCommands.moveToPreviousHeadingLevel6](./class-virtual-commands#virtual-commands-moveToPreviousHeadingLevel6)
- [virtualCommands.moveToNextLink](./class-virtual-commands#virtual-commands-moveToNextLink)
- [virtualCommands.moveToPreviousLink](./class-virtual-commands#virtual-commands-moveToPreviousLink)
- [virtualCommands.moveToNextMain](./class-virtual-commands#virtual-commands-moveToNextMain)
- [virtualCommands.moveToPreviousMain](./class-virtual-commands#virtual-commands-moveToPreviousMain)
- [virtualCommands.moveToNextNavigation](./class-virtual-commands#virtual-commands-moveToNextNavigation)
- [virtualCommands.moveToPreviousNavigation](./class-virtual-commands#virtual-commands-moveToPreviousNavigation)
- [virtualCommands.moveToNextRegion](./class-virtual-commands#virtual-commands-moveToNextRegion)
- [virtualCommands.moveToPreviousRegion](./class-virtual-commands#virtual-commands-moveToPreviousRegion)
- [virtualCommands.moveToNextSearch](./class-virtual-commands#virtual-commands-moveToNextSearch)
- [virtualCommands.moveToPreviousSearch](./class-virtual-commands#virtual-commands-moveToPreviousSearch)
- [virtualCommands.moveToNextLandmark](./class-virtual-commands#virtual-commands-moveToNextLandmark)
- [virtualCommands.moveToPreviousLandmark](./class-virtual-commands#virtual-commands-moveToPreviousLandmark)

## virtualCommands.jumpToControlledElement {#virtual-commands-jumpToControlledElement}

Jump to an element controlled by the current element in the Virtual Screen Reader focus. See [`aria-controls`].

When using with `virtual.perform()`, pass an `index` option to select which controlled element is jumped to when there are more than one:

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to jump to the second controlled element.
  await virtual.perform(virtual.commands.jumpToControlledElement, { index: 1 });

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.jumpToDetailsElement {#virtual-commands-jumpToDetailsElement}

Jump to an element that describes the current element in the Virtual Screen Reader focus. See [`aria-details`].

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to jump to the details element.
  await virtual.perform(virtual.commands.jumpToDetailsElement);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.jumpToErrorMessageElement {#virtual-commands-jumpToErrorMessageElement}

Jump to an element that provides an error message for the current element in the Virtual Screen Reader focus. See [`aria-errormessage`].

When using with `virtual.perform()`, pass an `index` option to select which error message element is jumped to when there are more than one:

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to jump to the second error message element.
  await virtual.perform(virtual.commands.jumpToErrorMessageElement, {
    index: 1,
  });

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToNextAlternateReadingOrderElement {#virtual-commands-moveToNextAlternateReadingOrderElement}

Move to the next element in an alternate reading order. See [`aria-flowto`].

When using with `virtual.perform()`, pass an `index` option to select which alternate reading order element is jumped to when there are more than one:

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the second choice element of next alternate reading order.
  await virtual.perform(
    virtual.commands.moveToNextAlternateReadingOrderElement,
    { index: 1 }
  );

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToPreviousAlternateReadingOrderElement {#virtual-commands-moveToPreviousAlternateReadingOrderElement}

Move to the previous element in an alternate reading order. See [`aria-flowto`].

When using with `virtual.perform()`, pass an `index` option to select which alternate reading order element is jumped to when there are more than one:

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the second choice element of previous alternate reading order.
  await virtual.perform(
    virtual.commands.moveToPreviousAlternateReadingOrderElement,
    { index: 1 }
  );

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToNextBanner {#virtual-commands-moveToNextBanner}

Move to the next element with a [`banner`] role.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the next banner element.
  await virtual.perform(virtual.commands.moveToNextBanner);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToPreviousBanner {#virtual-commands-moveToPreviousBanner}

Move to the previous element with a [`banner`] role.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the previous banner element.
  await virtual.perform(virtual.commands.moveToPreviousBanner);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToNextComplementary {#virtual-commands-moveToNextComplementary}

Move to the next element with a [`complementary`] role.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the next complementary element.
  await virtual.perform(virtual.commands.moveToNextComplementary);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToPreviousComplementary {#virtual-commands-moveToPreviousComplementary}

Move to the previous element with a [`complementary`] role.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the previous complementary element.
  await virtual.perform(virtual.commands.moveToPreviousComplementary);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToNextContentinfo {#virtual-commands-moveToNextContentinfo}

Move to the next element with a [`contentinfo`] role.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the next contentinfo element.
  await virtual.perform(virtual.commands.moveToNextContentinfo);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToPreviousContentinfo {#virtual-commands-moveToPreviousContentinfo}

Move to the previous element with a [`contentinfo`] role.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the previous contentinfo element.
  await virtual.perform(virtual.commands.moveToPreviousContentinfo);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToNextFigure {#virtual-commands-moveToNextFigure}

Move to the next element with a [`figure`] role.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the next figure element.
  await virtual.perform(virtual.commands.moveToNextFigure);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToPreviousFigure {#virtual-commands-moveToPreviousFigure}

Move to the previous element with a [`figure`] role.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the previous figure element.
  await virtual.perform(virtual.commands.moveToPreviousFigure);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToNextForm {#virtual-commands-moveToNextForm}

Move to the next element with a [`form`] role.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the next form element.
  await virtual.perform(virtual.commands.moveToNextForm);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToPreviousForm {#virtual-commands-moveToPreviousForm}

Move to the previous element with a [`form`] role.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the previous form element.
  await virtual.perform(virtual.commands.moveToPreviousForm);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToNextHeading {#virtual-commands-moveToNextHeading}

Move to the next element with a [`heading`] role.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the next heading element.
  await virtual.perform(virtual.commands.moveToNextHeading);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToPreviousHeading {#virtual-commands-moveToPreviousHeading}

Move to the previous element with a [`heading`] role.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the previous heading element.
  await virtual.perform(virtual.commands.moveToPreviousHeading);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToNextHeadingLevel1 {#virtual-commands-moveToNextHeadingLevel1}

Move to the next element with a level 1 [`heading`] role.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the next level 1 heading element.
  await virtual.perform(virtual.commands.moveToNextHeadingLevel1);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToPreviousHeadingLevel1 {#virtual-commands-moveToPreviousHeadingLevel1}

Move to the previous element with a level 1 [`heading`] role.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the previous level 1 heading element.
  await virtual.perform(virtual.commands.moveToPreviousHeadingLevel1);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToNextHeadingLevel2 {#virtual-commands-moveToNextHeadingLevel2}

Move to the next element with a level 2 [`heading`] role.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the next level 2 heading element.
  await virtual.perform(virtual.commands.moveToNextHeadingLevel2);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToPreviousHeadingLevel2 {#virtual-commands-moveToPreviousHeadingLevel2}

Move to the previous element with a level 2 [`heading`] role.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the previous level 2 heading element.
  await virtual.perform(virtual.commands.moveToPreviousHeadingLevel2);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToNextHeadingLevel3 {#virtual-commands-moveToNextHeadingLevel3}

Move to the next element with a level 3 [`heading`] role.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the next level 3 heading element.
  await virtual.perform(virtual.commands.moveToNextHeadingLevel3);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToPreviousHeadingLevel3 {#virtual-commands-moveToPreviousHeadingLevel3}

Move to the previous element with a level 3 [`heading`] role.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the previous level 3 heading element.
  await virtual.perform(virtual.commands.moveToPreviousHeadingLevel3);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToNextHeadingLevel4 {#virtual-commands-moveToNextHeadingLevel4}

Move to the next element with a level 4 [`heading`] role.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the next level 4 heading element.
  await virtual.perform(virtual.commands.moveToNextHeadingLevel4);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToPreviousHeadingLevel4 {#virtual-commands-moveToPreviousHeadingLevel4}

Move to the previous element with a level 4 [`heading`] role.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the previous level 4 heading element.
  await virtual.perform(virtual.commands.moveToPreviousHeadingLevel4);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToNextHeadingLevel5 {#virtual-commands-moveToNextHeadingLevel5}

Move to the next element with a level 5 [`heading`] role.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the next level 5 heading element.
  await virtual.perform(virtual.commands.moveToNextHeadingLevel5);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToPreviousHeadingLevel5 {#virtual-commands-moveToPreviousHeadingLevel5}

Move to the previous element with a level 5 [`heading`] role.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the previous level 5 heading element.
  await virtual.perform(virtual.commands.moveToPreviousHeadingLevel5);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToNextHeadingLevel6 {#virtual-commands-moveToNextHeadingLevel6}

Move to the next element with a level 6 [`heading`] role.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the next level 6 heading element.
  await virtual.perform(virtual.commands.moveToNextHeadingLevel6);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToPreviousHeadingLevel6 {#virtual-commands-moveToPreviousHeadingLevel6}

Move to the previous element with a level 6 [`heading`] role.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the previous level 6 heading element.
  await virtual.perform(virtual.commands.moveToPreviousHeadingLevel6);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToNextLink {#virtual-commands-moveToNextLink}

Move to the next element with a [`link`] role.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the next link element.
  await virtual.perform(virtual.commands.moveToNextLink);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToPreviousLink {#virtual-commands-moveToPreviousLink}

Move to the previous element with a [`link`] role.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the previous link element.
  await virtual.perform(virtual.commands.moveToPreviousLink);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToNextMain {#virtual-commands-moveToNextMain}

Move to the next element with a [`main`] role.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the next main element.
  await virtual.perform(virtual.commands.moveToNextMain);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToPreviousMain {#virtual-commands-moveToPreviousMain}

Move to the previous element with a [`main`] role.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the previous main element.
  await virtual.perform(virtual.commands.moveToPreviousMain);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToNextNavigation {#virtual-commands-moveToNextNavigation}

Move to the next element with a [`navigation`] role.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the next navigation element.
  await virtual.perform(virtual.commands.moveToNextNavigation);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToPreviousNavigation {#virtual-commands-moveToPreviousNavigation}

Move to the previous element with a [`navigation`] role.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the previous navigation element.
  await virtual.perform(virtual.commands.moveToPreviousNavigation);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToNextRegion {#virtual-commands-moveToNextRegion}

Move to the next element with a [`region`] role.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the next region element.
  await virtual.perform(virtual.commands.moveToNextRegion);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToPreviousRegion {#virtual-commands-moveToPreviousRegion}

Move to the previous element with a [`region`] role.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the previous region element.
  await virtual.perform(virtual.commands.moveToPreviousRegion);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToNextSearch {#virtual-commands-moveToNextSearch}

Move to the next element with a [`search`] role.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the next search element.
  await virtual.perform(virtual.commands.moveToNextSearch);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToPreviousSearch {#virtual-commands-moveToPreviousSearch}

Move to the previous element with a [`search`] role.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the previous search element.
  await virtual.perform(virtual.commands.moveToPreviousSearch);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToNextLandmark {#virtual-commands-moveToNextLandmark}

Move to the next element with any [`landmark`] role:

- [`banner`]
- [`complementary`]
- [`contentinfo`]
- [`figure`]
- [`form`]
- [`landmark`]
- [`main`]
- [`navigation`]
- [`region`]
- [`search`]

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the next landmark element.
  await virtual.perform(virtual.commands.moveToNextLandmark);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

## virtualCommands.moveToPreviousLandmark {#virtual-commands-moveToPreviousLandmark}

Move to the previous element with any [`landmark`] role:

- [`banner`]
- [`complementary`]
- [`contentinfo`]
- [`figure`]
- [`form`]
- [`landmark`]
- [`main`]
- [`navigation`]
- [`region`]
- [`search`]

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the previous landmark element.
  await virtual.perform(virtual.commands.moveToPreviousLandmark);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Type:** [string]

[`aria-controls`]: https://www.w3.org/TR/wai-aria-1.2/#aria-controls "aria-controls"
[`aria-details`]: https://www.w3.org/TR/wai-aria-1.2/#aria-details "aria-details"
[`aria-errormessage`]: https://www.w3.org/TR/wai-aria-1.2/#aria-errormessage "aria-errormessage"
[`aria-flowto`]: https://www.w3.org/TR/wai-aria-1.2/#aria-flowto "aria-flowto"
[`banner`]: https://www.w3.org/TR/wai-aria-1.2/#banner "banner"
[`complementary`]: https://www.w3.org/TR/wai-aria-1.2/#complementary "complementary"
[`contentinfo`]: https://www.w3.org/TR/wai-aria-1.2/#contentinfo "contentinfo"
[`figure`]: https://www.w3.org/TR/wai-aria-1.2/#figure "figure"
[`form`]: https://www.w3.org/TR/wai-aria-1.2/#form "form"
[`heading`]: https://www.w3.org/TR/wai-aria-1.2/#heading "heading"
[`landmark`]: https://www.w3.org/TR/wai-aria-1.2/#landmark "landmark"
[`main`]: https://www.w3.org/TR/wai-aria-1.2/#main "main"
[`navigation`]: https://www.w3.org/TR/wai-aria-1.2/#navigation "navigation"
[`region`]: https://www.w3.org/TR/wai-aria-1.2/#region "region"
[`search`]: https://www.w3.org/TR/wai-aria-1.2/#search "search"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "object"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String "string"
[record]: https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type "Record"
