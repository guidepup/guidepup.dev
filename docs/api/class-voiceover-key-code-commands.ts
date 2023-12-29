import { voiceOverKeyCodeCommands } from "@guidepup/guidepup";
import { writeFileSync } from "fs";

// TODO: generate header and footer of file

const list = Object.keys(voiceOverKeyCodeCommands)
  .map((key) => {
    return `- [voiceOverKeyCodeCommands.${key}](./class-voiceover-key-code-commands#key-code-commands-${key.toLowerCase()})\n`;
  })
  .join("");

const main = Object.entries(voiceOverKeyCodeCommands)
  .map(([key, { description, representation }]) => {
    return `## voiceOverKeyCodeCommands.${key} {#key-code-commands-${key.toLowerCase()}}\n\n${description}.\n\nEquivalent of executing \`${representation}\`.\n\n**Type:** [MacOSKeyCodeCommand]\n\n`;
  })
  .join("");

writeFileSync("out.md", `${list}\n\n${main}`);
