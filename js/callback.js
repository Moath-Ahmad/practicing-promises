//Using calling back
let stocks = {
    Fruits: ['Strawberry', 'Grapes', 'Banana', 'Apple'],
    Liquid: ['Water', 'Ice'],
    Holder: ['Cone', 'Cup', 'Stick'],
    Toppings: ['Chocolate', 'Peanuts']
}


let order = (fruit_name, call_production) => {

    setTimeout(() => {
        console.log(`${stocks.Fruits[fruit_name]} is selected`);
        call_production();
    }, 2000);

};

let production = () => {
    setTimeout(() => {
        console.log('Order has been received, the productions will be started');

        setTimeout(() => {
            console.log("The selected fruit is in cutting process");

            setTimeout(() => {
                console.log("Adding the water and the ice");

                setTimeout(() => {
                    console.log('The machine has been started');

                    setTimeout(() => {
                        console.log(`${stocks.Holder[0]}, has been choosed. We are going to product it`);

                        setTimeout(() => {
                            console.log(`${stocks.Toppings[0]} will be the topping of the ice-cream.`);

                            setTimeout(() => {
                                console.log('The ice-cream has been servied to the customer.');

                            }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000)
            }, 1000);
        }, 2000);
    }, 0000);

};

order(0, production);
