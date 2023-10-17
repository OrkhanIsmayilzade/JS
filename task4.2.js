//Array-də(minimum 5 element olsun) 3 rəqəmli ədədlərlə digər ədədlər arasındakı fərqi tapan algorithmi qurun;

const numbers = [1, 234, 54, 245, 2312]

sum1 = 0
sum2 = 0

function myfunction() {
    for (i = 0; i < numbers.length; i++) {

        if ((numbers[i] /100) > 1 && (numbers[i]/100) < 10) {
            sum1 = sum1 + numbers[i]
        }
        else {
            sum2 = sum2 + numbers[i]
        }

        
    }

    console.log(sum1 - sum2);
}

myfunction()