let text = document.createElement('div');
document.body.prepend(text);
text.setAttribute('style', 'border: 1px solid red; height:60px; width:500px');
text.innerText = "Чтобы редактировать текст нажмите Ctrl + e ; Чтобы сохранить Ctrl + s";
let textAr = document.createElement('textarea');
document.body.prepend(textAr);
textAr.setAttribute('style', 'display:none');



document.addEventListener("keydown", function (e) {
    console.log(e);
    if (e.ctrlKey == true && e.key == "e") {
        e.preventDefault();
        // alert('not allowed');
        text.setAttribute('style', 'display:none');
        textAr.setAttribute('style', 'display:block');
        textAr.innerText = text.innerText;
    }
    if (e.ctrlKey == true && e.key == "s") {
        e.preventDefault();
        // alert('not allowed');
        textAr.setAttribute('style', 'display:none');
        text.setAttribute('style', 'display:block');
        text.innerText = textAr.value;
    }
}, false);



/*3я*/

let text_div = document.getElementById("div_text");
let arrow = document.getElementById("arrow");
arrow.addEventListener('mousedown', go_start);
document.body.addEventListener('mousemove', go_end);
let w;
let h;
let width;
let height;
let width_n;
let height_n;
let flag = false;

function go_start(event) {
    w = event.clientX;
    h = event.clientY;
    width = window.getComputedStyle(text_div, "").width;
    height = window.getComputedStyle(text_div, "").height;
    flag = true;
}
function go_end(event) {
    if (flag == true) {
        text_div.style.width = (parseInt(width) + (event.clientX - w)) + 'px';
        text_div.style.height = (parseInt(height) + (event.clientY - h)) + 'px';
    }
}

document.body.addEventListener('mouseup', go_end1);

function go_end1() {
    flag = false;
}


/*2я*/

let tbl = document.getElementById("tbl");

tbl.querySelectorAll("th").forEach((th) => {
    th.addEventListener('click', function (e) {
        // console.log(e);
        const ind = e.target.cellIndex;
        // console.log(ind);
        // console.log(th);
        sortTable(th, ind);
    })
})
let sorted = true;

function sortTable(th, ind) {
    // debugger;
    let dir = "asc"; // чтобы сортировать в обе стороны
    if (th.dataset.order) {
        dir = th.dataset.order;
    }

    let rows = tbl.querySelectorAll("tbody>tr");
    // console.log(rows);
    sorted = true;
    let change_order = true;
    let a, b;
    let change_i;
    let tbody = tbl.querySelector("tbody");
    // console.log(tbody);
    while (sorted) {
        sorted = false;
        change_order = false;
        rows = tbl.querySelectorAll("tbody>tr");
        for (let i = 0; i < rows.length - 1; i++) {
            a = rows[i].children[ind].innerText;
            b = rows[i + 1].children[ind].innerText;
            // console.log(a, b);
            if (dir === "asc") {
                if (!isNaN(parseInt(a)) && parseInt(a) == a) {
                    if (parseInt(a) > parseInt(b)) {
                        change_order = true;
                        change_i = i;
                        // console.log(change_i);
                        break;
                    }
                } else {
                    if (/^[0-9]{2}.[0-9]{2}.[0-9]{4}?$/.test(a)) {
                        a = date2ts(a);
                        b = date2ts(b);
                        if (parseInt(a) > parseInt(b)) {
                            change_order = true;
                            change_i = i;
                        }
                    } else {
                        if (a > b) {
                            change_order = true;
                            change_i = i;
                            break;
                        }
                    }
                }

            } else {
                if (!isNaN(parseInt(a)) && parseInt(a) == a) {
                    if (parseInt(a) < parseInt(b)) {
                        change_order = true;
                        change_i = i;
                        break;
                    }
                } else {
                    if (/^[0-9]{2}.[0-9]{2}.[0-9]{4}?$/.test(a)) {
                        a = date2ts(a);
                        b = date2ts(b);
                        if (parseInt(a) < parseInt(b)) {
                            change_order = true;
                            change_i = i;
                        }
                    } else {
                        if (a < b) {
                            change_order = true;
                            change_i = i;
                            break;
                        }
                    }
                }
            }

        }
        if (change_order) {
            // console.log(change_i);
            tbody.insertBefore(rows[change_i + 1], rows[change_i]);
            sorted = true;
        }
    }
    th.dataset.order = (dir === "asc") ? "desc" : "asc";
}


function date2ts(date) {
    const [day, month, year] = date.split('.');
    // console.log(new Date(year + '-' + month + '-' + day).getTime());
    return new Date(year + '-' + month + '-' + day).getTime();
}

// console.log(new Date(2020 - 07 - 12))
























// let allTR = document.getElementsByTagName("tr");
// // console.log(allTR);
// let btn_age = document.getElementById("s_age");
// btn_age.addEventListener('click', func1);
// let x;
// let y;
// let a = false;

// function func1() {
//     for (let i = 1; i < allTR.length - 1; i++) {
//         // console.log(allTR);
//         console.log(allTR[1]);
//         x = allTR[i].getElementsByTagName("TD")[4];
//         y = allTR[i + 1].getElementsByTagName("TD")[4];
//         if (parseInt(x.innerText) > parseInt(y.innerHTML)) {
//             allTR[i].parentNode.insertBefore(allTR[i + 1], allTR[i]);
//         }
//     }
// }
// let btn_s_ln = document.getElementById("s_ln");
// btn_s_ln.addEventListener('click', func2);
// let arr_ln = [];
// function func2() {
//     for (let i = 1; i < allTR.length - 1; i++) {
//         // console.log(allTR);
//         // console.log(allTR[1]);
//         x = allTR[i].getElementsByTagName("TD")[2];
//         y = allTR[i + 1].getElementsByTagName("TD")[2];
//         if (x.innerText > y.innerHTML) {
//             allTR[i].parentNode.insertBefore(allTR[i + 1], allTR[i]);
//         }
//     }
// }


// // let allTH = document.getElementsByTagName("th");
// for (let j = 1; j < allTH.length - 1; j++) {
//     // console.log(allTH);
//     allTH[j].addEventListener('click', func2);
//     function func2() {
//         for (let i = 1; i < allTR.length - 1; i++) {
//             // console.log(allTR);
//             // console.log(allTR[1]);
//             x = allTR[i].getElementsByTagName("TD")[j];
//             console.log(j);
//             y = allTR[i + 1].getElementsByTagName("TD")[j];
//             if (parseInt(x.innerText) > parseInt(y.innerHTML) || x.innerText >= y.innerHTML) {
//                 allTR[i].parentNode.insertBefore(allTR[i + 1], allTR[i]);
//             }
//         }
//     }
// }
// console.log(x.innerText);
