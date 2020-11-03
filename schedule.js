var d = new Date();
theDay=d.getDay();
switch (theDay)
{
case 1:
 document.write("<b>Здесь должно быть расписание на ПОНЕДЕЛЬНИК</b>");
 break;
case 2:
 document.write("<b>Здесь должно быть расписание на ВТОРНИК</b>");
 break;
case 3:
 document.write("<b>Здесь должно быть расписание на СРЕДУ</b>");
 break;
case 4:
 document.write("<b>Здесь должно быть расписание на ЧЕТВЕРГ</b>");
 break;
case 5:
 document.write("<b>Здесь должно быть расписание на ПЯТНИЦУ</b>");
 break;
case 6:
 document.write("<b>Здесь должно быть расписание на СУББОТУ</b>");
 break;
case 0:
 document.write("<b>Сегодня выходной!</b>");
 break;
default:
 document.write("<b>oops...</b>");