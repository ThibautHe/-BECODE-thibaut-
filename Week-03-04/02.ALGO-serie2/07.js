function calculator(a, mathExpression,b)
{
    let result = 0;

 switch (mathExpression) {
    case "+":
        result = a + b;
        break;
    
    case "-":
        result = a-b;
        break;
    
    case "*":
        result = a*b;
        break;

    case "/":
        if (b !== 0) {
            result = a/b;
        }
        break;
    default:
        break;
 }
 
 return result;
}

console.log(calculator(2, "+", 2)); // ➞ 4

console.log(calculator(2, "*", 2)); // ➞ 4

console.log(calculator(4, "/", 2)); // ➞ 2