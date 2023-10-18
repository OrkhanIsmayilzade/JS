//let numbers = [1.5, 2.56, 5.1, 12.33];

// butun regemlerini yuvarlaqlashdirin

let yuvarlaq=[]
let i
let numbers = [1.5, 2.56, 5.1, 12.33];
for(i=0;i<numbers.length;i++){
    yuvarlaq.push(Math.round(numbers[i]))
}
console.log(yuvarlaq);