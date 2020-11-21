var readlineSync = require('readline-sync');
var chalk = require('chalk');
var score = 0;
var userName = readlineSync.question("May i have your name : ");
var exit = 0;


// Leaderboard ( top 5 players name and score )
var highscore = [
  {Name:"Ayush         ",Score:4},
  {Name:"Arpit         ",Score:4},
  {Name:"Udit          ",Score:3},
  {Name:"Arjita        ",Score:3},
  {Name:"sandeep       ",Score:3}
  ];



// Welcomes the user
console.log(chalk.green("Welcome! ")+userName+" to Do you know "+chalk.yellowBright("'Ms dhoni'"));
console.log(chalk.green("\nChoose the correct answer"))
console.log('----------------------------\n');



// Questions
var questions = 
[
  {
    ques:`When was MS Dhoni born?

(a) 7 July 1981
(b) 1 Jan 1985
(c) 7 Dec 1989
(d) None of the above`,
    ans:"a"
  },
  {
    ques:`Which of the following award is not won by MS Dhoni?

(a) Padma Shri
(b) Bharat Ratna
(c) Padma Bhushan
(d) Rajiv Gandhi Khel Ratna`,
    ans:"b"
  },
  {
    ques:`Which of the following statement is NOT correct about Dhoni?

i. MS Dhoni became the 6th Indian cricketer who scored 10000 runs in the ODIs.
ii. Dhoni was declared ICC ODI Player of the Year in 2008 and 2009.

(a) Only i
(b) Only ii
(c) Neither i nor ii
(d) Both i and ii`,
    ans:"b"
  },
  {
    ques:`How many centuries have been scored by the MS Dhoni in ODIs? 

(a) 10
(b) 15
(c) 18
(d) 22`,
    ans:"a"
  },
  {
    ques:`How many centuries have been scored by Dhoni in the IPL so far?

(a) 0
(b) 1
(c) 2
(d) 4`,
    ans:"a"
  },
  {
    ques:`When MS Dhoni made ODI Debut for the Indian team?

(a) 2000
(b) 2002
(c) 2008
(d) 2004`,
    ans:"d"
  },
  {
    ques:`Who is the wife of MS Dhoni?

(a) Shikha Dhoni 
(b) Smita Dhoni
(c) Sakshi Dhoni
(d) Suraksha Dhoni`,
    ans:"c"
  },
  {
    ques:`What is the nickname of MS Dhoni?

(a) Mahi
(b) Sana
(c) Jaggu
(d) Chiku`,
    ans:"a"
  },
  {
    ques:`MS Dhoni took over the ODI captaincy from __________ in 2007.

a) Sourav Ganguly
b) Anil Kumble
c) Sachin Tendulkar
d) Rahul Dravid`,
    ans:"d"
  },
  {
    ques:`Dhoni holds the post of Vice-President of Which Indian Company ?

(a) Ambuja Cement
(b) Ultratech Cement
(c) Indian Cements
(d) ACC Cements`,
    ans:"c"
  },
  {
    ques:`Dhoni is the co-owner of which Indian Super League team ?

(a) FC Goa
(b) Chennaiyan FC
(c) Kerela Blasters FC
(d) FC Pune City`,
    ans:"b"
  },
  {
    ques:`He has the record of the highest ODI score by a wicketkeeper, how much is it?

(a) 160
(b) 173
(c) 183
(d) 190`,
    ans:"c"
  },
  {
    ques:`Which is his favourite football club?

(a) Manchester United
(b) Man United
(c) Inter Milan
(d) Tottenham`,
    ans:"a"
  },
  {
    ques:`In which year did MSD win the Rajiv Gandhi Khel Ratna award?

(a) 2006
(b) 2008
(c) 2010
(d) 2012`,
    ans:"b"
  },
  {
    ques:`Which honorary position does Dhoni hold in the Indian Territorial Army ?

(a) Chief Head
(b) Hawildar
(c) General Hawildar
(d) Lieutenant Colonel`,
    ans:"d"
  }
]



//function to play game and check the answer

function play( question,answer ){
  // check the valid input
  var loop = 0;

  while( loop < 100 ){
     console.log(chalk.red("\nPress 'e' to exit the game\n"));
     var currentAnswer = readlineSync.question("Input answer : ");
    if( currentAnswer.toUpperCase() === "A" || currentAnswer.toUpperCase() === "B" || currentAnswer.toUpperCase() === "C" || currentAnswer.toUpperCase() === "D" || currentAnswer.toUpperCase() === "E" ){
      break;  
    }
  
    // if input type is not correct then it display invalid input
    console.log(chalk.red('\nInvalid input ')+"try again!");
  }
 

 // Display the Answer
 console.log("You answered: ("+currentAnswer+")");
 
 // check the answer
  if( answer.toUpperCase() === currentAnswer.toUpperCase() ){
       console.log(chalk.green('\nCorrect answer!'));
       score++;
  }
  else if( currentAnswer.toUpperCase() === "E" ){
     exit++;
     console.log("You have exit the game");
  }
  else{
       console.log(chalk.red("\nWrong answer!"));
       console.log(chalk.green("The correct answer is : ")+answer+"\n")
  }

  if( exit === 0 ){
      console.log(chalk.yellowBright('Current score : ')+score);
      console.log('----------------------------\n');
  }
    
}

// using for loop to display all the questions

for( var i = 0; i < questions.length; i++ ){
 
 if( exit === 0 ){
  var displayQuestion = (i+1)+"."+questions[i].ques;
  // display question
  console.log( displayQuestion );
  //check the answer
  play( questions[i].ques,questions[i].ans );
  }
  else{
    break;
  }

}

// Display the final score when the game finish
if( exit === 0 ){

console.log(chalk.yellowBright("Game finished"));
console.log("Your Final score is: "+score+"\n");

}


// check the score if it is highscore then congrats him

// Also ask to take the screenshot and send it

if( score > highscore[0].Score ){
  console.log(chalk.green('☆彡(ノ^ ^)ノ Congratulations ヘ(^ ^ヘ)☆彡')+" you have made a new high score by beating "+highscore[0].Name+`

  You have earned the first place in the leaderboard
  
  Take a screenshot and send it to me so that i can update the highscore
  `)
}

// Update the leaderboard depends upon the score of the Player

for( var i = 0; i < highscore.length; i++ ){
  if( score > highscore[i].Score ){
     highscore.splice(i, 0, { Name: userName+"         ", Score: score });
     highscore.pop();
     break;     
  }
}

// Ask to check the leaderboard
if( exit === 0 ){

   var checkHighscore = readlineSync.question("Do you want to check the leaderboard? "+chalk.gray('yes or no '));
   console.log("\n");

// if user input yes then display leaderboard

if( checkHighscore.toLowerCase() === "yes" ){
  for( var i = 0; i < highscore.length; i++ ){
    console.log((i+1)+". "+chalk.yellowBright("Name : ")+chalk.green(highscore[i].Name)+chalk.yellowBright(" Score : ")+chalk.green(highscore[i].Score));
  }
}
   
}

console.log(chalk.yellow(`
Thanks for playing!`)); 



