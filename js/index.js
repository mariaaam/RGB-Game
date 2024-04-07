// ==================html Element


let btnHard=document.getElementById("btnHard");
let btnEasy=document.getElementById("btnEasy");
let RgbHead=document.getElementById("RgbHead");
let getColorsBtn=document.getElementById("getColorsBtn");
let colorsContainer=document.getElementById("colorsContainer");
console.log(btnEasy)
// --------------------------------------------------------------------------

// APP variable-------


let levels={
   easy:{
    name:"easy",
    numbOfCards:3
   },

   hard:{
    name:"hard",
    numbOfCards:6
   }
}

let correctAns="";
var selectedLevel = "easy";

function GeneratColor()
{

    let red=Math.trunc(Math.random()*256);
    let green=Math.trunc(Math.random()*256);
    let blue=Math.trunc(Math.random()*256);
    

// console.log( `RGB(${red }, ${grean} , ${blue })`);
let color=`rgb(${red}, ${green}, ${blue })`;

// console.log(color);
return color;

}

function askQues(level){
    let colors=[];
    let NumbCards=levels[level].numbOfCards;
    for(let i=1 ; i<=NumbCards ; i++){
        colors.push(GeneratColor())
    }
    // console.log(colors);

    correctAns=colors[Math.trunc(Math.random()*colors.length)];
    // console.log(correctAns);
    RgbHead.innerHTML=correctAns;
    
    displyCards(colors)
}


function displyCards(colorArr){
    let container="";
 for(let i=0 ; i<= colorArr.length ; i++){
container +=`
<div class="col-md-4    color-card">
 <div class="rounded inner h-100" style="background-color:${colorArr[i]}">
   
 </div>
</div>
`
 }
// console.log(colorsContainer)
 colorsContainer.innerHTML = `  <div class="row g-4 py-4">
 ${container}
 </div>
 `;
//  console.log(container)

allCards=document.querySelectorAll(" .inner")
// console.log(allCards)
for(let i=0 ; i< allCards.length ; i++){
allCards[i].onclick = checkAns;
// console.log(allCards[i])
}
}

function checkAns(e){
    console.log(e.target.style.backgroundColor)
console.log(correctAns)
if(e.target.style.backgroundColor == correctAns){
  alert("Congratulation 🎉");
  askQues(selectedLevel);
}
         else {
        e.target.style.display = "none"
        alert("try again 🔁 ")
    
      }
}



// events======

btnEasy.onclick = function () {
    btnHard.classList.remove("active");
    btnEasy.classList.add("active")
  
    selectedLevel = "easy";
    askQues(selectedLevel)
  }
  
  btnHard.onclick = function () {
    btnEasy.classList.remove("active");
    btnHard.classList.add("active")
  
    selectedLevel = "hard"
    askQues(selectedLevel)
  }
  
  getColorsBtn.onclick = function () {
    if (selectedLevel === "easy") {
      askQues("easy")
    } else {
      askQues("hard")
    }
  }
  
  
 
  askQues(selectedLevel)

