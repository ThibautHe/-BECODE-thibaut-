function inverseWords(str)
{
    let strArr = str.toLowerCase().split(" ")

    return strArr.map(element => {
        let word = element.split("");
        return word.reverse().join("")
    }).join(" ");
}


console.log(inverseWords("This is a string of words")) //----> "siht si a gnirts fo sdrow