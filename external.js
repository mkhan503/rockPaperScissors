
//Adding eventlisteners to buttons, so that game starts off when a button is clicked 
const buttons = document.querySelectorAll('button');
buttons.forEach((button)=> button.addEventListener('click', playRound));

function computerPlay(){
    //Creat Array of three words//
    const options =["rock", "paper", "scissors"];
    //Generate random number from 0 to 2 (inclusive)//
    let rndNum = Math.floor(Math.random()*3);
    
    //return an element from array based on random number generated//
    const computerChoice = options[rndNum];
    return computerChoice;

}


function playRound(e){
    const result = document.querySelector('#result');
    console.log(result);

    const personChoice = e.target.id;
    const personSelect = document.querySelector('#choicePerson');
    console.log(personSelect);
    personSelect.textContent = `You chose: ${personChoice}`;
   
    
    // Displaying computer choice on screen instead of console
    const computerSelect = document.querySelector('#choiceComputer');
    const computerChoice = computerPlay();
    computerSelect.textContent = `Computer chose: ${computerChoice}`;
   



    //if personChoice and compterChoice are same return Draw//
    if (personChoice == computerChoice){
        result.textContent = 'Draw';
        
    }  
    //elseif PC = rock & CC = scissors, return you win//
    else if(personChoice == "rock" && computerChoice == "scissors"){
        result.textContent = 'You win, rock beats scissors';
    }
    //elseif PC = paper & CC = rock, return you win//
    else if(personChoice == "paper" && computerChoice == "rock"){
        result.textContent = 'You win paper beats rock';
    }
    // elseif PC = scissors & CC = paper return you win//
    else if(personChoice == "scissors" && computerChoice == "paper"){
        result.textContent = 'You win, scissors beat paper';
    }
    //else return you lose//
    else{
        result.textContent = `You lose! ${computerChoice} beats ${personChoice}`;
    }
    
}

  
    
