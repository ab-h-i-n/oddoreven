var tries = 5;

var pcScore = 0;
var userScore = 0;

const MAX = 10;

var userNum = 1;
var pcNum = 1;

var isEvenSelected = true;
var isSelected = false;

const triesText = document.querySelector('.tries');
const userBtn = document.querySelector('.user .number');
const pcBtn = document.querySelector('.pc .number');
const oddBtn = document.querySelector('button .odd');
const evenBtn = document.querySelector('button .even');
const playBtn = document.querySelector('.play');
const userScoreText = document.querySelector('.user .score');
const pcScoreText = document.querySelector('.pc .score');

userBtn.addEventListener("click",()=>{

    userNum = (userNum % MAX) + 1;
    userBtn.innerText = userNum;

})


oddBtn.addEventListener("click",()=>{
    evenBtn.classList.remove('active');
    oddBtn.classList.add('active');
    isEvenSelected = false;
    isSelected = true;
})

evenBtn.addEventListener("click",()=>{
    oddBtn.classList.remove('active');
    evenBtn.classList.add('active');
    isEvenSelected = true;
    isSelected = true;
})

playBtn.addEventListener("click", ()=>{
    
    if(!isSelected){
        window.alert("Select ODD or Even!");
    }else{
        tries--;
        triesText.innerText = `${tries}/5`;
        let interval;
        interval = setInterval(() => {
            pcNum = (pcNum % MAX) + 1;
            pcBtn.innerText = pcNum;

            userBtn.style.pointerEvents = "none";
            oddBtn.style.pointerEvents = "none";
            evenBtn.style.pointerEvents = "none";
            playBtn.style.pointerEvents = "none";

            userBtn.style.opacity = "0.5";
            oddBtn.style.opacity = "0.5";
            evenBtn.style.opacity = "0.5";
            playBtn.style.opacity = "0.5";
        }, 100);



        setTimeout(()=>{
            clearInterval(interval);
            if(tries == 0){
                userBtn.style.pointerEvents = "none";
                oddBtn.style.pointerEvents = "none";
                evenBtn.style.pointerEvents = "none";
                playBtn.style.pointerEvents = "none";
    
                userBtn.style.opacity = "0.5";
                oddBtn.style.opacity = "0.5";
                evenBtn.style.opacity = "0.5";
                playBtn.style.opacity = "0.5";
            }else{
                userBtn.style.pointerEvents = "";
                oddBtn.style.pointerEvents = "";
                evenBtn.style.pointerEvents = "";
                playBtn.style.pointerEvents = "";
    
                userBtn.style.opacity = "1";
                oddBtn.style.opacity = "1";
                evenBtn.style.opacity = "1";
                playBtn.style.opacity = "1"; 
            }
            pcNum = Math.floor(Math.random() * 10) + 1;
            pcBtn.innerText = pcNum;

            var sum = pcNum + userNum;

            if(sum % 2 == 0 && isEvenSelected || sum % 2 != 0 && !isEvenSelected){
                userScore += 10;
                userScoreText.innerText = `[${userScore}]`;
            }else{
                pcScore += 10;
                pcScoreText.innerText = `[${pcScore}]`;
            }

            if(tries == 0){
                iswon();
            }
        },2000);

    }

})

const iswon = () =>{
    setTimeout(()=>{

            if(pcScore == userScore){
                window.alert("Draw!");
            }else if(pcScore < userScore){
                window.alert("User won the game!")
            }else{
                window.alert("Computer won the game!");
            }

            location.reload();
    },2000)
}