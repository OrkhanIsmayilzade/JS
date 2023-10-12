//Verilmiş 3 ədəddən ən böyüyü və ən kiçiyinin ədədi ortasını qaytaran alqoritm yazın.


a=15
b=7
c=18


if((a>b && a>c && c>b) || (b>a && b>c && c>a ) ){
    console.log((a+b)/2);
}
else if((b>a && b>c && a>c) || (c>a && c>b && a>b)){
    console.log((b+c)/2);
}
else if((a>b && a>c && b>c) || (c>a && c>b && b>c)){
    console.log((a+c)/2);
}
else if((a==b && c>b && c>a) || () )









// if(a>b && a>c && b>c){
//     console.log((a+c)/2);
// }

// else if(b>a && b>c && a>c){
//     console.log((b+c)/2);
// }
// else if(a>b && a>c && c>b){
//     console.log((a+b)/2);
// }
// else if(c>a && c>b && b>a){
//     console.log((a+b)/2);
// }
// else{
//     console.log("false");
// }


// if(a>b && a>c){
//     a==max
//     if(b>c){
//         c==min
//     }
//     else if(b<c){
//         b==min
//     }
    
// }
// else if(b>a && b>c){
//     b==max
//     if(a>c){
//         c==min
//     }
//     else if(a<c){
//         a==min
//     }
// }
// else if(c>a && c>b){
//     c==max
//     if(a>b){
//         b==min
//     }
//     else if(a<b){
//         a==min
//     }
//    console.log((max + min)%2);
// }


