function isPalidrome(str)
{
    let string = str.replace("'", '').replace(",",'').toLowerCase().trim().split(" ").join("");
    let reverseString = "";

    for (let i = string.length; i > 0; i--) {
        
        reverseString += string[i - 1];
        
    }

    console.log(string);
    console.log(reverseString);

    if(string  === reverseString)
    {
        return true;
    }
    else
    {
        return false;
    }
    
}

console.log(isPalidrome("hello"));
console.log(isPalidrome("kayak"));
console.log(isPalidrome("race car"));
console.log(isPalidrome("Madam, I'm Adam"));