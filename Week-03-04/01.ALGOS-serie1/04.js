function detectWord(word)
{
    let lowerCaseWord = "";
    for (let i = 0; i < word.length; i++) {
        if(word[i] == word[i].toLowerCase()){
            lowerCaseWord += word[i];
        }
    }

    console.log(lowerCaseWord);
}

detectWord("UcUNFYGaFYFYGtNUH");
detectWord("bEEFGBuFBRrHgUHlNFYaYr");
detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment");