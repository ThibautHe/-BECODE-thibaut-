const scoreAText = document.querySelector(".scoreA");
const scoreBText = document.querySelector(".scoreB");
const increaseA = document.querySelector(".increaseA");
const increaseB = document.querySelector(".increaseB");
const reset = document.querySelector(".reset");

let scoreA = 0;
let scoreB = 0;

scoreAText.innerText = scoreA;
scoreBText.innerText = scoreB;

increaseA.addEventListener("click",() =>{
    scoreA++;
    scoreAText.innerText = scoreA;
    check();
}
);
increaseB.addEventListener("click",() =>{
    scoreB++;
    scoreBText.innerText = scoreB;
    check();
}
);

reset.addEventListener("click",() =>{
scoreA = 0;
scoreB = 0;

scoreAText.innerText = scoreA;
scoreBText.innerText = scoreB;

increaseA.disabled = false;
increaseB.disabled = false;

scoreAText.style.color = "black";
scoreBText.style.color = "black";

});

function check()
{
    if( scoreA + scoreB >= 5)
    {
        increaseA.disabled = true;
        increaseB.disabled = true;

        if(scoreA > scoreB)
        {
            scoreAText.style.color = "green";
            scoreBText.style.color = "red";
        }
        else
        {
            scoreBText.style.color = "green";
            scoreAText.style.color = "red";
        }
    }
}