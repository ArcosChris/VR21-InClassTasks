#JS Eloquent JavaScript 

# Chapter 1 - Values, Types, And Operators
- Modern computer has more than 30B bits in its volatile data storage (working memory).

- Nonvolatile storage (the hard disk or equivalent) tends to have yet a few order of magnitude more. 

- In order to work with a lot of bits without getting lost, we separate them into chunck which we call values in JS Environment

- Every value has a type that detemines its role. (Numbers, text, functions etc.)

    ## JS Types: </br>
    ### Numbers
    - Represents numeric values (Example : 13, 12, 25.2, etc.)
    - When you create a variable with the value of 13 - the bit pattern for number 13 will be added to the computer's memory.
    - JavaScript uses a fixed number of bits (64 bits) when storing a single number value. This means we do have a limitation to which numbers can be represented. ( about 18 quintillion)
    - Not all whole numbers less 18 quintillion fit in a JS number though because those bits also store negative numbers, non-whole numbers.
    - The acutal max whole number that can be stored is more in the range of 9 Quadrillion.

    - Fractional numbers are written by using a dot (9.10)
    - For larger or small numbers you can also use scientific notation 2.998e8)

    ### Arithmetic
    - JS supports arithmetic operations
    -  (+, -, *, /, %, etc.) are called operators which are used the same way they are used in traditional arithmetic. 
    - 
    ### Special Numbers
    - Three special values in Js that are considered numbers but do not behave the same.
    - We have <code>Infinity</code> and <code>-Infinity</code>.
    - They are not mathematically sounds and should be used with caution since they can lead to a NaN (Not a Number).

    ### Strings
    - Strings are used to represent text
    - You can use single or double quotes as well as backticks ("", '', ``).
    - For obvious reasons strings do not have arithmetic logic but when the (+) operator is used it will produce concatenation.

    ### Unary Operators
    - example : typeof 
    - unlike other operators some unary operators are written words
    - The minus operator can be used as both a binary and unary operator (ex. 8 - 1, -2)

    ### Boolean Values
    - A way to produce boolean values is through comparison (3 > 2 produces true)
    - There is only one value in JS that is not equal (==) to itself and that is <strong>NaN</strong>. 

    ### Logical Values
    - Three logical operators supported in JS are AND, NOT, OR (&&, ||, !)
    - The AND (&&) produces true when both values are equal to true. 
    - The OR (||) produces true when atleast one value is true.
    - The NOT (!) is a unary operator used to ensure that one item is not the other.
    </br> 
      <strong>Examples</strong>
       - (true && true) equals true
       - (true && false) equals false
       - (false || true) equals true
       - (false || false) equals false
       - ("Chris" != "Chris") equals false
       - ("Chris" != "Chicken") equals true

    ### Empty Values 
    - null or undefined used to denote the absence of a meaningful value.
    - They are values but do not have any real information.

# Chapter 2 - Program Structure
- A fragment of code that produces a values is called an <i>expression</i>.
- JS uses Bindings to keep internal state. 
- The <i>let</i> keyword indicates that there will be a binding defined. 
- It is then followed by a name for the binding (ex. name).
- We then want to give the binding a value using the (=) operator (assignment).
- (let name = "Chris";)
- This expression can now be used for many different things within the program.

    ## Functions
    - A function is a piece of program wrapped in a value. 
    - When we execute a function we call it invoking, calling or applying the specified function.
      <strong>Example</strong>
     <code> function printName(name){console.log(name);}</code>
     </br>
     <code>printName("Chris");</code>
    



# Chapter 3 - Values, Types, And Operators


# Chapter 4 - Values, Types, And Operators


