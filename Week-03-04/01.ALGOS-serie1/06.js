function animals(chicken,cows,pigs){
    let count = 0;

    count += chicken*2
    count += cows*4
    count += pigs*4

    return count;
}


console.log(animals(2,3,5));
console.log(animals(1,2,3));
console.log(animals(5,2,8));
