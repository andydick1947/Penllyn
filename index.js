for (let x=1; x<=9; x++){ 
  
  let z=`sidebtn${x}`;
  let y=document.getElementById(z);
  y.addEventListener("click",function(e){  

   if(z=="sidebtn1"){ 
      clean();
      myintro();
   }

   if(z=="sidebtn2"){ 
      clean()
      myloc()
   }

   if(z=="sidebtn3"){ 
      clean()
      mycttee()
   }

   if(z=="sidebtn4"){ 
      clean()
      mymeets()
   }

   if(z=="sidebtn5"){ 
      clean()
      myfees()
   }

   if(z=="sidebtn6"){ 
      clean()
      myres()
   }

   if(z=="sidebtn7"){ 
      clean()
      myarch()
   }
   if(z=="sidebtn8"){ 
      clean()
      rbrown()
   }
   if(z=="sidebtn9"){ 
      clean()
      myscore1()
      myscore()
      
   }
  })
  };

   function clean(){
      const cleanse = document.getElementById("mainsect");
      while (cleanse.hasChildNodes()) {
         cleanse.removeChild(cleanse.firstChild);
   }
}
function tgle(){
   const hamMenu = document.querySelector(".ham-menu");
   const offScreenMenu = document.querySelector(".off-screen-menu");

     hamMenu.classList.toggle("active");
     offScreenMenu.classList.toggle("active");
   };

   function myintro1(){
      const int1='<p style="color: black;font-weight:bold;font-size:30px;">INTRODUCTION</p>';
      const div1=document.createElement("div");
      const mydiv1=document.getElementById("mainsect");
      mydiv1.appendChild(div1);
      div1.innerHTML=int1;
}

function myintro(){
      const int='<p class="mytxt"><br>The Bridge Club was founded on 2nd April 1992 as the Llandow Bridge Club. The club relocated to Penllyn village hall in 1995, becoming the Penllyn Club in 1996.<br> The first Director was Robert Brown and the cup bearing his name is keenly contested each year by all members. <br>The aim of the club is to provide a regular facility for Duplicate Contract Bridge in a welcoming and friendly environment for players of all standards.  <br>Scoring at club nights has been enhanced with the introduction of a digital system. This uses easy to read digital touch screens enabling straightforward input of results for games played. After completion of each round the screen informs  players of the movement for the next round. Final results are available on screen at the end of the whole session.</p>';
      const div=document.createElement("div");
      const mydiv=document.getElementById("mainsect");
      mydiv.appendChild(div);
      div.innerHTML=int;
}

function myloc1(){
   const loc1='<p style="color: black;font-weight:bold;font-size:30px;">LOCATION<br></p>';
   const div1=document.createElement("div");
   const mydiv1=document.getElementById("mainsect");
   mydiv1.appendChild(div1);
   div1.innerHTML=loc1;
}
function myloc(){
   const loc='<p class="mytxt"><br>The Penllyn Village Hall is situated in Penllyn village just north of the A48 and west of Cowbridge.</p>';
   const div=document.createElement("div");
   const mydiv=document.getElementById("mainsect");
   mydiv.appendChild(div);
   div.innerHTML=loc;

  const loc1='<img id="img2" src="images/pvh.jpg"></img>';
   const div1=document.createElement("div");
   const mydiv1=document.getElementById("mainsect");
   mydiv1.appendChild(div1);
   div1.innerHTML=loc1;
}
function mycttee1(){
const cte1='<p  style="color: black;font-weight:bold;font-size:30px;">THE COMMITTEE</p>'
const div1=document.createElement("div");
const mydiv1=document.getElementById("mainsect");
mydiv1.appendChild(div1);
div1.innerHTML=cte1;
}

function mycttee(){
      const cte='<table id="tbl"><tr><td>Chairman/Director:</td><td>Allan Evans<tr><td>Deputy Director</td><td>Colin Nunn</td></tr><tr><td>Treasurer:</td><td>Jane Frampton</td></tr><td>Secretary:</td><td>Marian East</td></tr><tr><td>Scorer:</td><td>Andy Dick</td></tr></table><br>';
      const div=document.createElement("div");
      const mydiv=document.getElementById("mainsect");
      mydiv.appendChild(div);
      div.innerHTML=cte;

   const cte1='<img id="img3" src="images/chimps.png"></img>';
   const div1=document.createElement("div");
   const mydiv1=document.getElementById("mainsect");
   mydiv1.appendChild(div1);
   div1.innerHTML=cte1;
}

function mymeets1(){
   const mts1='<p style="color: black;font-weight:bold;font-size:30px;">CLUB NIGHT<br></p>';
      const div1=document.createElement("div");
      const mydiv1=document.getElementById("mainsect");
      mydiv1.appendChild(div1);
      div1.innerHTML=mts1;
}

