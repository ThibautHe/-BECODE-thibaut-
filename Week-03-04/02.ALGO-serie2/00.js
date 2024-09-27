function countTrue(arr)
{
    let count = 0;

    arr.forEach(element => {
        if(element){
            count++;
        }
    });

    return count;
}

console.log(countTrue([true, false, false, true, false])); //➞ 2

console.log(countTrue([false, false, false, false])); //➞ 0

console.log(countTrue([])); //➞ 0







let arrtest = [1,2,3,4];

console.log(arrtest.splice(2));
console.log(arrtest);
