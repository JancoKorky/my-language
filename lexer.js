const moo = require("moo");
const fs = require("mz/fs");

let lexer = moo.compile({
  whitespace: /[ \t]+/,
  comment: /\/\/.*?$/,
  integer: /0|[1-9][0-9]*/,
  variable: ["nech","konstanta"],
  keywords: ["pre","kym","ak"],
  string: /"(?:\\["\\]|[^\n"\\])*"/,
  lparen: "(",
  rparen: ")",
  lcurly: "{",
  rcurly: "}",
  fatarrow: "=>",
  assign: "=",
  identifier: /[a-zA-Z][a-zA-Z_0-9]*/,
  newline: { match: "\r\n", lineBreaks: true },
});

main();
async function main() {
  const code = (await fs.readFile("example.slovak")).toString();
  lexer.reset(code);
  while (true) {
    const token = lexer.next();
    if (!token) {
      break;
    }
    console.log(token);
  }
}
