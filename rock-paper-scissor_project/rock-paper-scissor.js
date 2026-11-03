   let score =JSON.parse(localStorage.getItem('score'))||{
           wins:0,
           losses:0,
           ties:0
            };
 function updateScoreElement(){ 
     document.querySelector('.js-score').innerHTML= `Wins:${score.wins},Losses: ${score.losses},Ties:${score.ties}`;
           } 

 function pickComputerMove(){
         const randomNumber=Math.random();
        let computerMove='';

        if(randomNumber>=0 && randomNumber<1/3){
            computerMove='rock';

        }else if(randomNumber>=1/3 && randomNumber<2/3){
            computerMove='paper';

        }else if(randomNumber>=2/3 && randomNumber<1){
            computerMove= 'scissors';
        }

        return computerMove;

    }
     updateScoreElement();

 function playGame(playMove){
    const computerMove=pickComputerMove();

        let result='';
   if(playMove===computerMove){
     result='Tie';
     }
        else if((playMove==='rock'&& computerMove==='scissors')||
           
        (playMove==='paper'&& computerMove==='rock')||
          
        (playMove==='scissors'&& computerMove==='paper'))
        {
          result='You win';
          }
          else{
            result='You lose';
          }
          
        
    if(result==='You win'){
        score.wins +=1;
    }else if(result==='You lose'){
        score.losses +=1;
    }else if(result==='Tie'){
        score.ties +=1;
    }

    localStorage.setItem('score',JSON.stringify(score));
    document.querySelector('.js-result').innerHTML=result;

    document.querySelector('.js-move').innerHTML=`You
            <img src="rock-paper-scissor images/${playMove}-emoji.png" class="move-icon">
            <img src="rock-paper-scissor images/${computerMove}-emoji.png" class="move-icon">
            computer`;
}
   