//n tam ədəddən ibarət massiv proqramın girişinə tərs ardıcıllıqla verilmişdir - yəni sonuncudan birinci elementə qədər. Bu massivin ilkin vəziyyətini bərpa edin.

const numbers=[6, 0 ,-7, 2 ,-3, 5, 7]
const newarray=[]
let i

for(i=numbers.length-1;i>=0;i--){
    newarray.push(numbers[i]);
}

console.log(newarray);