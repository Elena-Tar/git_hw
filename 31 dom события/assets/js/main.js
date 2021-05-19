
let age_elems = document.getElementsByClassName("age");
let age_arrItem = [];
let btn_age = document.getElementById("s_age");
btn_age.addEventListener('click', func1);

function func1() {

    for (let i = 0; i < age_elems.length; i++) {
        age_arrItem[i] = age_elems[i].innerHTML;
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






























































