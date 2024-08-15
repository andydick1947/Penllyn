let person=["0", "0", "0", "0", "0"];
let membership=[

["1","Jackie", "Archer","jacquelinearcher@btinternet.com" , "01446 781060"],
["2", "Norma", "Barber", "normskib2@gmail.com", "01656652965"],
["7", "Janet", "Booth", "janlesboo@yahoo.co.uk", "01446 773594"],
["9", "Sally", "Bryant", "auntiesal@hotmail.co.uk", "07519 591432"],
["10", "Lynva", "Chamberlain", "lynvachamberlain@gmail.com", "01446 772148"],
["11", "Andrea", "Clowes", "andreaclowes@btinternet.com", "01446 772680"],
["12", "John", "Clowes", "", "01446 772680"],
["14", "Ireen", "Daniels", "daniels168@btinternet.com", "01446 773428"],
["15", "Richard", "Daniels", "daniels168@btinternet.com", "01446 773428"],
["17", "Andy", "Dick", "ardick2000@gmail.com", "07548748264"],
    
["18", "Marian", "East", "eastmarian@yahoo.co.uk", "01656 880756"],
["19", "Lou", "Edwards", "lou.millhouse@talk21.com", "01656 890505"],
["20", "Phil", "Edwards", "lou.millhouse@talk21.com", "01656 890505"],
["21", "Allan", "Evans", "allan.evans1@sky.com", "01656766967"],
["22", "Julie", "Evans", "juliecevans@hotmail.com", "01656 861396"],
["23", "Simon", "Farrington", "fivefarringtons@hotmail.com", "07748 321001"],
["25", "Jane", "Frampton", "hamstonjane@hotmail.co.uk", "01446775826"],
["26", "Myrtle", "Hansard", " ", "01446 773704"],
["27", "Gill", "Harding", "gillharding@aol.co.uk", "01446 774494"],
["34", "Jo", "Ilsley", "josephineilsley@talktalk.net", "01446 773123"],
    
["36", "Penny", "Jarvis", "ppjarvis@ymail.com", "01446 773140"],
["43", "Sally", "Kennedy", "dalekennedy80@gmail.com", "01446 773936"],
["44", "Sue", "Knight", "sknight@tythegston.com", "01446 771012"],
["47", "Diana", "Lewis", "dianaspencerlewis@btinternet.com", "01446 772278"],
["51", "John", "Lord", "johnlord@btinternet.com", "01446 775108"],
["55", "Cath", "Mathias", "cmathias36@outlook.com", "01446 772660"],
["56", "Mandy", "Meier", "meier.karenya@gmail.com ", "01446 773382"],
["57", "Ann", "Miller", "j.miller317@btinternet.com", "01446 772067"],
["58", "Colin", "Nunn", "colinnunn409@gmail.com", "01446 774585"],

["59", "Judith", "Nunn", "nunnjudith@yahoo.com", "01446 774585"],
["60", "Helen", "Owen", "hen45@outlook.com", "01656 785763"],
["64", "Ann", "Richards", "marlfrich@btinternet.com", "01446 734973"],
["40", "AnnD", "Richards", "coan.richards@gmail.com", "0"],
["66", "Frances", "Robertson", "frandon12002@yahoo.co.uk", "01656 772154"],
["67", "Trish", "Roe", "patricia.roe1945@gmail.com", "01446 771867"],
["68", "Helen", "Ruttley", "helenruttley@gmail.com", "01446 772598"],
["69", "Mike", "Ruttley", "michaelruttley@sky.com", "01446 772598"],
["77", "Mary", "Wallis", "mary.hedgerow33@gmail.com", "01446 773447"],
["79", "Dorothy", "Williams", "dotandesgadlys@talktalk.net", "07912640212"],

["80", "Rita", "Williams", "ritamjenkins@yahoo.co.uk", "01656 654152"]
]
function myCalc(lbl){
    for (let i=0; i<=(membership.length-1); i++){      
    if (lbl==membership[i][1].concat(" ",membership[i][2])){
    person=membership[i];}
    }
return person;  
}

function togglePopup(){

    document.getElementById("titl").innerHTML = person[1].concat(" ",person[2]);
    document.getElementById("mailE").innerHTML = person[3];
    document.getElementById("teleNum").innerHTML = person[4];
    document.getElementById("bridgeNumb").innerHTML = "Bridge ID "+ person[0];
    document.getElementById("popup-1") .classList.toggle("active");

}

