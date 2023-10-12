// Verilmiş A, B, C ededlerinden en böyük olanı ekrana çıxardan algoritmi yazin (Məsələn: input 5, 8, 2 olarsa 8-i ekrana çıxartmalıdır )

let A = 7
let B = 9
let C = 3

if(A>B && A>C){
    console.log("En boyuk eded :" ,A);
}

else if(B>A && B>C){
    console.log("En boyuk eded :" ,B);
}
else if(C>A && C>B){
    console.log("En boyuk eded :" ,C);
}