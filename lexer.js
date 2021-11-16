const moo = require("moo");
const fs = require("mz/fs");

let lexer = moo.compile({
  whitespace: /[ \t]+/,
  comment: /\/\/.*?$/,
  integer: /0|[1-9][0-9]*/,
  string: /"(?:\\["\\]|[^\n"\\])*"/,
  keyword: [/(?<![\w\d])nech(?![\w\d])/, /(?<![\w\d])konstanta(?![\w\d])/],
  fatarrow: "=>",
  assign: "=",
  comma: ",",
  rpar: ")",
  lpar: "(",
  lcurly: "{",
  rcurly: "}",
  identifier: /[a-zA-Z][a-zA-Z_0-9]*/,
  newline: { match: /\r\n/, lineBreaks: true },
});

module.exports = lexer;

// main()
async function main() {
  const code = (await fs.readFile("example.ko")).toString();
  lexer.reset(code);
  while (true) {
    const token = lexer.next();
    if (!token) {
      break;
    }
    console.log(token);
  }
}
