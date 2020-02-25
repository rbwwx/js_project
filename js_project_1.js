var rand = Math.round(Math.random()*20)
var name=prompt("Enter the number")
if(parseInt(name)==NaN) {console.log("Please input Number Integer")} else if(parseInt(name)==rand) 
{console.log("You win")} else 
{console.log("You loose")}