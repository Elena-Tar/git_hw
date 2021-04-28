

    /*hw*/  // в калькуляторе сделать проверки
    function sum() {
        //  debugger;
        const s = parseInt(document.getElementById("start_number").value);
        const a = parseInt(document.getElementById("end_number").value);
        let sum =0;
        for( i=s; i<=a; i++){
             sum += i;
        }
        document.getElementById("sum_rez").innerText = sum;
    }

    function gcd() {
        //   debugger;
        let a = parseInt(document.getElementById("del_number1").value);
        let b = parseInt(document.getElementById("del_number2").value);
        let rez =0;
        while(a!=0 && b!=0){ 
            if(a>b){
                a = a%b;
            } else {
                b = b%a;
            }
            rez =(a+b);
        }    
        document.getElementById("del_rez").innerText = rez;
    }
    /*Запросить у пользователя число и вывести все делители этого числа.*/

    function dividers(){
        // debugger;
        let a = parseInt(document.getElementById("number").value);//4
        let rez='';
        for(let i=1; i<=a; i++){
            if(a%i==0){
                rez += i +", ";
                }  
        }
        document.getElementById("dividers_rez").innerText = rez;
    }
   /*Определить количество цифр в введенном числе.*/
    function numberOfDigits(){
        // debugger;
        let a = parseInt(document.getElementById("number-digits").value);
        let rez=0;
        let i=0;
        while(a!=0) {
            a =(a/10).toFixed(0);
            i++;
            rez = i;
        }        
        document.getElementById("numberOfDigits_rez").innerHTML = rez;
 }

 /*Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, 
 отрицательных и нулей. При этом также посчитать, сколько четных и нечетных.*/

 function question(){
    //  debugger;
    let rezpl=0;
    let rezmn=0;
    let rezzero=0;
    let even =0;
    let odd =0;
     for( let i=1; i<=10; i++){
         
        let n = parseInt(prompt("Enter the number"));

        if(n>0){
            rezpl =rezpl +1;
            if(n%2==0){
                even = even+1;
            } else{
                odd = odd+1;
            }
        }else if(n<0){
            rezmn =rezmn +1;
            if(n%2==0){
                even = even+1;
            } else{
                odd = odd+1;
            }
        } else if(n==0){
            rezzero = rezzero+1;
        } else if (isNaN(n)){
            alert ("Enter corect data");
            i--;
        }
     document.getElementById("rezpl_rez").innerHTML ="положительных" + rezpl;
     document.getElementById("rezmn_rez").innerHTML ="отрицательных" + rezmn;
     document.getElementById("rezzero_rez").innerHTML ="нулей" + rezzero;
     document.getElementById("even_rez").innerHTML ="четные" + even;
     document.getElementById("odd_rez").innerHTML ="нечетные" + odd;
    }
 }

/*Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, 
вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, 
пока пользователь не откажется.*/
 function calculator(){
    //  debugger;
    let rez;
    let d = true;
    do{   
        let a = parseInt(prompt("Enter the first number"));
        let b = parseInt(prompt("Enter the second number"));
        let n = prompt("Enter action");

        if (!isNaN(a) && !isNaN(a) && n=="+"){
            rez = a+b;
            alert("Ответ: "+rez);
        }else if(!isNaN(a) && !isNaN(a) && n=="-"){
            rez = a-b;
            alert("Ответ: "+rez);
        }else if(!isNaN(a) && !isNaN(a) && n=="*"){
            rez = a*b;
            alert("Ответ: "+rez);
        }else if(!isNaN(a) && !isNaN(a) && n=="/"){
            rez = a/b;
            alert("Ответ: "+rez);
        } else {
            alert("Enter corect date");
        }

        // question = parseInt(prompt("Хотите решить еще один пример? \r1.Да \r2.Нет"));
        // if(question==1){
        //     d=true;
        // } else if(question==2){
        //     d=false;
        // }

        question = confirm("Хотите решить еще один пример?");
        if(question===true){
            d=true;
        } else if(question ===false){
            d=false;
        }

   }while(d);
}

/*Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа
 и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).*/

