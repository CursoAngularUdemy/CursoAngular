var num1 = 10;
let num2 = 20;

console.log(num1);
console.log(num2);


function variables(){
    var num3 = 30;

    if (num3 > 10)
    {
        let  num4 = 4;  // Esta variable solo sera visible dentro de IF
        console.log (num4) 
    }
    console.log(num3);
    console.log(num4);
}
 
variables();