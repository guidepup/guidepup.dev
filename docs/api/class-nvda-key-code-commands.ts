import { NVDAKeyCodeCommands } from "@guidepup/guidepup";
import { writeFileSync } from "fs";

// TODO: generate header and footer of file

const list = Object.keys(NVDAKeyCodeCommands)
  .map((key) => {
    return `- [NVDAKeyCodeCommands.${key}](./class-nvda-key-code-commands#key-code-commands-${key.toLowerCase()})\n`;
  })
  .join("");

const main = Object.entries(NVDAKeyCodeCommands)
  .map(([key, { description, representation }]) => {
    return `## NVDAKeyCodeCommands.${key} {#key-code-commands-${key.toLowerCase()}}\n\n${description}.\n\nEquivalent of executing \`${representation}\`.\n\n**Type:** &#60;[WindowsKeyCodeCommand]&#62;\n\n`;
  })
  .join("");

writeFileSync("out.md", `${list}\n\n${main}`);
