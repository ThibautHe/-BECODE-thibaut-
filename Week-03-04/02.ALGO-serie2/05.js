function removeLeadingTrailing(num)
{
    console.log(parseFloat(num));
    
    return parseFloat(num);
}

removeLeadingTrailing("230.000"); //➞ "230"

removeLeadingTrailing("00402"); //➞ "402"

removeLeadingTrailing("03.1400"); //➞ "3.14"

removeLeadingTrailing("30"); //➞ "30"