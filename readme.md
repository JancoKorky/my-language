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

### Parser
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

Next to mention at documentation `Nearly` recomend to use`_` dash as optional whitespace and `__` doubledash asmandatory whitespace. Or `_ml` and `__lb` as 

#### Generating parser
For generation parser you can use script:

```node run gen-parser```

that will create new file with name `generated_parser.ko`

Or you can use command:

```nearleyc slovak.ne -o file_name_of_generated_parser```

That part is gonna be change |||||
bcos i did generator and lexer you cant run again at all bcos it's exported and imported at generator or parser(dont remeber where)
```node generate.js example.ast```
then i did generator that takes `.ast` file(there are "tokes" i dont know how to call it) so the Korky code can be again converted to normal JS file and runned

There i have to mention run.js that run all menioned things up there and right now working on runtime functions