// Built-in functions

function vypis(...args) {
  console.log(...args);
}

function scitanie(x, y) {
  return x + y;
}

function nasobenie(x, y) {
  return x * y;
}

function odpocitanie(x, y) {
  return x - y;
}

function delenie(x, y) {
  return x / y;
}

function odmocnina(x) {
  return Math.sqrt(x);
}

function mocnina(x, y) {
  return Math.pow(x, y);
}

function rovne(a, b) {
  return a === b;
}

function rozne(a, b) {
  return a != b;
}

function vacsie_rovne(a, b) {
  return a >= b;
}

function mensie_rovne(a, b) {
  return a <= b;
}

function mensie(a, b) {
  a < b;
}

function vacsie(a, b) {
  a > b;
}

function a(cond1, cond2) {
  return cond1 && cond2;
}

function alebo(cond1, cond2) {
  return cond1 || cond2;
}

function ak(condition, consequent, alternate) {
  if (condition) {
    return consequent();
  } else {
    return alternate();
  }
}
