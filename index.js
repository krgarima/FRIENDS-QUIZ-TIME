var readlineSync = require("readline-sync");
var score=0;
var userName = readlineSync.question("What's your Name? ");
console.log("Welcome "+userName+ "! to FRIENDS Quiz");
console.log("Don't Cheat. Here's your 1st Question. ")
console.log();

function check(question,answer)    //Function
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer == answer)
  {
    console.log("Correct answer!")
    score++;
  }
  else
  console.log("Wrong answer")
  console.log();
}

var highscore = [
  {
    name: "Maya",
    score: 4
  }
]

questionOne =                     //Data Structure
{
question: "How many times was Ross legally divorced? \n a: 3 \n b: 2 \n c: 4 \n d: 5 \n",
answer: "a"
}
questionTwo = 
{
question: "What holiday did Ross and his girlfriend Mona break up on? \n a: Valentine Day \n b: Thanksgiving \n c: Christmas \n d: New Year eve \n",
answer:  "a"
}
questionThree = 
{
question: "What job did Monica's older boyfriend Richard Burke have? \n a: Dentist \n b: Sous Chef \n c: Stock broker \n d: Ophthalamologist \n",
answer:  "d"
}
questionFour = 
{
question: "Which of the following Chandler facts is false? \n a: He has a third nipple \n b: He is missing a pinky toe \n c: He dated Phoebe as a kid \n d: He once won a Vanilla Ice lookalike contest \n",
answer:  "c"
}
questionFive = 
{
question: "How many times did Chandler and Janice break up during the entirety of Friends? \n a: 1 \n b: 2 \n c: 8 \n d: 5 \n",
answer:  "d"
}


var quiz = [questionOne, questionTwo, questionThree, questionFour, questionFive];     //Array

var i;
for(i=0;i<quiz.length;i++)
{
  var current = quiz[i];
  check(current.question, current.answer);
}

console.log("Final Score: ",score);

if(score>=3)
console.log("Well done");
else
console.log("Rewatch Friends :P )");

// console.log("Highest Scorer:"+highscore.name);
// if(score>highscore.score)
// console.log("Congratulations! You are the highest scorer now")