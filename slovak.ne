@{%
const myLexer = require ("./lexer");
%}

@lexer myLexer
statement
    -> variable_assign {% id %}

variable_assign
    -> %keyword __ %identifier _ "=" _ expression
        {%
            (data) => {
                return {
                    type: "var_assign",
                    var_name: data[0],
                    value: data[6],
                }
            }
        %}

expression
    -> %string {% id %}
    | %integer {% id %}

# optional whitespace
_ -> %whitespace:*

# mandatory whitespace
__ -> %whitespace:+