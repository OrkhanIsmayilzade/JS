//Verilmiş hesabi ifadədə toplama (+), çıxma (-) və vurma (*) əməllərinin ümumi sayını müəyyənləşdirin.


let i
let counter=0

function myfunction(ifade) {
    for (i = 0; i < ifade.length; i++) {
        if (ifade[i] === "+" || ifade[i] === "-" || ifade[i] === "*") {
            counter++;
        }
    }
    
    if(ifade[0] === "-"){
        counter-1
    }

    console.log(counter);
}

myfunction("-1+2*3+a");