
let counter=0
let n
function myfunction(n) {
    for (let i = 1; i <= n; i++) {
        if ((n % i == parseInt(n / i))) {
            counter++
            console.log(i);
        }
    }

    console.log("Bolenlerinsayi :",counter);
}

myfunction(20)

