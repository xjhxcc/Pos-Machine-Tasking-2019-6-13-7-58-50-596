const main = require('../main');
const isBarcodesValid = main.isBarcodesValid;
const getFoodItemsByInputBarcodes= main.getFoodItemsByInputBarcodes;
const combineFoodItem=main.combineFoodItem;
const printReceiptsByBarcodes=main.printReceiptsByBarcodes;
const baseData=[
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
    ]

it ('should return true when call isBarcodesValid', () => {
    expect(isBarcodesValid(baseData,['0012', '0003', '0005', '0003'])).toBe("error");
});

it ('should return true when call getFoodItemsByInputBarcodes', () => {
    expect(getFoodItemsByInputBarcodes(baseData,['0001', '0003', '0003', '0005'])).toEqual(
        [{"id": "0001", "name" : "Coca Cola", "price": 3},
        {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
        {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
        {"id": "0005", "name" : "Dr Pepper", "price": 7}]
    );
});

it ('should return true when call combineFoodItem', () => {
    expect(combineFoodItem(baseData,['0001', '0003', '0003', '0005'])).toEqual(
        [{"id": "0001", "name" : "Coca Cola", "price": 3,"number":1},
        {"id": "0003", "name" : "Pepsi-Cola", "price": 5,"number":2},
        {"id": "0003", "name" : "Pepsi-Cola", "price": 5,"number":2},
        {"id": "0005", "name" : "Dr Pepper", "price": 7,"number":1}]
    );
});


