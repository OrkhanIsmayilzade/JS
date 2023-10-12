// İlin fəsilləri Mürəkkəb şərtdən istifadə edərək verilmiş ayın nömrəsinə görə ilin fəslini müəyyənləşdirin.

a=8


if(a<3 ||a==12){
    console.log("winter");
}
else if(a>=3 && a<6){
    console.log("spring");
}
else if(a>=6 && a<9){
    console.log("sumer");
}
else if(a>=9 && a<12){
    console.log("autumn");
}
else{
    console.log('Ay sehv daxil edilib');
}
