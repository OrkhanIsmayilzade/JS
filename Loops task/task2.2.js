//  Reverse a given integer number


let num =765432
let firstnum = num%10


    secondnum = parseInt((num/10)%10);
    thirdnum = parseInt((num/100)%10);
    forthnum= parseInt((num/1000)%10);
    fifth= parseInt((num/10000)%10);
    sixth = parseInt(num/100000);



reversum = firstnum*100000 +  secondnum*10000 + thirdnum*1000 + forthnum*100 + fifth*10 + sixth

console.log(reversum);