function shiftNumber() {
        // debugger;
        let n = parseInt(document.getElementById("shift_number").value);
        let shift = parseInt(document.getElementById("shift_n").value);

        let numberDigits = 0;
        let i = 0;
        while(n!=0) {
            n =(n/10).toFixed(0);
            i++;
            numberDigits = i;
        }   
        n = parseInt(document.getElementById("shift_number").value);
        let k =(numberDigits-shift);
        let delitel = Math.pow(10, k);
        let sdvigaem =parseInt(n / delitel);
        let ostatoc = n%delitel;
        let rez = ostatoc *Math.pow(10,  shift) + sdvigaem;

        
        document.getElementById("shift_rez").innerHTML = rez;
    }

/*Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» 
и так до тех пор, пока пользователь нажимает OK.*/

function dayOfWeek(){
        debugger;
        let d = new Date();
        let rez = d.getDay();

        switch(rez){
            case 1:
                day = "Понедельник";
                break;
            case 2:
                day = "Вторник";
                break;
            case 3:
                day = "Среда";
                break;
            case 4:
                day = "Четверг";
                break;
            case 5:
                day = "Пятница";
                break;
            case 6:
                day = "Суббота";
                break;
            case 7:
                day = "Воскресение";
                break;
            default:
                day="И что тут писать? нужен он здесь?";
                break;
        }
        alert("сeгодня: "+ day);

        let question = confirm("Хотите увидеть следующий день?");
        while( question===true){
            rez = rez + 1;
            let day="";
            if(rez>=0 && rez<=7){
                switch(rez){
                    case 1:
                        day = "Понедельник";
                        break;
                    case 2:
                        day = "Вторник";
                        break;
                    case 3:
                        day = "Среда";
                        break;
                    case 4:
                        day = "Четверг";
                        break;
                    case 5:
                        day = "Пятница";
                        break;
                    case 6:
                        day = "Суббота";
                        break;
                    case 7:
                        day = "Воскресение";
                        break;
                    default:
                        day="И что тут писать? нужен он здесь?";
                        break;
                }
                alert("следующий: "+ day);
                question = confirm("Хотите увидеть следующий день?");
            } else if(rez>8){
                rez=1;
                alert("следующий: Понедельник");
                question = confirm("Хотите увидеть следующий день?");
            }
        }
    }

/*Вывести таблицу умножения для всех чисел от 2 до 9. 
Каждое число необходимо умножить на числа от 1 до 10.*/
function multiplicationTable(){
    let res;
    let output;
    for (let i=1; i<=10; i++){
        for(let j =1; j<=10; j++){
            res=i*j;
            console.log(i +" *", j+" =" , res);     //почему так выводится
            // document.getElementById("multiplicationTable_rez").innerHTML = i +" *",  j+" =",  res;  // а так нет((
        }
    }
}
 /*Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его 
 следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат 
 в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того что 
 указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам 
 и получили 50. Если пользователь указал, что его число > 50, то изменили*/ 
    
function guess(){
            // debugger; 
            let itog =true;
            let start =0;
            let finish =100;
           
            alert("Guess a number from 1 to 100");
           
                let  n = (finish - start)/2;
                let question = parseInt(prompt("Выберите правильный ответ \r1.Ваше число равно " +n +"\r2. Ваше число меньше чем  "+n+ "\r3.Ваше число больше чем" +n));
            do{
                if(question==2){  
                    finish=n;
                    n = parseInt((finish - start)/2);
                    question = parseInt(prompt("Выберите правильный ответ \r1.Ваше число равно " +n +"\r2. Ваше число меньше чем  "+n+ "\r3.Ваше число больше чем" +n));
                    itog=false;
                }else if(question==3){   
                    start=n;
                    n=parseInt((finish - start)/2 + start);
                    question = parseInt(prompt("Выберите правильный ответ \r1.Ваше число равно " +n +"\r2. Ваше число меньше чем  "+n+ "\r3.Ваше число больше чем" +n));
                    itog=false;
                } else  if(question==1){
                    alert("Отлично");
                    itog=true;
                }

            }while(!itog===true);
}

