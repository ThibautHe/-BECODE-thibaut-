function oddishOrEvenish(num)
{
    let separetednumbers = num.toString().split("").reduce((acc,value) => acc + parseFloat(value) ,0);

    console.log(separetednumbers);
    
    return separetednumbers % 2 == 0 ? "Evenish" : "Oddish";
}


console.log(oddishOrEvenish(43)); //➞ "Oddish"
// 4 + 3 = 7
// 7 % 2 = 1

console.log(oddishOrEvenish(373)); //➞ "Oddish"
// 3 + 7 + 3 = 13
// 13 % 2 = 1

console.log(oddishOrEvenish(4433)); //➞ "Evenish"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0