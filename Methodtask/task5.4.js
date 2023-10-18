//Mətnlərin emalına aid sadə məsələlərdən biri sətirdəki hər bir sözün birinci hərfini baş hərfə çevirməkdir. 
//Bir və ya bir neçə boşluqla ayrılmış kiçik hərflərdən ibarət sətir
//verilmişdir. Eyni sətri, hər sözün birinci hərfini baş hərfə çevirərək çap edin.


function myfunction(text) {
    const myArr = text.split(" ");
    for (var i = 0; i < myArr.length; i++) {
      myArr[i] = myArr[i].charAt(0).toUpperCase() + myArr[i].slice(1);
    }

    var up=myArr.join(" ")
    console.log(up);

    
  }

  myfunction("hello world");


