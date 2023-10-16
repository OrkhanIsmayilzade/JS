// n sayda tam ədəddən ibarət massiv verilmişdir. Massivin ən böyük elementlərinin sayını tapın.

const number=[1,2,3,7,4,2,7]
let max=number[0]
let counter=0

for(i=0;i<number.length;i++){
    if(number[i]>max){
        max=number[i];
    }
}

for(i=0;i<number.length;i++){
    if(number[i]==max){
        counter++
    }
}

console.log(max);
console.log(counter);