# Korky language
Project is created for completion of the course *Programming Languages and Compilers*.
I decided to use JavaScript instead of Java as I'm more familiar with JavaScript.

#### Installation of dependecies
Firstly you need to have installed [Node.js](https://nodejs.org/en/).
If you already have Node.js you can install dependencies:

```npm install --save```

##### What dependecies are important
- [Nearley.js](https://nearley.js.org/) parser toolkit
- [Moo!](https://www.npmjs.com/package/moo) tokenizer/lexer generator

I recommend to install *nearley* globaly as we want to use specific command from nearley:

```npm install nearley -g```

## Project description
In this section I will try to explain what files contains and how to generate parser.

### Lexer
In simple words Lexer changing textfile into separate tokens and in file `lexer.js` you can see Lexer a.k.a Tokenizer that is made using *Moo!* library. This library offer benefits such as saving line and collumn of each occurrence. For example you can see in file there are `keywords` of variables `nech` and `konstanta` what is slovak translatation of `let` and `const`.

This `lexer` is exported, so in project you can see "require" at file `slovak.ne` where you can see parser.

### Grammar and Parser
In file `slovak.ne` you can see defined grammar that will `nearly` parse. What you can see is for example statement assign
```
statements
    -> _ml statement (__lb statement _):* _ml
        {%
            (data) => {
                const repeated = data[2];
                const restStat = repeated.map(stat => stat[1])
                return [data[1], ...restStat]
            }
        %}

statement
    -> variable_assign {% id %}
    | fun_call {% id %}
    | %comment {% id %}
```

Next to mention at documentation `Nearly` recomend to use`_` dash as optional whitespace and `__` doubledash asmandatory whitespace. Or `_ml` and `__lb` as optional newline and line-break.

#### Generating parser
For compiling grammar you can use script:

```node run gen-parser```

that will create new parser file with name `generated_parser.ko`

Or you can use command:

```nearleyc slovak.ne -o [your_file_name_of_generated_parser]```

This is very important to do if you change something in `.ne` file. Or the changes will be not applied and the next section will not work properly.

##### Parser
In `parse.js` is your Korky code(`example.ko`) transformed into `.ast` file with use of `slovak.ne` grammar(rule) that nearly need.
This `.ast` file contains informations of each type of grammar(tokens) for example:
```
{
    "type": "var_assign",
    "var_type": {
      "type": "keyword",
      "value": "nech",
      "text": "nech",
      "offset": 2,
      "lineBreaks": 0,
      "line": 2,
      "col": 1
    },
    "var_name": {
      "type": "identifier",
      "value": "premenna",
      "text": "premenna",
      "offset": 7,
      "lineBreaks": 0,
      "line": 2,
      "col": 6
    },
    "value": {
      "type": "integer",
      "value": "98",
      "text": "98",
      "offset": 18,
      "lineBreaks": 0,
      "line": 2,
      "col": 17
    }
  },
```
This `.ast` file we need for generator that will translate `.ast` file to normal `.js` file that nodejs can run.

#### Making Generator
Generator checking all the compiled grammar informations and translate it to real runable JavaScript code. This generator you can see in file `generate.js`. To use generator you can run command 
```node generate.js example.ast```

#### All together
If you don't want to waste time with all commands there is `run.js` which contains whole process.
Keep in mind when you change something in `.ne` file you have to run command

`node run gen-parser`

and after that you can use mentioned `run.js` file with command:

`node run.js example.ko`

where `example.ko` is you Korky code.

## How Korky language looks
As we mentioned you can use Slovak language to write code.
##### Variables
`nech premenna = 1` in Korky
`let premenna = 1` in JavaScript

Similar with constant
`konstanta a = 5` in Korky
`const a = 5` in JavaScript

Also u can use lambda function and assign it to variable see:
`konstanta b = () => vypis("Ahoj svet!")`
##### Functions
`(a,b) => vypis(scitanie(a,b))`
will look in javascript as:
```
function (a,b) { 
    return vypis(scitanie(a,b))
    }
```