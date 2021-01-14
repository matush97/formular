

function vypocitajVek()
{
    console.log("ahoj");
    var age  = document.forms["Formular"]["vek"].value;
    var date = new Date(document.forms["Formular"]["bday"].value);
    var today = new Date();

    if((today.getFullYear() - date.getFullYear()) != age )
    {
        alert("Vek nesedí s dátumom narodenia!");
        return false;
    }
    else{
        return true;
    }
    
}

function ine(){
    var y = document.getElementById("checkbox4").checked;
    var div2 = document.getElementsByClassName("left");
    if(y==true){
        div2[0].style.display = 'block';
    }
    else{
        div2[0].style.display = 'none';	
    }
}

function prirad(s1, s2) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    s2.innerHTML= "";
   
    if (s1.value == "sever"){
        var optionArray = ["|", "finsko|Fínsko", "svedsko|Švédsko", "norsko|Nórsko"];
    }
    else if (s1.value == "stred"){
        var optionArray = ["|", "cesko|Česko", "sk|Slovensko", "polsko| Poľsko"];
    }
    else if (s1.value == "juh"){
        var optionArray = ["|", "it|Taliansko", "sp|Španielsko", "pr|Portugalsko"];
    }
    
    for(var i in optionArray){
        var pair = optionArray[i].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
    }
}

function prirad2(s2, s3){
    var s2 = document.getElementById(s2);
    var s3 = document.getElementById(s3);
    s3.innerHTML = "";
        
    if(s2.value == "finsko"){
        var optionArray = ["|", "finsko1|Oslo", "finsko2|Turku", "finsko3|Tampere"];
    }
    else if(s2.value == "svedsko"){
        var optionArray = ["|", "svedsko1|Stockholm", "svedsko2|Malmö", "svedsko3|Göteborg"];
    }
    else if(s2.value == "norsko"){
        var optionArray = ["|", "norsko1|Oslo", "norsko2|Bergen", "norsko3|Stavanger"];
    }
    else if(s2.value == "cesko"){
        var optionArray = ["|", "cesko1|Praha", "cesko2|Brno", "cesko3|Zlín"];
    }
    else if(s2.value == "sk"){
        var optionArray = ["|", "sk1|Bardejov", "sk2|Košice", "sk3|Poprad/Tatry"];
    }
    else if(s2.value == "polsko"){
        var optionArray = ["|", "polsko1|Varšava", "polsko2|Krakov", "polsko3|Zakopané"];
    }
    else if(s2.value == "it"){
        var optionArray = ["|", "it1|Rím", "it2|Florencia", "it3|Benátky"];
    }
    else if(s2.value == "sp"){
        var optionArray = ["|", "sp1|Madrid", "sp2|Barcelona", "sp3|Sevilla"];
    }
    else if(s2.value == "pr"){
        var optionArray = ["|", "pr1|Lisabon", "pr2|Porto", "pr3|Faro"];
    }
        
    for(var i in optionArray){
        var pair = optionArray[i].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s3.options.add(newOption);
    }
}






































// function zoznamy(){  
				
//     var selectedOption = document.getElementById('kont');
//     var htmlCollection = document.getElementsByTagName('select');
    
//     var arr = Array.from(htmlCollection);   
//     arr.shift();
    
//     if(document.getElementById("azia")){
//         selectedOption.onchange = function() {
//             document.getElementById(this.value).style.display = 'inline';
//             document.getElementById("europa").style.display = 'none';
//             document.getElementById("amerika").style.display = 'none';
//             document.getElementById('azia').removeAttribute('disabled');
//             document.getElementById('mesta').style.display = 'inline';
            
//         };
        
        
//         var selectedOption1 = document.getElementById("azia");
//         var vypisMiest1=document.getElementById("mesta");  
//         var zoznamMiest1=new Array()
//         zoznamMiest1["c"]=["Beijing","Hongkong","Wuham"] 
//         zoznamMiest1["r"]=["Moskva", "Petrohrad", "Kazaň"]
//         zoznamMiest1["j"]=["Tokio", "Nagoja"]
//         zoznamMiest1.forEach(function(item){ vypisMiest1.options[vypisMiest1.options.length]= new Option(item); });
        
//         selectedOption1.onchange = function() {
//             var thisArr = zoznamMiest1[selectedOption1.value];
//             console.log(thisArr);
//             vypisMiest1.style.display = 'inline';
//             vypisMiest1.options.length=0;
//             document.getElementById("mesta").removeAttribute('disabled');
//             thisArr.forEach(function(item){ vypisMiest1.options[vypisMiest1.options.length]= new Option(item); });
//         }; 
//     } else if(document.getElementById("europa")){
//         var selectedOption2 = document.getElementById('europa');
//         document.getElementById("azia").style.display = 'none';
//         document.getElementById("amerika").style.display = 'none';
//         var vypisMiest2=document.getElementById("mesta");  
//         document.getElementById("europa").removeAttribute('disabled');
//         document.getElementById("mesta").style.display = 'inline';

//         var selectedOption1 = document.getElementById("europa");
//         var vypisMiest2=document.getElementById("mesta"); 
//         var zoznamMiest2=new Array()
//         zoznamMiest2["sk"]=["Bratislava","Bardejov","Trnava"] 
//         zoznamMiest2["cz"]=["Brno", "Praha", "Zlín"]
//         zoznamMiest2["vb"]=["Londýn", "Manchester United"]
//         //zoznamMiest2["sk"].forEach(function(item){ vypisMiest2.options[vypisMiest2.options.length]= new Option(item);});
        
//         selectedOption2.onchange = function() {
//             var thisArr = zoznamMiest2[selectedOption2.value];
//             console.log(thisArr);
//             vypisMiest1.style.display = 'inline';
//             vypisMiest2.options.length=0;
//             document.getElementById("mesta").removeAttribute('disabled');
//             thisArr.forEach(function(item){ vypisMiest2.options[vypisMiest2.options.length]= new Option(item); });
//     }; 
//     } else if(document.getElementById("amerika")){
//         var selectedOption3 = document.getElementById('amerika');
//         document.getElementById("azia").style.display = 'none';
//         document.getElementById("europa").style.display = 'none';
//         document.getElementById('amerika').removeAttribute('disabled');
//         document.getElementById('mesta').style.display = 'inline';
//         var vypisMiest3=document.getElementById("mesta");  
//         var zoznamMiest3=new Array()
//         zoznamMiest3["cal"]=["LA","San Jose"] 
//         zoznamMiest3["oh"]=["Colombus", "Cleveland"]
//         //zoznamMiest2["sk"].forEach(function(item){ vypisMiest2.options[vypisMiest2.options.length]= new Option(item);});

//         selectedOption3.onchange = function() {
//             var thisArr = zoznamMiest3[selectedOption3.value];
//             console.log(thisArr);
//             //vypisMiest1.style.display = 'inline';
//             document.getElementById("mesta").removeAttribute('disabled');
//             vypisMiest3.options.length=0;
            
//             thisArr.forEach(function(item){ vypisMiest3.options[vypisMiest3.options.length]= new Option(item); });
//         };
//     }
    
    
 
//}	
