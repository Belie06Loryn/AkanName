// male akan name Array
var men =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
// female akan name Array
var female=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
// days of Week Array
var days =["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];
// months Array
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  function gender(v){
    var MM = parseFloat(days.bday.mm.value);
  var DD = parseFloat(days.bday.dd.value);
  var YY = parseFloat(days.bday.yy.value);
  var CC = parseFloat(yy-1)/100+1;
  var day =(((cc/4)-2*cc-1) + ((5*yy/4))+((26*(mm+1)/10))+ dd) % 7;
  alert(Math.round(day));
  days.da.value = da[day]
  //..value = bday[MM/DD/YY]
  }
