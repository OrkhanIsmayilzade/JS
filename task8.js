//bir emeliyyat qebul edin
// idi eded qeubul edin
// userin daxil etdiyi emeliyyat uzre outputu ekranda gostersin


let a=parseInt(prompt("Birinci ededi daxil edin :"))
let b=parseInt(prompt("Ikinci ededi daxil edin :"))

let value=parseInt(prompt("Emeliyyati daxil edin : 1-toplama 2- cixma 3- vurma 4 - bolme"))
// if(value ==1){
//    cavab = parseInt(a) + parseInt(b)
//    prompt(cavab)
// }

switch(value){
    case 1: console.log(a + b);
    case 2: console.log(a-b);
    case 3: console.log(a*b);
    case 4: console.log(a/b);
    
}
