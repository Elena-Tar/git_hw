/*домашка*/
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
        document.write(`<p> диаметр: ${d}</p>`);
        return d;
    }

    ariaCircle() {
        let s = (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
        document.write(`<p>площадь: ${s}</p>`);
        return s;
    }
    circumference() {
        let P = (2 * Math.PI * this.radius).toFixed(2);
        document.write(`<p>длину окружности: ${P}</p>`);
        return P;
    }
}

const r1 = new Circle({
    radius: 6
});
console.log(r1);
console.log(r1.diameterInfo);
console.log(r1.ariaCircle());
console.log(r1.circumference());


class Marker {
    constructor(options) {
        this.color = options.color;
        this.quantity = options.quantity;
    }
    print(text) {
        let style = `color: ${this.color}`;
        document.write(`<p style="${style}">${text}</p>`);
    }
    color_text(text) {
        // debugger;
        let style = `color: ${this.color}`;
        let a = this.quantity / 100;
        let res_text = 0;
        for (let i = a; i > 0; i = i - 0.05) {
            res_text++;
            console.log(res_text);
        }
        if (text.length <= res_text) {
            let res = text;
            document.write(`<span style="${style}"> ${res} <span>`);
        } else if (text.length > res_text) {
            let res1 = text.substr(0, res_text);
            console.log(res1);
            let res2 = text.substr(res_text);
            document.write(`<span style="${style}">${res1}</span><span >${res2} </span>`);
        }
    }
}

const blueText = new Marker({
    color: "red",
    quantity: 100
});

blueText.color_text("Д лДлДлДлДлДллДлДлДлДлДллДлДлДлДлДллДлДлДлДлДллДлДлДлДлДллДлДлДлДлДл");


// class Refueling extends Marker {
//     constructor(options) {
//         super(options);
//     }
//     go_marker() {
//         this.quantity = 10;
//     }
// }



