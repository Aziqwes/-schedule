function Spoiler() {
	var ele = document.getElementById("contentSpoiler");
	var text = document.getElementById("linkSpoiler");
	if(ele.style.display == "block") {
    		ele.style.display = "none";
		text.innerHTML = "Понедельник";
  	}
	else {
		ele.style.display = "block";
		text.innerHTML = "Скрыть";
	}
}
var d = new Date();
        theDay=d.getDay();  
        var table_1="Расписание на monday!";  
        var table_2="Расписание на Tuesday!";  
        var table_3="Расписание на Wednesday!";  
        var table_4="Расписание на Thursday!";  
        var table_5="Расписание на Friday!";  
        var table_6="Расписание на Saturday!";    
        switch (theDay)
        {
        case 1:
            document.getElementById("output").innerHTML=table_1;
          
        case 2:
            document.getElementById("output").innerHTML=table_2;
          
            break;
        case 3:
            document.getElementById("output").innerHTML=table_3;
          
            
            break;
        case 4:
            document.getElementById("output").innerHTML=table_4;
            break;
        case 5:
            document.getElementById("output").innerHTML=table_5;
          
         break;
        case 6:
            document.getElementById("output").innerHTML=table_6;
          
         break;
        case 0:
         
         break;
        default:
         document.write("<b>oops...</b>");
        }  


