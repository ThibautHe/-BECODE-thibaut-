function reverseOdd(str)
{

    return str.split(" ").map(word => {
        if(word.length % 2 !== 0)
        {
           return word.split("").reverse().join("");
        }
        return word;
    }).join(" ");

}


console.log(reverseOdd("Bananas")) //➞ "sananaB"

console.log(reverseOdd("One two three four")) //➞ "enO owt eerht four"

console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"))
//➞ "Make sure you only reverse words of odd length"