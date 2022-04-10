const fs = require("fs");
const file = "./subgraph.yaml";

async function main () {
  const readResult = await fs.readFileSync(file, 'utf-8');
  const newFile = readResult.split("/node_modules").join("./node_modules");
   fs.writeFileSync(file, newFile, "utf-8");
  console.log("successfuly patched:", file);
}

main();