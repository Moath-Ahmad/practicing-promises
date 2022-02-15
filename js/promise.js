let stocks = {
    Fruits: ['Strawberry', 'Grapes', 'Banana', 'Apple'],
    Liquid: ['Water', 'Ice'],
    Holder: ['Cone', 'Cup', 'Stick'],
    Toppings: ['Chocolate', 'Peanuts']
}

let isShopOpen = true;

let order = (time, work) => {
    return new Promise((resolved, reject) => {
        if (isShopOpen) {
            setTimeout(() => {
                resolved(work());
            }, time);
        }
        else {
            reject(console.log('Our shop is closed'))
        }
    });
}

order(2000, () => console.log(`${stocks.Fruits[0]} was seleceted`))
    .then(() => {
        return order(0000, () => console.log('Production has been started'))
    })

    .then(() => {
        return order(2000, () => console.log(`${stocks.Fruits[0]} was cutting`))
    })

    .then(() => {
        return order(1000, () => console.log(`The ${stocks.Liquid[0]} and ${stocks.Liquid[1]} has been added`))
    })

    .then(() => {
        return order(1000, () => console.log('The machine has been started'));
    })

    .then(() => {
        return order(2000, () => console.log(`${stocks.Holder[0]} has been selected`))
    })

    .then(() => {
        return order(3000, () => console.log(`${stocks.Toppings[1]} has been selected`))
    })

    .then(() => {
        return order(2000, () => console.log("The ice-cream has been served"))
    })
    .catch(() => {
        return console.log('The customer left');
    })
    .finally(() => {
        console.log('Day ended, shop is closed');
    });



