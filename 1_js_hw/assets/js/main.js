function yourName(){
    let your_name = prompt ("Enter your name");
    let rez = alert("Привет" + " " + your_name);
}


function yourAge() {
    let number =parseInt( prompt("Enter the year of birth"));
    const d = 2021;
    let rez = d - number;
    alert("Your age:" + " " + rez);
}

function yourAge1(){
    let number = parseInt(prompt("Enter your year birth"));
    const d = new Date();
    let rez = d.getFullYear() - number;
    alert("Your age:" + " " + rez);
}

function perimeterSquare() {
    let s = parseFloat(prompt("Enter value")),
    p = 4*s;
    alert("Perimeter of a square = " + p);
}

function ariaCircle() {
    let r =parseFloat(prompt("Enter value"));
    const PI = Math.PI;
    let s = PI * Math.pow(r, 2);
    alert("Area of a circle = " + s);

}

function speed(){
    let s = parseFloat(prompt("Enter distance in km")),
        t = parseInt(prompt("Enter time in hours")),
        v = s/t;
    alert("Required speed = " + v);
}

function currencyConverter(){
    let dollar =  parseFloat(prompt("Enter the amount in dollars"));
    const ratio = 0.83;
    let rez = dollar * ratio;
    alert("The amount in euros is " + rez );
}

function numberOfFiles(){
    let volume = parseFloat(prompt("Enter the size of the flash drive in GB")),
         volume_mb = volume * 1000;
    const volume_file = 820;
    let rez = Math.floor(volume_mb / volume_file);
    alert(rez);

}

function purchase(){
    let cash = parseFloat(prompt("Enter your cash")),
         unitPrice = parseFloat(prompt(" Enter unit price")),
         rez_shocolat = Math.floor(cash / unitPrice),
         the_remainder = cash % unitPrice;
    alert("You can buy " + rez_shocolat + " pieces." + "The rest of money = " + the_remainder.toFixed(2));
}

function reverseNumber(){
    let number =parseInt(prompt("Enter a three-digit number")),
         numeral_1 = number % 10,  //3
         numeral_2 = (number -  numeral_1)%100/10,  //2
         numeral_3 = (number -  numeral_1 - numeral_2 * 10) / 100,  //1
    rez = numeral_1 * 100 + numeral_2 * 10 + numeral_3;
    alert("Entered data "+ number +". "+ "Final data "+ rez);
}

function interest() {
    let contribution = parseFloat(prompt("Enter amount contribution"));
    const months = 2;
    const interest = 0.05;
    let rez = months * 0.05 /12 * contribution;
    alert("Interest amount: "+ rez.toFixed(2));
}


