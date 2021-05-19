
let age_elems = document.getElementsByClassName("age");
let age_arrItem = [];
let btn_age = document.getElementById("s_age");
btn_age.addEventListener('click', func1);

function func1() {

    for (let i = 0; i < age_elems.length; i++) {
        age_arrItem[i] = parseInt(age_elems[i].innerHTML);
    }
    console.log(age_arrItem);
    let newAge_arrItem = age_arrItem.sort(function (a, b) {
        return a - b;
    });
    console.log(newAge_arrItem);
    for (let i = 0; i < age_elems.length; i++) {
        age_elems[i].innerHTML = newAge_arrItem[i];
    }
}

let first_name_elems = document.getElementsByClassName("first_name");
let first_name_arrItem = [];
let btn_first_name = document.getElementById("s_first_name");
btn_first_name.addEventListener('click', func2);

function func2() {
    for (let i = 0; i < first_name_elems.length; i++) {
        first_name_arrItem[i] = first_name_elems[i].innerHTML;
    }
    let newFirst_name_arrItem = first_name_arrItem.sort();
    for (let i = 0; i < first_name_elems.length; i++) {
        first_name_elems[i].innerHTML = first_name_arrItem[i];
    }
}

let last_name_elems = document.getElementsByClassName("last_name");
let last_name_arrItem = [];
let btn_last_name = document.getElementById("s_last_name");
btn_last_name.addEventListener('click', func3);

function func3() {
    for (let i = 0; i < last_name_elems.length; i++) {
        last_name_arrItem[i] = last_name_elems[i].innerHTML;
    }
    let newLast_name_arrItem = last_name_arrItem.sort();
    for (let i = 0; i < last_name_elems.length; i++) {
        last_name_elems[i].innerHTML = newLast_name_arrItem[i];
    }
}

let patronymic_elems = document.getElementsByClassName("patronymic");
let patronymic_arrItem = [];
let btn_patronymic = document.getElementById("s_patronymic");
btn_patronymic.addEventListener('click', func4);

function func4() {
    for (let i = 0; i < patronymic_elems.length; i++) {
        patronymic_arrItem[i] = patronymic_elems[i].innerHTML;
    }
    let newPatronymic_arrItem = patronymic_arrItem.sort();
    console.log(newPatronymic_arrItem);
    for (let i = 0; i < patronymic_elems.length; i++) {
        patronymic_elems[i].innerHTML = newPatronymic_arrItem[i];
    }
}

let date_elems = document.getElementsByClassName("date_of_hiring");
let dateS = [];
let date_arrItem = [];
let esho_odin = [];

let btn_date = document.getElementById("s_date");
btn_date.addEventListener('click', func5);

function func5() {
    for (let i = 0; i < date_elems.length; i++) {
        // console.log(date_elems[i].innerHTML);
        dateS[i] = new Date(date_elems[i].innerHTML);
        date_arrItem[i] = dateS[i].getTime();
        // console.log(date_arrItem);
        // date_arrItem[i] = date_elems[i].innerHTML;
        // console.log(date_arrItem);
    }
    let newDate_arrItem = date_arrItem.sort(function (a, b) {
        return a - b;
    });
    for (let i = 0; i < date_elems.length; i++) {
        // date_elems[i].innerHTML = newDate_arrItem[i];
        // console.log(newDate_arrItem[i]);
        esho_odin[i] = new Date(newDate_arrItem[i]);
        // console.log(esho_odin);
        date_elems[i].innerHTML = addZero(esho_odin[i].getDate()) + "." + addZero((esho_odin[i].getMonth() + 1)) + "." + esho_odin[i].getFullYear();
    }

}

function addZero(n) {
    return (n < 10) ? "0" + n : n;
}


let t = new Date(1436302800000);
let y = t.getFullYear();
let m = t.getMonth() + 1;
let d = t.getDate()
console.log(y);
console.log(m);
console.log(d);





























































