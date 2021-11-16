const fs = require("mz/fs");

async function main() {
  const filename = process.argv[2];
  if (!filename) {
    console.log("Pls provide a .ast file");
    return;
  }

  const astJson = (await fs.readFile(filename)).toString();
  const runtimeJs = (await fs.readFile("runtime.js")).toString();
  const statements = JSON.parse(astJson);
  const jsCode = generateJsForStatements(statements) + "\n" + runtimeJs;
  const outputFilename = filename.replace(".ast", ".js");
  await fs.writeFile(outputFilename, jsCode);
  console.log(`Wrote file ${outputFilename}`);
}

function generateJsForStatements(statements) {
  const lines = [];
  for (let statement of statements) {
    const line = generateJsForStatementOrExpr(statement);
    lines.push(line);
  }
  return lines.join("\n");
}

function generateJsForStatementOrExpr(node) {
  if (node.type === "var_assign") {
    const varType = node.var_type.value;
    const varName = node.var_name.value;
    const jsExpr = generateJsForStatementOrExpr(node.value);

    if (varType === "nech") {
      return `let ${varName} = ${jsExpr};`;
    } else if (varType === "konstanta") {
      return `const ${varName} = ${jsExpr};`;
    }
  } else if (node.type === "fun_call") {
    const funName = node.fun_name.value;
    if (node.arguments != undefined) {
      const argList = node.arguments
        .map((arg) => {
          return generateJsForStatementOrExpr(arg);
        })
        .join(", ");
      return `${funName}(${argList})`;
    }
  } else if (node.type === "string") {
    return node.value;
  } else if (node.type === "integer") {
    return node.value;
  } else if (node.type === "identifier") {
    return node.value;
  } else {
    throw new Error(`Unhandled AST node type with name: ${node.type}`);
  }
}

main().catch((err) => console.log(err.stack));
