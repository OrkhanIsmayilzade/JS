//    if n =5 number=2 the series will become 2 + 22 + 222 + 2222 + 22222 = 24690

let n 
n=parseInt(prompt("Reqemi daxil edin"))
x=parseInt(prompt("Ikinci ededi daxil edin")) 
// x----- ededin nece defe tekrarlanmasi
cem=0
let eded=0

for(i=0;i<x;i++){
    eded= eded+ (n*(10**i))
    cem=cem+eded
    console.log(eded);
}

console.log(cem);