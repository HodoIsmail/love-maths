document.addEventListener("DOMContentLoaded", function(){
  let buttons = document.getElementsByTagName("button");

  for(let button of buttons){
    button.addEventListener("click", function(){
if(this.getAttribute("data-type")=== "submit"){
    checkAnswer();
} else{
    let gameType= this.getAttribute("data-type");
    runGame(gameType);
}

    })
  }

  document.getElementById("answer-box").addEventListener("keydown", function(e){
    if(e.key==="Enter"){
        checkAnswer();
    }

  })
  runGame("addition")

})
function runGame(gameType){
    document.getElementById("answer-box").value="";
    document.getElementById("answer-box").focus();
let num1 = Math.floor(Math.random()*25)+1;
let num2 = Math.floor(Math.random()*25)+1;

if (gameType === "addition"){
    displayAdditionQuestion(num1,num2)

}else if(gameType === "multiply"){
displayMultiplyQuestion(num1,num2)


}else if(gameType === "subtract"){
displaySubractQuestion(num1,num2)
    
}else{
    alert(`Unknown game type: ${gameType}`)
    throw `Unknown game type: ${gameType}. Aborting!`;
}
}

function checkAnswer(){
let userAnswer = parseInt(document.getElementById("answer-box").value);
let calculatedAnswer= calculateCorrectAnswer();
let isCorrect = userAnswer===calculatedAnswer[0];

if(isCorrect){
    alert("Yay! You got it right <3")
    incrementScore()
}else{
    alert(`Ahhh.. you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`)
    incrementWrongScore();
}

runGame(calculatedAnswer[1]);
}

function calculateCorrectAnswer(){
let operand1 = parseInt(document.getElementById("operand1").innerText);
let operand2 = parseInt(document.getElementById("operand2").innerText);
let operator = document.getElementById("operator").innerText;

if (operator==="+"){
    return [operand1 + operand2, "addition"]
}else if(operator==="x"){
    return [operand1 * operand2, "multiply"]
}else if(operator==="-"){
    return [operand1 - operand2, "subtract"]
}else{
    alert(`Unimplemented operator ${operator}`);
    throw `Unimplemented operator ${operator}. Aborting!`;
}
}

function incrementScore(){
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText= ++oldScore;
}

function incrementWrongScore(){
let oldScore = parseInt(document.getElementById("incorrect").innerText);
document.getElementById("incorrect").innerText= ++oldScore;

}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById("operand1").textContent=operand1;
    document.getElementById("operand2").textContent=operand2;
    document.getElementById("operator").textContent="+";

}

function displaySubractQuestion(operand1, operand2){
    document.getElementById("operand1").textContent= operand1 > operand2 ? operand1 : operand2;
    document.getElementById("operand2").textContent= operand1 > operand2 ? operand2 : operand1;
    document.getElementById("operator").textContent="-";
}

function displayMultiplyQuestion(operand1, operand2){
    document.getElementById("operand1").textContent=operand1;
    document.getElementById("operand2").textContent=operand2;
    document.getElementById("operator").textContent="x";
}

