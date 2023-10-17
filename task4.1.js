// Array-də(minimum 5 element olsun) cüt ədədlərlə tək ədədlərin fərqini tapan algorithmi qurun;

const numbers = [1, 2, 3, 4, 5]

sum1 = 0 // tek ededlerin cemi
sum2 = 0 //cut ededlerin cemi


function myfunction() {

    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 1) {
            sum1 = sum1 + numbers[i]
        }
        else {
            sum2 = sum2 + numbers[i]
        }
    }

    console.log(sum2 - sum1);
}

myfunction()