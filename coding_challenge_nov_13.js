
const MAX_ITEMS_PER_ORDER = 5;

let availablePastries = [{
    id: "f9b14810-a76b-4ed2-8d85-ef39e4248252",
    name: "chocolate chip cookie",
    flourConsumption: 5.625,
    price: .25,
    customerLimit: 60
}, {
    id: "d2f6a076-451b-442f-bd37-e2ea2ffdfec8",
    name: "cherry pie",
    flourConsumption: 325,
    price: 22,
    customerLimit: 2
}, {
    id: "8e9d9c50-4382-45b7-91ad-600eb7db0270",
    name: "pumpkin pie",
    flourConsumption: 300,
    price: 17,
    customerLimit: 2
}, {
    id: "11d3fab4-574f-436c-8afc-ffb836f1df5f",
    name: "pumpkin chocolate chip cookies",
    flourConsumption: 5.8,
    price: .3,
    customerLimit: 60
}, {
    id: "fe4f6b97-c627-45f8-850d-ef0c504f57b5",
    name: "apple pie bars",
    flourConsumption: 16.66,
    price: .8,
    customerLimit: 2
}, {
    id: "a0140a96-2791-4726-989a-b488eb0b608a",
    name: "pumpkin pie cupcakes",
    flourConsumption: 14.22,
    price: 4,
    customerLimit: 20
}, {
    id: "c63c13c0-1778-44ec-b8f3-052b2ce3924f",
    name: "pecan pie",
    flourConsumption: 325,
    price: 24,
    customerLimit: 2
}, {
    id: "41a9bd04-cac4-45f6-833b-39c6c16c6625",
    name: "apple pie",
    flourConsumption: 325,
    price: 19,
    customerLimit: 2
}];

const getRandomPastry = () => availablePastries[Math.floor(Math.random() * availablePastries.length)];

const getXRandomPastries = (quantity) => {

    let pastries = [];

    while (quantity > 0) {
        pastries.push(getRandomPastry());
        quantity--;
    }

    return pastries;
};


const createRandomOrder = () => {

    let numberOfPastries = Math.round(Math.random() * MAX_ITEMS_PER_ORDER);
    let selectedPastries = getXRandomPastries(numberOfPastries);

    return selectedPastries.map(pastry => ({
        quantity: Math.floor(Math.random() * pastry.customerLimit) + 1,
        ...pastry
    }));
}

const createXRandomOrder = (quantity) => {

    let orders = [];

    while (quantity > 0) {
        orders.push(createRandomOrder());
        quantity--;
    }

    return orders;
}

console.log(JSON.stringify(createXRandomOrder(1000)));