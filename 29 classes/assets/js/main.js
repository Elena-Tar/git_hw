// /*домашка*/
class Circle {
    constructor(options) {
        this.radius = options.radius;
    }
    get radiusInfo() {
        return this.radius;
    }
    set radiusInfo(newRadius) {
        this.radius = newRadius;
    }

    get diameterInfo() {
        let d = (2 * this.radius).toFixed(2);
        // document.write(`<p> диаметр: ${d}</p>`);
        return d;
    }

    ariaCircle() {
        let s = (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
        // document.write(`<p>площадь: ${s}</p>`);
        return s;
    }
    circumference() {
        let P = (2 * Math.PI * this.radius).toFixed(2);
        // document.write(`<p>длину окружности: ${P}</p>`);
        return P;
    }
}

const r1 = new Circle({
    radius: 6
});
// console.log(r1);
// console.log(r1.diameterInfo);
// console.log(r1.ariaCircle());
// console.log(r1.circumference());


let res1_1 = document.getElementById('res_radius');
res1_1.innerHTML = "Радиус окружности равен: " + r1.radius;

let res1_2 = document.getElementById('res_diameter');
res1_2.innerHTML = "Диаметр окружности равен: " + r1.diameterInfo;

let res1_3 = document.getElementById('res_aria');
res1_3.innerHTML = "Площадь окружности равна: " + r1.ariaCircle();

let res1_4 = document.getElementById('res_circumference');
res1_4.innerHTML = "Длина окружности равна " + r1.circumference();





const WORKERS = [
    {
        name: "Vasya1",
        position: "cashier",
        experience: 2
    },
    {
        name: "Vasya2",
        position: "administrator",
        experience: 4
    },
    {
        name: "Vasya3",
        position: "manager",
        experience: 8
    },
];

workers = new EmpTable(WORKERS);
workers.getHTML(document.getElementById("list_of_employees_res"));





class Marker {
    constructor(options) {
        this.color = options.color;
        this.quantity = options.quantity;
    }
    print(text) {
        let style = `color: ${this.color}`;
        let d = document.getElementById('res_text2');
        d.innerHTML = (`<p style="${style}">${text}</p>`)
    }
    color_text(text) {
        // debugger;
        let style = `color: ${this.color}`;
        let a = this.quantity;
        let str = "";
        for (let i = 0; i < text.length; i++) {
            if (a !== 0) {
                if (text[i] !== " ") {
                    a = a - 0.5;
                }
                str += text[i];
            } else {

                alert("Чернила закончились! Заправьте маркер!");
                break;
            }
        }
        this.print(str)
    }
}


const blueText = new Marker({
    color: "blue",
    quantity: 2
});


function go_marker() {
    debugger;
    let text_1 = document.getElementById('text').value;
    if (text_1 !== "") {
        blueText.color_text(text_1);
        let btn = document.getElementById('btn-c')
        btn.classList.add('close');

    } else {
        alert("Введите текст");
    }

}



class Fill_marker extends Marker {
    fill() {
        this.quantity += 10;
        console.log(this.quantity);
    }
}


let redText = new Fill_marker({
    color: "blue",
    quantity: 2
});


function fill_m() {
    debugger;
    let text_1 = document.getElementById('text').value;
    redText.fill(10);
    redText.color_text(text_1);
}




















// blueText.fill()


// blueText.color_text('a bb0000');







// function fill_marker() {
//     debugger;
//     let text_1 = document.getElementById('text').value;
//     blueText.fill(30);
//     blueText.color_text(text_1);
// }

// // blueText.fill();




// color_text(text) {
//     // debugger;
//     let style = `color: ${this.color}`;
//     let a = this.quantity;
//     let str = "";
//     for (let i = 0; i < text.length; i++) {
//         if (a !== 0) {
//             if (text[i] !== " ") {
//                 a = a - 1;
//             }
//             str += text[i];
//             // document.write(`<p style="${style}">${str}</p>`);
//             // this.print(text)
//             // console.log(str);
//         } else {

//             alert("Заправьте маркер");
//             break;
//         }
//     }
//     this.print(str)
// }
















