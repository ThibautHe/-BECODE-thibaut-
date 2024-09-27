function toArray(obj)
{
    let keys = Object.keys(obj);

    return keys.map((key) => ([key,obj[key]]));
}


console.log(toArray({ a: 1, b: 2 })); //➞ [["a", 1], ["b", 2]]

console.log(toArray({ shrimp: 15, tots: 12 })); //➞ [["shrimp", 15], ["tots", 12]]

console.log(toArray({})); //➞ []