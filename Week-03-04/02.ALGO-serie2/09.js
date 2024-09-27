function reverseWords(str)
{
    return str.split(" ").filter(s =>s).reverse().join(" ");
}




console.log(reverseWords(" the sky is blue")); //➞ "blue is sky the"

console.log(reverseWords("hello   world!  ")); //➞ "world! hello"

console.log(reverseWords("a good example")); //➞ "example good a"