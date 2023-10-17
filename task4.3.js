//İki massiv verilib. Birinci massivin o elementlərini çap edin ki, qiymətləri ikinci massivdə olmasın (elementlərin ardıcıllığı birinci massivdəki kimi çap edilməlidir).

const numbers1 = [1, 2, 3, 4, 5]
const numbers2 = [1, 3, 5]


for (i = 0; i < numbers1.length; i++){
    
    if (numbers1[i] == numbers2[i]) {
        numbers1.pop(numbers1[i])
    }

}
console.log(numbers1);