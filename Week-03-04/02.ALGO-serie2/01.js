function possibleBonus(a,b)
{
    return b - a > 0 && a-b < 7 ? true : false; 
}

console.log(possibleBonus(3, 7)); //➞ true

console.log(possibleBonus(1, 9)); //➞ false

console.log(possibleBonus(5, 3)); //➞ false