statement
    -> variable_assign

variable_assign
    -> %variable _ "=" _ expression

expression
    -> %string
    | %integer

# optional whitespace
_ -> %whitespace:*

# mandatory whitespace
__ -> %whitespace:+