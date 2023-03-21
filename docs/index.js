const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)

const inputE1=document.getElementById("input");
const formE1=document.getElementById("form");
const scoreE1=document.getElementById("score");
let score=JSON.parse(localStorage.getItem("score"));

if(!score){
    score=0;
}

scoreE1.innerText=`score: ${score}`;

const questionE1=document.getElementById("question");
questionE1.innerText=`what is ${num1}  multiply by ${num2}?`;

const correctans=num1*num2;

formE1.addEventListener("submit", ()=>{
    const userans=+inputE1.value;
    if(userans ===correctans){
        score+=1;
        updateLocalStorage()
    }else{
        score-=1;
        updateLocalStorage()
    }

})

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}