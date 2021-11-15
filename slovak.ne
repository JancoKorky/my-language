@{%
const myLexer = require ("./lexer");
%}

@lexer myLexer

statements
    -> statement
        {%
            (data) => {
                return [data[0]]
            }
        %}
    | statements %newline statement
        {%
            (data) => {
                return [...data[0], data[2]]
            }
        %}

statement
    -> variable_assign {% id %}
    | fun_call {% id %}

variable_assign
    -> %keyword __ %identifier _ "=" _ expression
        {%
            (data) => {
                return {
                    type: "var_assign",
                    var_type: data[0],
                    var_name: data[2],
                    value: data[6],
                }
            }
        %}

fun_call
    -> %identifier %lpar _ arg_list _ %rpar
        {%
            (data) => {
                return{
                    type: "fun_call",
                    fun_name: data[0],
                    arguments: data[3]
                }
            }
        %}
    | %identifier %lpar _ %rpar
        {%
            (data) => {
                return{
                    type: "fun_call",
                    fun_name: data[0],
                    arguments: []
                }
            }
        %}

arg_list
    -> expression
        {%
            (data) => {
                return [data[0]]
            }
        %}
    | arg_list _ %comma _ expression
        {%
            (data) => {
                return [...data[0], data[4]]
            }
        %}

expression
    -> %string {% id %}
    | %integer {% id %}
    | %identifier {% id %}

# optional whitespace
_ -> %whitespace:*

# mandatory whitespace
__ -> %whitespace:+