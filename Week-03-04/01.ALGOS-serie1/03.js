function minMax(arr){
    if(!arr[0]){return;}

    let max = arr[0];
    let min = arr[0];

    arr.forEach(element => {
        if(element > max)
        {
            max = element;
        }

        if(element < min)
        {
            min = element;
        }
    });

    return [min, max];
}

console.log(minMax([541,5]));