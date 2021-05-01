/*Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе;
 1 – если первое больше, чем второе; и 0 – если числа равны.*/
function comparison_2_numbers(a,b){
    if (a<b){
        return -1;
    } else if(a>b){
        return 1;
    } else if (a===b){
        return 0;
    }
}

function takesValues_compare(){
    debugger;
    let num1 = parseInt(document.getElementById("number1").value);
    let num2 = parseInt(document.getElementById("number2").value);
    let rez = document.getElementById("compare_rez").innerHTML = comparison_2_numbers(num1, num2);
}


/*Написать функцию, которая вычисляет факториал переданного ей числа.*/  //сделать кнопку
function getFactorial(n){
    // debugger
    let rez=1;
    for( i=1; i<=n; i++){
        rez =rez * i;
    }
    return rez;
}
// alert(getFactorial(4));

function factorial(){
    debugger;
    let num1 = parseInt(document.getElementById("factorial_number1").value);
    let rez = getFactorial(num1);
    document.getElementById("factorial_rez").innerHTML = rez;
}


/*Написать функцию, которая принимает три отдельные цифры и превращает их в одно число.
 Например: цифры 1, 4, 9 превратятся в число 149.*/
 function create(a,b,d){
    return a*100 + b*10 +d;
 }

 function createNumber(){
    //  debugger;
     let num1 = parseInt(document.getElementById("convert_number1").value);
     let num2 = parseInt(document.getElementById("convert_number2").value);
     let num3 = parseInt(document.getElementById("convert_number3").value);
     let rez = document.getElementById("convert_rez").innerHTML = create(num1, num2, num3);
 }

 
/*Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь.
 Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.*/

 function get_areaRectangle(a, b=0){
    //  debugger;
     if(b===0){
         return a*a;
     } else{
        return a*b;  
     }
       
 }
// alert(get_areaRectangle(3));

function areaRectangle(){
    // debugger;
    let num1 = parseInt(document.getElementById("side_of_the_rectangle1").value);
    let num2 = parseInt(document.getElementById("side_of_the_rectangle2").value);
    let rez = get_areaRectangle(num1, num2=0);
    document.getElementById("areaRectangle_rez").innerHTML = rez;
}

/*Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.*/


function perfect_number_check(n){ // проверка на совершенство
    // debugger;
    let sum=0;
    for(i=1; i<=n; i++){
        if(n%i==0){
            sum+=i;
          
        }
    }
    if((sum - n) === n){
        return true;
    } else {
        return false;
    }
}

// alert(perfect_number_check(6));

function perfect_number(){
    // debugger;
    let rez;
    let num1= parseInt(document.getElementById("perfect_number1").value);
    if(perfect_number_check(num1)===true){
        rez = "совершенное";
    } else{
        rez = "несовершенное";
    }
    document.getElementById("perfect_number_rez").innerHTML = rez;
}


/*Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит 
только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.*/

function range_number(){
    // debugger;
    let num1= parseInt(document.getElementById("range_number1").value);
    let num2= parseInt(document.getElementById("range_number2").value);
    let rez="";
    for (i=num1; i<num2; i++){
        if(perfect_number_check(i)===true){
           rez += ((i-1)+",");
        }
    }
    document.getElementById("range_rez").innerHTML = rez;
}

/*Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.*/

function addZero(n){
    return(n<10)?"0"+n:n;
}

// $(function () {
//     $('#h_number').mask('00:00:00')
// })


function time_number1(h=0, m=0, s=0){
    return  addZero(h)+":"+addZero(m)+":"+addZero(s);
}

//  alert(time_number1(2,3));

function time_number(){
    debugger;
    let h_num =parseInt(document.getElementById("h_number").value) || 0;
    let m_num =parseInt(document.getElementById("m_number").value) || 0;
    let s_num =parseInt(document.getElementById("s_number").value) || 0;
    let rez = time_number1(h_num, m_num, s_num);
    document.getElementById("time_rez").innerHTML = rez;
}


/*Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.*/

function time_covertor(a=0, b=0, c=0){
    let rez=0;
    if  (a>0){
        a = (a*60*60);
    }
     if (b>0){
        b = b*60;
    }
    rez = a + b +c;
    return rez;
}

// alert(time_covertor(2,10,10));

function time_sec_converter_number(){
    // debugger;
    let h_num =parseInt(document.getElementById("h_time").value);
    let m_num =parseInt(document.getElementById("m_time").value);
    let s_num =parseInt(document.getElementById("s_time").value);
    let rez=0;
    rez = time_covertor(h_num, m_num, s_num);
    document.getElementById("time_sec_converter_rez").innerHTML = rez;
}

/*9. Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».*/

function getTime(s){
    let m=0;
    let h=0;
    let rez="";
 if (s>59){
    m = Math.floor(s/60);
    s = s % 60;
    if (m>59){
    h = Math.floor(m/60);
    m =  m % 60; 
    }    
 }
 rez = addZero(h) +":"+addZero(m)+":"+addZero(s);
 return rez;
}

// alert(getTime(7810));
// alert(getTime(0));


function get_time_from_seconds() {
    debugger;
    let s =parseInt(document.getElementById("second_time").value);
    let rez = getTime(s);
    document.getElementById("time_from_seconds_rez").innerHTML = rez;
}


/*Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». 
При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс».*/
function module(a){
    if(a>0){
        return a;
    } else if (a<0){
        return a*(-1);
    } else if(a===0){
        return 0;
    }
}
// alert(module(0));


$(function () {
    $('.date').mask('99:99:99');
})

function date(){
debugger;
    let num1 = document.getElementById("date_number1").value;
    let num2 = document.getElementById("date_number2").value;
    let num1_arr = num1.split(':');
    let num2_arr = num2.split(':');
    let rez1_sec = time_covertor(parseInt(num1_arr[0]), parseInt(num1_arr[1]), parseInt(num1_arr[2]));
    let rez2_sec = time_covertor(parseInt(num2_arr[0]), parseInt(num2_arr[1]), parseInt(num2_arr[2]));
    let rez =getTime(module(rez1_sec - rez2_sec));
    document.getElementById("date_rez").innerHTML = rez;
}
