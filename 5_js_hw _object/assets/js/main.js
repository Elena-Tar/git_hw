
let auto = {
    Manufacturer: "Audi",
    Model: "A5",
    "Year of issue": 2020,
    "Average speed": 100,
    inform_car() {
        let rez = "<ul>";
        for (let k in auto) {
            if (typeof auto[k] !== "function") {
                rez += `<li>${k}: ${auto[k]}</li>`;
                // h +="<li>"+k+": "+auto[k]+"</li>"; //одно и тоже
            }
        }
        rez += "</ul>";
        document.getElementById("inform_car_rez").innerHTML = rez;
    },
    time() {
        let km = (document.getElementById("distance").value !== "") ? parseFloat(document.getElementById("distance").value) : 0;
        let travel_time = km / auto["Average speed"];
        let h = 0;
        while (travel_time >= 4) {
            travel_time = travel_time - 4;
            h++;
        }
        let rez = km / auto["Average speed"] + h;
        document.getElementById("time_rez").innerHTML = rez;
    }
};


/*2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 

Функция сложения 2-х объектов-дробей;

Функция вычитания 2-х объектов-дробей;

Функция умножения 2-х объектов-дробей;

Функция деления 2-х объектов-дробей;

Функция сокращения объекта-дроби.*/
let drob = {
    d1: {
        c: 12,
        z: 4
    },
    d2: {
        c: 3,
        z: 5
    },
    summ(a, b) {
        // debugger;
        let rez = {
            c: 0,
            z: 0
        }
        if (this.d1.z === this.d2.z) {
            rez.c = this.d1.c + this.d2.c;
            rez.z = this.d1.z;
        } else if (this.d1.z !== this.d2.z) {
            rez.c = (this.d1.c * this.d2.z + this.d1.z * this.d2.c);
            rez.z = (this.d1.z * this.d2.z);
        }
        return this.reduce(rez);
    },
    subtraction(a, b) {
        let rez = {
            c: 0,
            z: 0
        }
        if (this.d1.z === this.d2.z) {
            rez.c = this.d1.c - this.d2.c;
            rez.z = this.d1.z;
        } else if (this.d1.z !== this.d2.z) {
            rez.c = (this.d1.c * this.d2.z - this.d1.z * this.d2.c);
            rez.z = (this.d1.z * this.d2.z);
        }
        return this.reduce(rez);
    },
    multiplication(a, b) {
        let rez = {
            c: 0,
            z: 0
        }
        rez.c = this.d1.c * this.d2.c;
        rez.z = this.d1.z * this.d2.z;
        return this.reduce(rez);
    },
    division(a, b) {
        let rez = {
            c: 0,
            z: 0
        }
        rez.c = this.d1.c * this.d2.z;
        rez.z = this.d1.z * this.d2.c;
        return this.reduce(rez);
    },
    reduce(obj) {
        // debugger;
        let gcd = function gcd(a, b) {
            let rez_gcd = 0;
            while (a != 0 && b != 0) {
                if (a > b) {
                    a = a % b;
                } else {
                    b = b % a;
                }
                rez_gcd = (a + b);
            }
            return rez_gcd;
        }
        let rez = gcd(obj.c, obj.z);
        return [obj.c / rez, obj.z / rez];
    }
}
/*ответы к 2й задаче*/
// console.log( drob.summ(drob.d1, drob.d2));
// console.log( drob.subtraction(drob.d1, drob.d2));
// console.log( drob.multiplication(drob.d1, drob.d2));
// console.log( drob.division(drob.d1, drob.d2));
// console.log(drob.reduce(drob.d1));







/*3 задача*/
$(function () {
    $('#data_time_input').mask('99:99:99');
})
$(function () {
    $('#change_time_input').mask('99:99:99');
})

let objTime = {
    h: 0,
    m: 0,
    s: 0,
    get(k) {
        return this[k];
    },
    set(k, newTime) {

        this[k] = newTime;
    },

    data_time() {
        let t = document.getElementById("data_time_input").value;
        let tArr = t.split(":");
        let h_new = parseInt(tArr[0]);
        let m_new = parseInt(tArr[1]);
        let s_new = parseInt(tArr[2]);

        objTime.set(["h"], h_new);          //зачем ему кавычки????????
        objTime.set(["m"], m_new);
        objTime.set(["s"], s_new);
        let rez = addZero(this.get("h")) + ":" + addZero(this.get("m")) + ":" + addZero(this.get("s"));
        document.getElementById("data_time_rez").innerHTML = rez;
    },
    data_time1(elem) {
        let arrt = elem.split(":");
        let h = parseInt(arrt[0]);
        let m = parseInt(arrt[1]);
        let s = parseInt(arrt[2]);
        if (h >= 0 && m >= 0 && s >= 0) {
            rez_s = time_covertor(h, m, s);  //получили секунды изменяемого времени
        } else {
            alert("Enter correct data");
        }
        return rez_s;
    },
    data_time_change() {
        debugger;
        let a = document.getElementById("data_time_input").value;
        let num1 = objTime.data_time1(a);
        let b = document.getElementById("change_time_input").value;
        let num2 = objTime.data_time1(b);
        let summ_s = num1 + num2;
        let norm_t = getTime(summ_s);   // получили норм время 
        let normArr = norm_t.split(":");
        let h_new = parseInt(normArr[0]);
        let m_new = parseInt(normArr[1]);
        let s_new = parseInt(normArr[2]);

        objTime.set(["h"], h_new);
        objTime.set(["m"], m_new);
        objTime.set(["s"], s_new);
        let rez = addZero(this.get("h")) + ":" + addZero(this.get("m")) + ":" + addZero(this.get("s"));
        document.getElementById("change_time_rez").innerHTML = rez;
    }

}


// console.log(objTime.get("h"));
// console.log(objTime["m"]);
// console.log(objTime["s"]);

function addZero(n) {
    return (n < 10) ? "0" + n : n;
}

/*Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.*/

function time_covertor(a = 0, b = 0, c = 0) {
    let rez = 0;
    if (a > 0) {
        a = (a * 60 * 60);
    }
    if (b > 0) {
        b = b * 60;
    }
    rez = a + b + c;
    return rez;
}

/*9. Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».*/

function getTime(s) {
    let m = 0;
    let h = 0;
    let rez = "";
    if (s > 59) {
        m = Math.floor(s / 60);
        s = s % 60;
        if (m > 59) {
            h = Math.floor(m / 60);
            m = m % 60;
        }
    }
    rez = addZero(h) + ":" + addZero(m) + ":" + addZero(s);
    return rez;
}









