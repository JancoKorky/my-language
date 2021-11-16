let premenna = 98;
vypis(premenna, "text")
const sFunkciou = function () {
   return vypis("prvy", scitanie(5, 5))
};
sFunkciou()
let f = function () {
   return 1
};

ak(rovne(1, 2), function () {
   return vypis("rovnaju sa")
}, function () {
   return vypis("nerovnaju sa")
})
ak(rovne(1, 1), function () {
   return vypis("true")
}, function () {
   return vypis("false")
})
const a = 2;
const b = 2;
const x = function (a, b) {
   return scitanie(a, b)
};
const y = function (a, b) {
   scitanie(b, a);
   odcitanie(a, b);
   return vypis(a, b)
};
const z = function (a) {
   return vypis(a)
};

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

function tiez(cond1, cond2) {
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
