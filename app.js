var user="N";
var comp;
var turn=1;
var victory=0;
var errMsg1 = "Error. Please select X or O";
var errMsg2 = "Error. Square has already been selected";
var arrSel = [0,0,0,0,0,0,0,0,0];
var sqArr = ["sqOne","sqTwo","sqThree","sqFour","sqFive","sqSix","sqSeven","sqEight","sqNine"];
document.getElementById("x").onclick = function() {
  user = "X";
  comp = "O";
  document.getElementById("selectIt").style.display="none"; 
}
document.getElementById("o").onclick = function() {
  user = "O";
  comp = "X";
  document.getElementById("selectIt").style.display="none";
 
}
var uNum=0;
var cNum=0;
var dNum=0;

function drawChk() {
  if(victory===0&&arrSel[0]!==0&&arrSel[1]!==0&&arrSel[2]!==0&&arrSel[3]!==0&&arrSel[4]!==0&&arrSel[5]!==0&&arrSel[6]!==0&&arrSel[7]!==0&&arrSel[8]!==0) {
    alert("It is a draw!");
    arrSel = [3,3,3,3,3,3,3,3,3];
    dNum++;
    document.getElementById("dScore").innerHTML="Draws: "+dNum;
    setTimeout(clearThem,2000);
  }
}
function clearIt(place) {
  document.getElementById(place).innerHTML=" ";
}
function clearThem() {
  
  clearIt("sqOne");
  clearIt("sqTwo");
  clearIt("sqThree");
  clearIt("sqFour");
  clearIt("sqFive");
  clearIt("sqSix");
  clearIt("sqSeven");
  clearIt("sqEight");
  clearIt("sqNine");
  arrSel = [0,0,0,0,0,0,0,0,0];
  victory = 0;
  if(turn===1) {
    compStorm();
    turn=2;
  } else {
    turn=1;
  }
}

function uVictory() {
    alert("User wins!!");
    arrSel = [3,3,3,3,3,3,3,3,3];
    uNum++;
    victory=1;
  document.getElementById("uScore").innerHTML=("User:"+uNum);
  setTimeout(clearThem,2000);
}

function cVictory() {
    alert("Computer wins!!");
    arrSel=[3,3,3,3,3,3,3,3,3];
    cNum++;
    victory=2;
  document.getElementById("cScore").innerHTML=("Computer:"+cNum);
  setTimeout(clearThem,2000);
}

function ticTac(selection) {  document.getElementById(selection).innerHTML = user;                                    
}

function compTac(n,selection) { 
  if(arrSel[n]===0) {
 document.getElementById(selection).innerHTML = comp; 
  arrSel[n]=2;
  vChk();
  } else {
    compStorm();
  }
}

function compStorm() {
  for(var i=0;i<arrSel.length;i++) {
    if(arrSel[i]===0) {   
	document.getElementById(sqArr[i]).innerHTML=comp;  
    arrSel[i]=2;
    vChk();
    break;
    } else {
    continue; 
    } 
  }
 }  

function vChk() {
  if(arrSel[0]===2&&arrSel[1]===2&&arrSel[2]===2||arrSel[3]===2&&arrSel[4]===2&&arrSel[5]===2||arrSel[6]===2&&arrSel[7]===2&&arrSel[8]===2||arrSel[0]===2&&arrSel[3]===2&&arrSel[6]===2||arrSel[1]===2&&arrSel[4]===2&&arrSel[7]===2||arrSel[2]===2&&arrSel[5]===2&&arrSel[8]===2||arrSel[2]===2&&arrSel[4]===2&&arrSel[6]===2||arrSel[0]===2&&arrSel[4]===2&&arrSel[8]===2) {
          cVictory();
         } 
}

