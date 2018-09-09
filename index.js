// write your code below!
function happyHolidays(){
  return "Happy holidays!";
}

function happyHolidaysTo(name){
  return `"Happy holidays ${name}!`;
}

function happyHolidayTo(holiday, name){
  return `"Happy" ${holiday} ${name}!`;
  
}

function holidayCountdown(holiday, days){
  
  
}


today=new Date();
var thanksGiving=new Date(today.getFullYear(), 11, 22);
if (today.getMonth()==11 && today.getDate()>22)
{
thanksGiving.setFullYear(thanksGiving.getFullYear()+1);
}
var one_day=1000*60*60*24;
console.log(Math.ceil(thanksGiving.getTime()-today.getTime())/(one_day))+
" days left until ThanksGiving!");
}





//today=new Date();
//var cmas=new Date(today.getFullYear(), 11, 25);
//if (today.getMonth()==11 && today.getDate()>25) 
//{
//cmas.setFullYear(cmas.getFullYear()+1); 
//}  
//var one_day=1000*60*60*24;
//console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
//" days left until Christmas!");