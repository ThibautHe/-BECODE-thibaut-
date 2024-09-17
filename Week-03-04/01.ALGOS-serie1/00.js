function makesTen(num1,num2)
{
    return num1 === 10 || num2 === 10 || num1+num2 === 10;
}

console.log(makesTen(10,1));
console.log(makesTen(1,10));
console.log(makesTen(9,1));
console.log(makesTen(9,8));