function errMsgs() {
  if(user==="N") {
    alert(errMsg1);
  } else if(turn===2) {
    alert(errMsg2);
  } else {
    alert(errMsg3);
  }
}
document.getElementById("sqOne").onclick = function() {
  if(arrSel[0]===0&&user!=="N"&&turn===1) {
      arrSel[0]=1;
      ticTac("sqOne");    
      if(arrSel[1]===1&&arrSel[2]===1               ||arrSel[3]===1&&arrSel[6]===1               ||arrSel[4]===1&&arrSel[8]===1) {
        uVictory();
       } else if(arrSel[4]===1||arrSel[7]===2||arrSel[6]===2) {
          compTac(8,"sqNine");
       } else if(arrSel[3]===1||arrSel[8]===2) {
         compTac(6,"sqSeven");
       } else if(arrSel[1]===1||arrSel[4]===2) {
         compTac(2,"sqThree");
       } else if(arrSel[2]===1) {
         compTac(1,"sqTwo");
       } else if(arrSel[6]===1) {
         compTac(3,"sqFour");
       } else if(arrSel[8]===1) {
         compTac(4,"sqFive");
       } else {
         compStorm();
       }   
    drawChk();   
    } else {
    errMsgs();
  }
}
document.getElementById("sqTwo").onclick = function() {
if(arrSel[1]===0&&user!=="N") {
      arrSel[1]=1;
      ticTac("sqTwo");
if(arrSel[0]===1&&arrSel[2]===1 ||arrSel[4]===1&&arrSel[7]===1) {
  uVictory();
  } else if(arrSel[0]===1||arrSel[5]===2||arrSel[8]===2) {
    compTac(2,"sqThree");
  } else if(arrSel[2]===1||arrSel[4]===2) {
    compTac(0,"sqOne");
  } else if(arrSel[7]===1) {
    compTac(4,"sqFive");
  } else if(arrSel[4]===1) {
    compTac(7,"sqEight");
  } else {
    compStorm();
  }
   drawChk();
  
  } else {
    errMsgs();
  }
}
document.getElementById("sqThree").onclick = function() {
if(arrSel[2]===0&&user!=="N") {
      arrSel[2]=1;
      ticTac("sqThree");
    
      if(arrSel[0]===1&&arrSel[1]===1 || arrSel[5]===1&&arrSel[8]===1 || arrSel[4]===1&&arrSel[6]===1) {
        uVictory();
        } else if(arrSel[0]===1||arrSel[4]===2||arrSel[7]===2) {
          compTac(1,"sqTwo");
        } else if(arrSel[1]===1||arrSel[3]===2||arrSel[6]===2) {
          compTac(0,"sqOne");
        } else if(arrSel[8]===1) {
          compTac(5,"sqSix");
        } else if(arrSel[5]===1) {
          compTac(8,"sqNine");
        } else if(arrSel[4]===1) {
          compTac(6,"sqSeven");
        } else if(arrSel[6]===1) {
          compTac(4,"sqFive");
        } else {
          compStorm();
        }
   drawChk();
  } else {
    errMsgs();
  }
}
document.getElementById("sqFour").onclick = function() {
  if(arrSel[3]===0&&user!=="N") {
      arrSel[3]=1;
      ticTac("sqFour");
      if(arrSel[4]===1&&arrSel[5]===1 || arrSel[0]===1&&arrSel[6]===1) {
        uVictory();
        } else if(arrSel[0]===1||arrSel[7]===2||arrSel[8]===2) {
          compTac(6,"sqSeven");  
        } else if(arrSel[6]===1) {
          compTac(0,"sqOne");
        } else if(arrSel[4]===1) {
          compTac(5,"sqSix");
        } else if(arrSel[5]===1) {
          compTac(4,"sqFive");
        } else {
          compStorm();
        }
    drawChk();
    } else {
      errMsgs();
  }
}
document.getElementById("sqFive").onclick = function() {
if(arrSel[4]===0&&user!=="N") {
      arrSel[4]=1;
      ticTac("sqFive");     
      if(arrSel[3]===1&&arrSel[5]===1 || arrSel[1]===1&&arrSel[7]===1 || arrSel[2]===1&&arrSel[6]===1 || arrSel[0]===1&&arrSel[8]===1) {
        uVictory();
        } else if(arrSel[1]===1||arrSel[8]===2||arrSel[6]===2) {
          compTac(7,"sqEight");   
        } else if(arrSel[7]===1) {
          compTac(1,"sqTwo");
        } else if(arrSel[2]===1) {
          compTac(6,"sqSeven");
        } else if(arrSel[6]===1) {
          compTac(2,"sqThree");
        } else if(arrSel[0]===1) {
          compTac(8,"sqNine");
        } else if(arrSel[3]===1) {
          compTac(5,"sqSix");
        } else if(arrSel[5]===1) {
          compTac(3,"sqFour");
        } else if(arrSel[8]===1) {
          compTac(0,"sqOne");
        } else {
          compStorm();
        }
   drawChk();
  } else {
    errMsgs();
  }
}
document.getElementById("sqSix").onclick = function() {
if(arrSel[5]===0&&user!=="N") {
      arrSel[5]=1;
      ticTac("sqSix");  
      if(arrSel[3]===1&&arrSel[4]===1 ||arrSel[2]===1&&arrSel[8]===1) {
        uVictory();
        } else if(arrSel[4]===1||arrSel[0]===2||arrSel[6]===2) {
          compTac(3,"sqFour");    
        } else if(arrSel[3]===1) {
          compTac(4,"sqFive");
        } else if(arrSel[2]===1) {
          compTac(8,"sqNine");
        } else if(arrSel[8]===1) {
          compTac(2,"sqThree");
        } else {
          compStorm();
        }
   drawChk();
  } else {
    errMsgs();
  }
}
document.getElementById("sqSeven").onclick = function() {
if(arrSel[6]===0&&user!=="N") {
      arrSel[6]=1;
      ticTac("sqSeven");    
      if(arrSel[7]===1&&arrSel[8]===1 || arrSel[0]===1&&arrSel[3]===1 || arrSel[2]===1&&arrSel[4]===1) {
        uVictory();
        } else if(arrSel[0]===1||arrSel[4]===2||arrSel[5]===2) {
          compTac(3,"sqFour");
        } else if(arrSel[3]===1) {
          compTac(0,"sqOne");
        } else if(arrSel[7]===1) {
          compTac(8,"sqNine");
        } else if(arrSel[8]===1) {
          compTac(7,"sqEight");
        } else if(arrSel[2]===1) {
          compTac(4,"sqFive");
        } else if(arrSel[4]===1) {
          compTac(2,"sqThree");
        } else {
          compStorm();
        }
   drawChk();
  } else {
    errMsgs();
  }
}
document.getElementById("sqEight").onclick = function() {
if(arrSel[7]===0&&user!=="N") {
      arrSel[7]=1;
      ticTac("sqEight");
      if(arrSel[6]===1&&arrSel[8]===1 ||arrSel[1]===1&&arrSel[4]===1) {
        uVictory();
        } else if(arrSel[1]===1||arrSel[3]===2||arrSel[5]===2) {
          compTac(4,"sqFive");   
        } else if(arrSel[4]===1) {
          compTac(1,"sqTwo");
        } else if(arrSel[6]===1) {
          compTac(8,"sqNine");
        } else if(arrSel[8]===1) {
          compTac(6,"sqSeven");
        } else {
          compStorm();
        }
   drawChk();
  } else {
    errMsgs();
  }
}
document.getElementById("sqNine").onclick = function() {
if(arrSel[8]===0&&user!=="N") {   
      ticTac("sqNine");
      arrSel[8]=1;
      if(arrSel[6]===1&&arrSel[7]===1 || arrSel[2]===1&&arrSel[5]===1 || arrSel[0]===1&&arrSel[4]===1) {
        uVictory();
        } else if(arrSel[2]===1||arrSel[3]===2||arrSel[4]===2) {
          compTac(5,"sqSix");   
        } else if(arrSel[5]===1) {
          compTac(2,"sqThree");
        } else if(arrSel[0]===1) {
          compTac(4,"sqFive");
        } else if(arrSel[4]===1) {
          compTac(0,"sqOne");
        } else if(arrSel[6]===1) {
          compTac(7,"sqEight");
        } else if(arrSel[7]===1) {
          compTac(6,"sqSeven");
        } else {
          compStorm();
        }
   drawChk();
  } else {
    errMsgs();
  }
}

  

  
 