const btn1=document.getElementById("btn1");
btn1.addEventListener("click",function(e){   
myCalc(btn1.innerText);
togglePopup();
});
const btn2=document.getElementById("btn2");
btn2.addEventListener("click",function(e){   
myCalc(btn2.innerText);
togglePopup();
});
const btn3=document.getElementById("btn3");
btn3.addEventListener("click",function(e){   
myCalc(btn3.innerText);
togglePopup();
});
const btn4=document.getElementById("btn4");
btn4.addEventListener("click",function(e){   
myCalc(btn4.innerText);
togglePopup();
});
const btn5=document.getElementById("btn5");
btn5.addEventListener("click",function(e){   
myCalc(btn5.innerText);
togglePopup();
});
const btn6=document.getElementById("btn6");
btn6.addEventListener("click",function(e){   
myCalc(btn6.innerText);
togglePopup();
});
const btn7=document.getElementById("btn7");
btn7.addEventListener("click",function(e){   
myCalc(btn7.innerText);
togglePopup();
});
const btn8=document.getElementById("btn8");
btn8.addEventListener("click",function(e){   
myCalc(btn8.innerText);
togglePopup();
});
const btn9=document.getElementById("btn9");
btn9.addEventListener("click",function(e){   
myCalc(btn9.innerText);
togglePopup();
});
const btn10=document.getElementById("btn10");
btn10.addEventListener("click",function(e){   
myCalc(btn10.innerText);
togglePopup();
});
const btn11=document.getElementById("btn11");
btn11.addEventListener("click",function(e){   
myCalc(btn11.innerText);
togglePopup();
});
const btn12=document.getElementById("btn12");
btn12.addEventListener("click",function(e){   
myCalc(btn12.innerText);
togglePopup();
});
const btn13=document.getElementById("btn13");
btn13.addEventListener("click",function(e){   
myCalc(btn13.innerText);
togglePopup();
});
const btn14=document.getElementById("btn14");
btn14.addEventListener("click",function(e){   
myCalc(btn14.innerText);
togglePopup();
});
const btn15=document.getElementById("btn15");
btn15.addEventListener("click",function(e){   
myCalc(btn15.innerText);
togglePopup();
});
const btn16=document.getElementById("btn16");
btn16.addEventListener("click",function(e){   
myCalc(btn16.innerText);
togglePopup();
});
const btn17=document.getElementById("btn17");
btn17.addEventListener("click",function(e){   
myCalc(btn17.innerText);
togglePopup();
});
const btn18=document.getElementById("btn18");
btn18.addEventListener("click",function(e){   
myCalc(btn18.innerText);
togglePopup();
});
const btn19=document.getElementById("btn19");
btn19.addEventListener("click",function(e){   
myCalc(btn19.innerText);
togglePopup();
});
const btn20=document.getElementById("btn20");
btn20.addEventListener("click",function(e){   
myCalc(btn20.innerText);
togglePopup();
});
const btn21=document.getElementById("btn21");
btn21.addEventListener("click",function(e){   
myCalc(btn21.innerText);
togglePopup();
});
const btn22=document.getElementById("btn22");
btn22.addEventListener("click",function(e){   
myCalc(btn22.innerText);
togglePopup();
});
const btn23=document.getElementById("btn23");
btn23.addEventListener("click",function(e){   
myCalc(btn23.innerText);
togglePopup();
});
const btn24=document.getElementById("btn24");
btn24.addEventListener("click",function(e){   
myCalc(btn24.innerText);
togglePopup();
});
const btn25=document.getElementById("btn25");
btn25.addEventListener("click",function(e){   
myCalc(btn25.innerText);
togglePopup();
});

const btn26=document.getElementById("btn26");
btn26.addEventListener("click",function(e){   
myCalc(btn26.innerText);
togglePopup();
});
const btn27=document.getElementById("btn27");
btn27.addEventListener("click",function(e){   
myCalc(btn27.innerText);
togglePopup();
});
const btn28=document.getElementById("btn28");
btn28.addEventListener("click",function(e){   
myCalc(btn28.innerText);
togglePopup();
});
const btn29=document.getElementById("btn29");
btn29.addEventListener("click",function(e){   
myCalc(btn29.innerText);
togglePopup();
});
const btn30=document.getElementById("btn30");
btn30.addEventListener("click",function(e){   
myCalc(btn30.innerText);
togglePopup();
});
const btn31=document.getElementById("btn31");
btn31.addEventListener("click",function(e){   
myCalc(btn31.innerText);
togglePopup();
});
const btn32=document.getElementById("btn32");
btn32.addEventListener("click",function(e){   
myCalc(btn32.innerText);
togglePopup();
});
const btn33=document.getElementById("btn33");
btn33.addEventListener("click",function(e){   
myCalc(btn33.innerText);
togglePopup();
});
const btn34=document.getElementById("btn34");
btn34.addEventListener("click",function(e){   
myCalc(btn34.innerText);
togglePopup();
});
const btn35=document.getElementById("btn35");
btn35.addEventListener("click",function(e){   
myCalc(btn35.innerText);
togglePopup();
});
const btn36=document.getElementById("btn36");
btn36.addEventListener("click",function(e){   
myCalc(btn36.innerText);
togglePopup();
});
const btn37=document.getElementById("btn37");
btn37.addEventListener("click",function(e){   
myCalc(btn37.innerText);
togglePopup();
});
const btn38=document.getElementById("btn38");
btn38.addEventListener("click",function(e){   
myCalc(btn38.innerText);
togglePopup();
});
const btn39=document.getElementById("btn39");
btn39.addEventListener("click",function(e){   
myCalc(btn39.innerText);
togglePopup();
});
const btn40=document.getElementById("btn40");
btn40.addEventListener("click",function(e){   
myCalc(btn40.innerText);
togglePopup();
});
const btn41=document.getElementById("btn41");
btn41.addEventListener("click",function(e){   
myCalc(btn41.innerText);
togglePopup();
});