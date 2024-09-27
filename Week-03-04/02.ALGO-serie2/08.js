function areaOfCountry(country, landmass)
{
    return `${country} is ${(landmass / 148940000 *100).toFixed(2)}% of the total world's landmass`;
}

console.log(areaOfCountry("Russia", 17098242)); //➞ "Russia is 11.48% of the total world's landmass"

console.log(areaOfCountry("USA", 9372610)); //"USA is 6.29% of the total world's landmass"

console.log(areaOfCountry("Iran", 1648195)) ;//➞ "Iran is 1.11% of the total world's landmass"
// Notes
// The total world's landmass is 148,940,000 [Km^2]
// Round the result to two decimal places.