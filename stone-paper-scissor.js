let userInput = prompt("enter your choice");

let optArray = ["stone" , "paper" , "scissor" ];

let botInputNum  = Math.floor(Math.random() * optArray.length);

let botInput = optArray[botInputNum] ;

userInput = userInput.toLowerCase();

console.log("your choice : " , userInput );

console.log("bot's choice : "  , botInput);

if(userInput != "stone" || "paper"|| "scissor"){
  console.log("please give a valid input");
}
  
else if (userInput == botInput){
  console.log("it's a tie ! ")
}

else if ((userInput === 'stone' && botInput === 'scissors') ||
        (userInput === 'paper' && botInput === 'stone') ||
        (userInput === 'scissors' && botInput === 'paper')){
  
  console.log("congrats you win !");
}
  
else{
  console.log("bot wins");
};