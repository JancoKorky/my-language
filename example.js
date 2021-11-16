let premenna = 98;
vypis(premenna, "text")
const sFunkciou = function () {
   return vypis("prvy", scitanie(5, 5))
};
sFunkciou()
let f = function () {
   return 1
};

ak(rovnaju_sa(1, 2), function () {
   return vypis("rovnaju sa")
}, function () {
   return vypis("nerovnaju sa")
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

function rovnaju_sa(a, b) {
  return a === b;
}

function alebo(cond1,cond2) {
    return cond1 || cond2
}

function ak(condition, consequent, alternate) {
  if (condition) {
    return consequent();
  } else {
    return alternate();
  }
}
