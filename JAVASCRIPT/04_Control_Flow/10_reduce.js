// >>>> Reduce --> Using Shopping Card etc..  <<<<

// const mynums=[1,2,3]

// const myTotal=mynums.reduce( function (acc,currVal) {
//     console.log(`Acc: ${acc} and CurrVal: ${currVal}`)
//     return acc + currVal
// },0)

// const myTotal=mynums.reduce( (acc, currVal) => acc + currVal,0)

// console.log(myTotal)


const shoppingCart=[
    {
        itemName: 'js cource',
        price: 2999
    },
    {
        itemName: 'py cource',
        price: 1999
    },
    {
        itemName: 'mobile Dev cource',
        price: 5999
    },
    {
        itemName: 'React cource',
        price: 999
    },
    {
        itemName: ' Data scice cource',
        price: 12999
    },
]

const TotalShoppingPrice=shoppingCart.reduce( (acc, item) => acc+item.price,0)

console.log(TotalShoppingPrice)