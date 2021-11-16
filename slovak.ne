@{%
const myLexer = require ("./lexer");
%}

@lexer myLexer

statements
    -> _ml statement (_ml statement _):*
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


fun_call
    -> %identifier %lpar _ (arg_list):? _ %rpar
        {%
            (data) => {
                return{
                    type: "fun_call",
                    fun_name: data[0],
                    arguments: data[3] ? data[3][0]: []
                }
            }
        %}

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

lambda 
    -> %lpar _ (param_list _):? %rpar _ %fatarrow _ lambda_body
    {%
        (data) => {
            return {
                type: "lambda",
                parameters: data[2] ? data[2][0] : [],
                body: data[7]
            }
        }
    %} 

param_list
    -> %identifier (_ %comma _ %identifier):*
        {%
            (data) => {
                const repeatedIdentifier = data[1];
                const restParams = repeatedIdentifier.map(identf => identf[3]);
                return [data[0], ...restParams];
            }
        %}

lambda_body
    -> %lcurly _ %newline statements %newline _ %rcurly
        {%
            (data) => {
                return data[3];
            }
        %}
    | expression
        {%
            (data) => {
                return [data[0]];
            }
        %}

expression
    -> %string {% id %}
    | %integer {% id %}
    | %identifier {% id %}
    | fun_call {% id %}
    | lambda {% id %}



# mandatory line break
__lb -> (_ %newline):+ _

# optional multiline whitespace
_ml -> (%whitespace | %newline):*

# mandatory multiline whitespace
__ml -> (%whitespace | %newline):+

# optional whitespace
_ -> %whitespace:*

# mandatory whitespace
__ -> %whitespace:+