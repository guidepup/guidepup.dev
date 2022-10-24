import { WindowsModifiers } from "@guidepup/guidepup";
import { writeFileSync } from "fs";

// TODO: generate header of file

const codes = Object.keys(WindowsModifiers)
  .filter((k) => `${parseInt(k)}` !== k)
  .sort()
  .map((k) => `- \`${k}\`\n`)
  .join("");

writeFileSync("./out.md", codes);
