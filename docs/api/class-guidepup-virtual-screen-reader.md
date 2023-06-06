---
title: "Virtual Screen Reader Library"
---

# Virtual Screen Reader Library

The Guidepup Virtual Screen Reader provides a set of APIs to automate your screen reader unit test workflows through JavaScript.

Here's a typical example:

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

function setupBasicPage() {
  document.body.innerHTML = `
  <nav>Nav Text</nav>
  <section>
    <h1>Section Heading</h1>
    <p>Section Text</p>
    <article>
      <header>
        <h1>Article Header Heading</h1>
        <p>Article Header Text</p>
      </header>
      <p>Article Text</p>
    </article> 
  </section>
  <footer>Footer</footer>
  `;
}

describe("Screen Reader Tests", () => {
  test("should traverse the page announcing the expected roles and content", async () => {
    // Setup a page using a framework and testing library of your choice
    setupBasicPage();

    // Start your virtual screen reader instance
    await virtual.start({ container: document.body });

    // Navigate your environment with the virtual screen reader just as your users would
    while ((await virtual.lastSpokenPhrase()) !== "end of document") {
      await virtual.next();
    }

    // Assert on what your users would really see and hear when using screen readers
    expect(await virtual.spokenPhraseLog()).toEqual([
      "document",
      "navigation",
      "Nav Text",
      "end of navigation",
      "region",
      "heading, Section Heading, level 1",
      "Section Text",
      "article",
      "banner",
      "heading, Article Header Heading, level 1",
      "Article Header Text",
      "end of banner",
      "Article Text",
      "end of article",
      "end of region",
      "contentinfo",
      "Footer",
      "end of contentinfo",
      "end of document",
    ]);

    // Stop your virtual screen reader instance
    await virtual.stop();
  });
});
```

**Contents:**

- [guidepupVirtualScreenReader.virtual](./class-guidepup-virtual-screen-reader#guidepupVirtualScreenReader-virtual)

## guidepupVirtualScreenReader.virtual {#guidepupVirtualScreenReader-virtual}

**Type:** &#60;[Virtual]&#62;

This object can be used to launch and control the Virtual Screen Reader.

[virtual]: ./class-virtual "Virtual"
