const nearley = require("nearley");
const grammar = require("./generated_parser.ko");
const fs = require("mz/fs");

async function main() {
  const filename = process.argv[2];
  if (!filename) {
    console.log("Pls provide a .ko file");
    return;
  }

  const code = (await fs.readFile(filename)).toString();
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
  parser.feed(code);
  if (parser.results.length > 1) {
    console.log("Error: ambigous grammar detected");
  } else if (parser.results.length == 1) {
    const ast = parser.results[0];
    const outputFilename = filename.replace(".ko", ".ast");
    await fs.writeFile(outputFilename, JSON.stringify(ast, null, "  "));
    console.log(`Wrote ${outputFilename}.`);
} else {
      console.log("Error: no parser found");
  }

//   console.log(parser.results);
}

main().catch((err) => console.log(err.stack));
