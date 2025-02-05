console.log('script start');


function p28ex14(num) {
    num = num.toString()
    let newNumber = num.split('').reverse().join('');
    newNumber = Number(newNumber)
    return (`the new number is ${newNumber}`);
}
 let result = p28ex14(255) 
 console.log( result)


function p29ex26(num1, num2) {
    let min= Math.min( num1, num2)
    let max = Math.max ( num1, num2)
    
    for( let i = min; i <= max; i++)
        console.log(i);
    
}  
 p29ex26(1,5) 

function p29ex27 (num1, num2){
    let min= Math.min( num1, num2)
    let max = Math.max ( num1, num2)
    for( let i= min; i<= max; i++)
        console.log( i)
    for( let i =max; i>= min; i--)
       console.log(i)
}
p29ex27(1,5)








console.log('scirpt end')