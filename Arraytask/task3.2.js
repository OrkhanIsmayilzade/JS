//N sayda tam ədədlərdən ibarət massiv verilir. Bu massivin ən kiçik və ən böyük elementlərindən başqa bütün elementlərinin cəmini tapın.

const number=[6,2,7,1,7,1,2]
let i

let max=number[0]
let min=number[0]

sum=0


for (i = 0; i < number.length; i++) {
    if(number[i]>max){
        max=number[i];
    }
    
}

for( i = 0; i < number.length; i++){
    if(number[i]<min){
        min=number[i];
    }
}

console.log(max);
console.log(min);

for( i = 0; i < number.length; i++){
    if(number[i] !=max && number[i] !=min){
        sum=sum+number[i]
    }
}

console.log(sum);