function mymeets(){
   const mts='<p id="meets" class="mytxt">The club meets on Thursday evenings at 6.45, with play starting at 7.00 and aiming to finish by 10.00. There are also two party evenings each year.</p>';
      const div=document.createElement("div");
      const mydiv=document.getElementById("mainsect");
      mydiv.appendChild(div);
      div.innerHTML=mts;
}

function myfees1(){
   const fees1='<p style="color: black;font-weight:bold;font-size:30px;">FEES<br></p>';
      const div1=document.createElement("div");
      const mydiv1=document.getElementById("mainsect");
      mydiv1.appendChild(div1);
      div1.innerHTML=fees1;
}
function myfees(){
   const fees='<p class="mytxt">The Fees are paid annually in January. They have been held steady at £50 for the year  to Apr 2025. There is no Table charge for members, however, visitors pay £4 for each session.</p>';
      const div=document.createElement("div");
      const mydiv=document.getElementById("mainsect");
      mydiv.appendChild(div);
      div.innerHTML=fees;
}


function myres(){
      const res='<iframe id="frm1" src="res-mnths.html"></iframe>';
      const div=document.createElement("div");
      const mydiv=document.getElementById("mainsect");
      mydiv.appendChild(div);
      div.innerHTML=res;
}

function rbrown(){

    const arc='<iframe id="frm1" src="robertbrown.html"></iframe>';
    const div=document.createElement("div");
    const mydiv=document.getElementById("mainsect");
    mydiv.appendChild(div);
    div.innerHTML=arc;
}

function myarch(){
   const arc='<iframe id="frm1" src="https://andydick1947.github.io/PLArchive/"></iframe>';
   /*   const arc='<iframe id="frm1" src="TBD.html"></iframe>';*/
      const div=document.createElement("div");
      const mydiv=document.getElementById("mainsect");
      mydiv.appendChild(div);
      div.innerHTML=arc;
}

function myscore1(){
   const score7='<p style="color: black;font-weight:bold;font-size:30px;">SCORING<br></p>';
      const div1=document.createElement("div");
      const mydiv1=document.getElementById("mainsect");
      mydiv1.appendChild(div1);
      div1.innerHTML=score7;
}
function myscore(){
   const score1='<p class="mytxt">The scoring for each session is accomplished electronically using the “BridgePal” system.<br><br>  Scores are entered at each table via Android Tablets with a 7.5 inch screen. The large display with the high contrast screen make data entry very easy. Examples of these screens are illustrated below.</p>';
   const div=document.createElement("div");
   const mydiv=document.getElementById("mainsect");
   mydiv.appendChild(div);
   div.innerHTML=score1;

   const score2='<img id="img3" src="images/Picture2.png"></img><br>';
   const div5=document.createElement("div");
   const mydiv5=document.getElementById("mainsect");
   mydiv5.appendChild(div5);
   div5.innerHTML=score2;

   const score3='<p class="mytxt">Provisional scores are available immediately on completion of the session and these are ratified the following morning when they are placed on the club website. In addition to Rankings and Scorecard for each pair the hands played are combined with the Travellers to enble players to analyse their performance.  An example of the of these is illustrated below. <br></p>';
   const div4=document.createElement("div");
   const mydiv4=document.getElementById("mainsect");
   mydiv4.appendChild(div4);
   div4.innerHTML=score3;

const score4='<img id="img3" src="images/Ranks.png"></img><br>';
const div1=document.createElement("div");
const mydiv1=document.getElementById("mainsect");
mydiv1.appendChild(div1);
div1.innerHTML=score4;

const score5='<img id="img3" src="images/Scorecard.png"></img><br>';
const div2=document.createElement("div");
const mydiv2=document.getElementById("mainsect");
mydiv2.appendChild(div2);
div2.innerHTML=score5;

const score6='<img id="img3" src="images/Traveller.png"></img><br>';
const div3=document.createElement("div");
const mydiv3=document.getElementById("mainsect");
mydiv3.appendChild(div3);
div3.innerHTML=score6;
}

const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

for (let x=1; x<=9; x++){ 
  
   let z=`debtn${x}`;
   let y=document.getElementById(z);
   y.addEventListener("click",function(e){  
 
    if(z=="debtn1"){ 
       clean();
       myintro1();
       myintro();
       tgle()
    }
 
    if(z=="debtn2"){ 
       clean()
       myloc1()
       myloc()
       tgle()
   
    }
 
    if(z=="debtn3"){ 
       clean()
       mycttee1()
       mycttee()
       tgle()
    }
 
    if(z=="debtn4"){ 
       clean()
       mymeets1()
       mymeets()
       tgle()
    }
 
    if(z=="debtn5"){ 
       clean()
       myfees1()
       myfees()
       tgle()
    }
 
    if(z=="debtn6"){ 
       clean()
       myres()
       tgle()
    }
 
    if(z=="debtn7"){ 
       clean()
       myarch()
       tgle()
    }
    if(z=="debtn8"){ 
      clean()
      rbrown()
      tgle()
   }
   if(z=="debtn9"){ 
      clean()
      myscore1()
      myscore()
      tgle()
   }
 
   })
   }