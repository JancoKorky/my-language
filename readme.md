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

#### Lexer
In simple words Lexer changing textfile into separate tokens and in file `lexer.js` you can see Lexer a.k.a Tokenizer that is made using *Moo!* library. This library offer benefits such as saving line and collumn of each occurrence. It's still not complete as I'm working on changes. But for example you can see in file there are variables `nech` and `konstanta` what is slovak translatation of `let` and `const`.

If you want to see exemple you can use command:

```node lexer.js```

That will process example.ko file.

#### Parser
In file `slovak.ne` is posible to define statements such as variable statement as you can see in file. At documentation `Nearly` recomend to use `_` dash as optional whitespace and `__` doubledash as mandatory whitespace.

#### Generating parser
For generation parser you can use script:

```node run gen-parser```

that will create new file with name `generated_parser.ko`

Or you can use command:

```nearleyc slovak.ne -o file_name_of_generated_parser```

