//Verilmiş sətirdə birinci və sonuncu boşluq işarəsinin indekslərini çap edin. Nəzərə alın ki, sətrin ilk simvolunun indeksi 0-dan başlayır.

function myfunction(text) {
    let first = text.indexOf(" ");
    let last = text.lastIndexOf(" ");

    console.log(first);
    console.log(last);

}

myfunction("I am programming on Python.")