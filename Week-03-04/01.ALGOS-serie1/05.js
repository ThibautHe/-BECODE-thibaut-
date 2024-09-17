const drinks = [
    {name: "lemonade", price: 10},
    {name: "lime", price: 10},
    {name: "coke", price: 8},
    {name: "vodka", price: 17},
    {name: "water", price: 3},
  ]

function sortDrinkByPrice(arr)
{
    return arr.sort((a,b) => {return a.price - b.price;});
}

console.log(sortDrinkByPrice(drinks));