import { execSync } from "child_process";
try {
  const output = execSync("git show HEAD:src/pages/Home.tsx").toString();
  console.log(output);
} catch (e) {
  console.error(e);
}
