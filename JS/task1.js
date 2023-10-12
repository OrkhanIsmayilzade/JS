// Verilmiş 3 rəqəmli ədədin bütün mərtəbələrinin bir-birindən fərqli olub olmadığını tapan alqoritmi yazın(Məsələn: input 223, output "bütün rəqəmlər ferqli deyil " (false) ).

let a=111



x=parseInt(a/100)

y=parseInt((a/10)%10)

z=a%10
console.log(z);

if(x==y && y==z && x==z){
    console.log("Ferqli deyil");
}
else{
    console.log("Ferqlidir");
}
