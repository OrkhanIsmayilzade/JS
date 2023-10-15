// Ədədin tək rəqəmlərinin hasili
// Natural n ədədinin tək rəqəmlərinin hasilini tapın.
// Ədədin tək rəqəmlərinin hasilini çap edin. Belə rəqəmlər yoxdursa -1 çap edin.

n=2648
hasil=1


while(n>0){

   reqem= n%10
   if(reqem%2==1){

    hasil=hasil*reqem

   }
   n=parseInt(n/10)
}

if(hasil>1){
    console.log(hasil);
}
else{
    console.log(-1);
}





