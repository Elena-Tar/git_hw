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


function go_start(event) {
    w = event.clientX;
    h = event.clientY;
    width = window.getComputedStyle(text_div, "").width;
    height = window.getComputedStyle(text_div, "").height;
    isDrawing = true;
    // console.log(w);
    // console.log(h);
    // console.log(width);
    // console.log(height);
}
function go_end(event) {

    text_div.style.width = (parseInt(width) + (event.clientX - w)) + 'px';
    text_div.style.height = (parseInt(height) + (event.clientY - h)) + 'px';

    // console.log(width);
    // console.log(w);
    // console.log(event.clientX)
    // console.log(event.clientY)
}

document.body.addEventListener('mouseup', go_end1);

function go_end1() {
    document.body.off() //горшочек не вари 
}










/*2я*/

let allTR = document.getElementsByTagName("tr");
// console.log(allTR);
let btn_age = document.getElementById("s_age");
btn_age.addEventListener('click', func1);
let x;
let y;
let a = false;

function func1() {
    for (let i = 1; i < allTR.length - 1; i++) {
        // console.log(allTR);
        console.log(allTR[1]);
        x = allTR[i].getElementsByTagName("TD")[4];
        y = allTR[i + 1].getElementsByTagName("TD")[4];
        if (parseInt(x.innerText) > parseInt(y.innerHTML)) {
            allTR[i].parentNode.insertBefore(allTR[i + 1], allTR[i]);
        }
    }
}
let btn_s_ln = document.getElementById("s_ln");
btn_s_ln.addEventListener('click', func2);
let arr_ln = [];
function func2() {
    for (let i = 1; i < allTR.length - 1; i++) {
        // console.log(allTR);
        // console.log(allTR[1]);
        x = allTR[i].getElementsByTagName("TD")[2];
        y = allTR[i + 1].getElementsByTagName("TD")[2];
        if (x.innerText > y.innerHTML) {
            allTR[i].parentNode.insertBefore(allTR[i + 1], allTR[i]);
        }
    }
}


// let allTH = document.getElementsByTagName("th");
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
