//* variables
let account = 0;//* Start
alert('Welcome to the Landscraper Game');
alert('You are starting a landscaping business, but all you have are your teeth.');//* User teeth
alert('Your balance is ' + account + '. Using just your teeth, you can spend the day cutting lawns and make $1. You can do this as much as you want.')
let userInput = prompt("Type 'teeth' to cut the lawn");
while (userInput === "teeth" && account<1000 ) {
    if (account < 5){
        account += 1
        alert('Your balance is ' + account + '. Using just your teeth, you can spend the day cutting lawns and make $1. You can do this as much as you want.')
        userInput = prompt("type teeth to continue")
    }
    else{
        account +=1
        alert('Your balance is ' + account + '. you can now buy a rusty Scissors with 5$,you can spend the day cutting lawns and make $5 or continue withe using your teeth and gain 1$')
        userInput = prompt("Type 'rusty scissors' to buy and use rusty scissors or 'teeth' to continue")
    }
}
//* User rusty scissors
//alert('Your balance is ' + account + '. you can now buy a rusty Scissors with 5$,you can spend the day cutting lawns and make $5 or continue withe using your teeth and gain 1$')
//let userInput = prompt("Type 'rusty scissors' to buy and use rusty scissors or 'teeth' to continue")

while (userInput==="rusty scissors" && account<1000){
    if (account < 25){
        account += 5
        alert('Your balance is ' + account + '. Using just your rusty scissors, you can spend the day cutting lawns and make $5. You can do this as much as you want.')
        userInput = prompt("type 'rusty scissors' to continue")
    }
    else{
        account +=5
        alert('Your balance is ' + account + '. you can now buy a old-timey push lawnmower for ,you can spend the day cutting lawns and make $25 or continue using your rusty scissors and gain 5$')
        userInput = prompt("Type 'old-timey push lawnmower' to buy and use old-timey push lawnmower or 'rusty scissors' to continue")
    }
}
//
while (userInput==="old-timey push lawnmower" && account<1000){
    if (account < 250){
        account += 50
        alert('Your balance is ' + account + '. Using just your old-timey push lawnmower, you can spend the day cutting lawns and make $50. You can do this as much as you want.')
        userInput = prompt("type 'old-timey push lawnmower' to continue")
    }
    else{
        account +=50
        alert('Your balance is ' + account + '. you can now buy fancy battery-powered lawnmower ,you can spend the day cutting lawns and make $100 or continue using your rusty scissors and gain 5$')
        userInput = prompt("Type 'fancy battery-powered lawnmower' to buy and use fancy battery-powered lawnmower or 'old-timey push lawnmower' to continue")
    }
}
while (userInput==="fancy battery-powered lawnmower" && account<1000){
    if (account < 500){
        account += 100
        alert('Your balance is ' + account + '. Using just your fancy battery-powered lawnmower, you can spend the day cutting lawns and make $100. You can do this as much as you want.')
        userInput = prompt("fancy battery-powered lawnmower' to continue")
    }
    else{
        account +=100
        alert('Your balance is ' + account + '. you can now buy team of starving students for 500$ ,you can spend the day cutting lawns and make $250 or continue using your rusty scissors and gain 5$')
        userInput = prompt("Type 'team of starving students' to buy and use team of starving students or 'fancy battery-powered lawnmower' to continue")
    }
}
while (userInput==="team of starving students" ){
    if (account < 1000){
        account += 250
        alert('Your balance is ' + account + '. Using just your old-timey push lawnmower, you can spend the day cutting lawns and make $50. You can do this as much as you want.')
        userInput = prompt("fancy battery-powered lawnmower' to continue")
    }
    else{
        alert('Your balance is ' + account + ' Congratulations, you are wining this game')
    }
}