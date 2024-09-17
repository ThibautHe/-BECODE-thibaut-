const addUp = (num) => {
    let count = 0
    for (let i = 4; i > 0; i--) {
       count += i;
    }
    return count;
}

console.log(addUp(4));