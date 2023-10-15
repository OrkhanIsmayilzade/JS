// Natural n ədədi verilmişdir. n-dən kiçik olan bütün natural tək ədədləri artma ardıcıllığında çap edin.

n=25
let reqem= new Array();

for(let i=1;i<n;i++){
    if(i%2==1){
        reqem.push(i)
        // console.log(String(i));
        
    }

}
console.log(reqem);

