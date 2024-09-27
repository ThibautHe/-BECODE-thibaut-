function fibonacci(n)
{
    let result = [1,1]
    for (let i = 0; i < n-2; i++) {
        result.push(result[result.length-1] + result[i])
    }
    return result
}


console.log(fibonacci(4)) //----> [1, 1, 2, 3]
console.log(fibonacci(9)) //----> [1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibonacci(6)) //----> [1, 1, 2, 3, 5, 8]