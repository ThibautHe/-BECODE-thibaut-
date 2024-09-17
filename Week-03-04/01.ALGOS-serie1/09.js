function calculateFuel(distance)
{
    let fuelNeeded = 100;

    if(distance < 0){return;}

    if(distance < 10){return fuelNeeded;}

    return distance * 10;

}

console.log(calculateFuel(15)); //➞ 150

console.log(calculateFuel(23.5)); //➞ 235

console.log(calculateFuel(3)); //➞ 100