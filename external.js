game();

function computerPlay(){
    //Creat Array of three words//
    const options =["rock", "paper", "scissors"];
    //Generate random number from 0 to 2 (inclusive)//
    let rndNum = Math.floor(Math.random()*3);
    
    //return an element from array based on random number generated//
    const computerChoice = options[rndNum];
    return computerChoice;

}


function playRound(personChoice, computerChoice){

    if (personChoice != "rock" && personChoice != "paper" && personChoice != "scissors"){
        return "Incorrect option";
    }
    //if personChoice and compterChoice are same return Draw//
    else if (personChoice == computerChoice){
        return "Draw";
        
    }  
    //elseif PC = rock & CC = scissors, return you win//
    else if(personChoice == "rock" && computerChoice == "scissors"){
        return "You win, rock beats scissors";
    }
    //elseif PC = paper & CC = rock, return you win//
    else if(personChoice == "paper" && computerChoice == "rock"){
        return "You win paper beats rock";
    }
    // elseif PC = scissors & CC = paper return you win//
    else if(personChoice == "scissors" && computerChoice == "paper"){
        return "You win, scissors beat paper";
    }
    //else return you lose//
    else{
        return "You lose! " + computerChoice + " beats " + personChoice;

    }
    
}

function game(){
    let computerScore = 0;
    let personScore = 0;
    //play 5 games calling playRound function, adding scores//
    // for draw, no score is added//
    for (let i = 0; i < 5; i++){
        
            let personChoice = window.prompt("Select one of: rock, paper, scissors","");
            
            personChoice = personChoice.toLowerCase();
            console.log(personChoice);
            
            let computerChoice = computerPlay();
            console.log(computerChoice);

            const result = playRound(personChoice, computerChoice);
        
            
            if (result.includes("win")){
            personScore += 1;
            console.log(personScore);
            }
            else if (result.includes("lose")){
                computerScore += 1;
                console.log(computerScore);
            }

            //if incorrect spelling entered, rerun the round//

            else if (result.includes("Incorrect")){
                i =- 1;
            }

            alert(result);

        
        

    }
    //at the end of for loop compare computerScore with personScore//
    //announce the winner//

    alert ("Person score = " + personScore +
    " Computer score = " + computerScore);
   

    if (personScore > computerScore){
        alert("You win!!");
    }
    else if (personScore < computerScore){
        alert("You lose!");
    }
    else{
        alert("It's a draw!");
    }
    
}




