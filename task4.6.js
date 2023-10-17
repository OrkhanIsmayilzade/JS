//İki massiv verilib. Birinci massivin o elementlərini çap edin ki, qiymətləri ikinci massivdə olmasın (elementlərin ardıcıllığı birinci massivdəki kimi çap edilməlidir).

function myfunction(arr1, arr2) {
    const result = [];

    for (let i = 0; i < arr1.length; i++) {
        let check = false;

        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                check = true;
                break;
            }
        }

        if (!check) {
            result.push(arr1[i]);
        }
    }

    return result;
}

firstarr = [1, 3, 5, 7]
secondarr = [2, 3, 4, 5]
const uptadearr =  myfunction(firstarr, secondarr);
console.log(uptadearr);