function frames(min,frames)
{
    return min * frames * 60
}

console.log(frames(1, 1)); //➞ 60

console.log(frames(10, 1)); //➞ 600

console.log(frames(10, 25)); //➞ 15000