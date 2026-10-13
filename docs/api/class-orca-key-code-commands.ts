import { orcaKeyCodeCommands } from "@guidepup/guidepup";
import { writeFileSync } from "fs";

// TODO: generate header and footer of file

const list = Object.keys(orcaKeyCodeCommands)
  .map((key) => {
    return `- [orcaKeyCodeCommands.${key}](./class-orca-key-code-commands#key-code-commands-${key.toLowerCase()})\n`;
  })
  .join("");

const main = Object.entries(orcaKeyCodeCommands)
  .map(([key, { description, representation, service }]) => {
    const sentence = description.endsWith(".")
      ? description
      : `${description}.`;

    return `## orcaKeyCodeCommands.${key} {#key-code-commands-${key.toLowerCase()}}\n\n${sentence}\n\nEquivalent of executing \`${representation}\`.\n\n**Service:** \`${service}\`\n\n**Type:** [OrcaKeyCodeCommand]\n\n`;
  })
  .join("");

writeFileSync("out.md", `${list}\n\n${main}`);
