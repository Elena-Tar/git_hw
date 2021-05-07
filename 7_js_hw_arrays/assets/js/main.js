let grocery_list = [
    {
        "product_name": "milk",
        "bought": true,
        "count": 1
    },
    {
        "product_name": "bread",
        "bought": false,
        "count": 2
    },
    {
        "product_name": "water",
        "bought": true,
        "count": 30
    },
];

/*1.1*/
grocery_list.sort(
    function (a, b) {
        if (a["bought"] !== true) {
            return 1;
        } return -1;
    });
// console.log(grocery_list);


/*1.2*/
function add(obj, arr) {
    // debugger;
    let obj_in_arr = arr.find(element => element["product_name"] == obj["product_name"]);
    if (obj_in_arr) {
        obj_in_arr["count"] += obj["count"];
        console.log(arr);
    } else {
        arr.push(obj);
        console.log(arr);
    }
}

// add({
//     "product_name": "sok",
//     "bought": true,
//     "count": 2
// }, grocery_list);

// add({
//     "product_name": "milk",
//     "bought": true,
//     "count": 1
// }, grocery_list);


// /*Покупка продукта. Функция принимает название продукта и отмечает его как купленный.*/
// /*найти продукт*/

function product(a, arr) {
    // debugger;
    let obj_in_arr = arr.find(element => element["product_name"] == a);
    if (obj_in_arr) {
        obj_in_arr["bought"] = false;
    }
    console.log(arr);
}

// product("milk", grocery_list);

let receipt = [
    {
        "product name": "bread",
        "quantity": 2,
        "prices": 30.30
    },
    {
        "product name": "wine",
        "quantity": 2,
        "prices": 300
    },
    {
        "product name": "water",
        "quantity": 2,
        "prices": 24.80
    }
];

function print() {
    // debugger;
    for (let i in receipt) {
        // console.log(i);
        for (key in receipt[i]) {
            console.log(key + ":" + receipt[i][key] + ",");
        }
    }
}
//  print();

function summ() {
    // debugger;
    let res = 0;
    for (let i in receipt) {
        res += parseFloat(receipt[i]["prices"]);
    }
    console.log(res);
}
// summ();

function expensive() {
    // debugger;
    let res = 0;
    let newArr = [];
    for (let i in receipt) {
        res = (parseFloat(receipt[i]["prices"]));
        newArr.push(res);
        newArr.sort();
        console.log(newArr[newArr.length - 1]);
    }

}

// expensive();


function average_cost(arr) {
    // debugger;
    let res = 0;
    for (let i in arr) {
        res += parseFloat(arr[i]["prices"]);
    }
    return res;
}

// console.log(average_cost(receipt));
// console.log(receipt.length);

function cost() {
    debugger;
    let res = average_cost(receipt) / parseFloat(receipt.length);
    console.log(res.toFixed(2));
}
// cost();

let arrStyle = [
    {
        "name_style": "color",
        "value_style": "red"
    },
    {
        "name_style": "font-size",
        "value_style": 30
    },
    {
        "name_style": "text-align",
        "value_style": "center"
    },
    {
        "name_style": "text-decoration",
        "value_style": "underline"
    }
];



function myStyle(arr, text) {
    let res = [];
    for (let i in arr) {
        // console.log(i);
        for (key in arr[i]) {
            res.push(arr[i][key]);
        }
    }
    let sv1 = res.slice(0, 2);
    let sv2 = res.slice(2, 4);
    let sv3 = res.slice(4, 6);
    let sv4 = res.slice(6, 8);
    sv1.join(":");

    document.write(`<p style="${sv1.join(":")};${sv2.join(":")};${sv3.join(":")};${sv4.join(":")}; ">${text}</p>`)
}

let mytext = "lalalalaala";
// myStyle(arrStyle, mytext);
