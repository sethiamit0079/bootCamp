/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



var  roundscore , score , activeplayer , gameplaying    ; 
init();


function init(){
    //state variable tells us condition of a system , we need to remember something .
    gameplaying = true;
    roundscore = 0;
    //read & store values .
    score = [0,0];
    //track of player currently playing.
    activeplayer = 0;
    
    //document.querySelector('#current-'+ activeplayer).textContent = dice;
    //make dice invisible.
    document.querySelector('.dice').style.display= 'none';
    // we will use getElementBtId for selction of "if" bcz its faster than queryselector .
    //we will make all values zero .
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent= 'player 1 ';
    document.getElementById('name-1').textContent= 'player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}





//........addEventListener('click',function(){ //ananymous function }
document.querySelector('.btn-roll').addEventListener('click',function(){
    // gameplaying is true so it will run .
    if(gameplaying){          
    //1. random number .
   var dice = Math.floor(Math.random() * 6 ) +1 ;
    //2. make dice use "block" and result visible .
    //make a variable for selection of dice .
    var diceDOM = document.querySelector('.dice');
//document.querySelector('.dice').style.display= 'block';           
    diceDOM.style.display='block';
//add image of dice to the random no we get respectively.
    diceDOM.src= 'dice-' + dice + '.png' ;
//3. update score if not 1.
if(dice !== 1){ //!== 1 mean different then 1;
    roundscore += dice;
    document.querySelector('#current-'+ activeplayer).textContent = roundscore;
    
}
else{       nextplayer();
}
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gameplaying){
//Add current score to Global score
score[activeplayer] += roundscore ;
//Upadte the UI .
document.querySelector('#score-'+ activeplayer).textContent = score[activeplayer];
//check player if won the Game.
if(score[activeplayer]>=30){
    document.querySelector('#name-'+ activeplayer).textContent= 'winner!';
    document.querySelector('.dice').style.display= 'none';
    document.querySelector('.player-'+activeplayer  +'-panel').classList.add('winner');
    document.querySelector('.player-'+activeplayer  +'-panel').classList.remove('active');
    gameplaying = false;
}
else{
//next player .
nextplayer();
}
    }

});

function nextplayer(){

    //when it is one then turn of next user .
    
    activeplayer === 0 ? activeplayer=1 : activeplayer = 0;

    // ap      if  0   then    1         else          0 ;
    roundscore = 0;  
    //to show zero on screen
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    //for toggling the class "active" whice gives bold style , red dot & light background to active player . 
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    //now hide the dice .
    document.querySelector('.dice').style.display= 'none';


}
// init function is passed & when clicked new button then eventlistener will call init.
document.querySelector('.btn-new').addEventListener('click',init);














