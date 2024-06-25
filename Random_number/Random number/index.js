const readline = require("readline")

const rl=readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

const player= {
    username:"",
    attempts:0,
};

const options ={
    min:1,
    max:100,
    thresh:5,
    goal:"",
    maxAttempts:10,
};

function greet(name){
    console.log(`Hello,${name}`);
    main()
}
rl.question("what is your name?:",
    greet
);

const min=1111;
const max = 9999;

const randomnumber = Math.floor((Math.random()*(max-min+1))+min);
// console.log(randomnumber);

const goal = randomnumber

let attempts = 0
let threshold = 10;
const minThresh = goal - threshold;
const maxThresh = goal + threshold;

function storeGuess(answer) {
    const guess = answer;
    // console.log(guess)
    if(guess == goal) {
        attempts += 1;
        console.log(`You guessed it right in ${attempts} attempts`)
    } else if(guess >= minThresh && guess <= maxThresh) {
        attempts += 1;
        console.log(`You are close to the goal.`)
    } else if(guess < goal) {
        attempts += 1;
        console.log(`Guess higher`)
    } else {
        attempts += 1;
        console.log(`Guess lower`)
    }
}

function guess() {
    rl.question("Guess a number: " + randomnumber + " : ", storeGuess)
}

function main() {
    while(attempts < 10) {
        guess()
    }
    
    if(attempts > 9) {
        console.log(`You lose!`)
        return 
    }
    
}