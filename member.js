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

["85", "Rosemary", "Jones", "jonesrb1@gmail.com", " "],

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

for (let x=1; x<=(membership.length); x++){ 

    let z="btn".concat(x);
    const y=document.getElementById(z);
    y.addEventListener("click",function(e){   
        myCalc(y.innerText);
        togglePopup();
        })};

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