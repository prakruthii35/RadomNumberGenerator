const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const player = {
  username: "",
  attempts: 0,
};

const options = {
  min: 1,
  max: 100,
  thresh: 5,
  goal: -1,
  maxAttempts: 10,
};

function setGoal() {
  console.log(`Generating goal...`);
  const goal =
    Math.floor(Math.random() * (options.max - options.min + 1)) + options.min;
  options.goal = goal;
  console.log(`Goal set successfully! : ${options.goal}`);
  takeGuess();
}

function enrollUser() {
  rl.question(`Before we begin, can I have your name?: `, (name) => {
    console.log(`Hello, ${name}`);
    player.username = name;
    setGoal();
  });
}

function takeGuess() {
  rl.question(`Make a random guess and try to guess the goal: `, (guess) => {
    if (isNaN(Number(guess))) {
      console.log(`Kindy enter valid numbers only.`);
      process.exit(0);
    }

    if (guess == options.goal) {
      player.attempts += 1;
      console.log(
        `You guessed it right in ${player.attempts} attempts. Congratulations!`
      );
      rl.close();
      process.exit(0);
    }

    const maxThresh = options.goal + options.thresh;
    const minThresh = options.goal - options.thresh;

    if (guess >= minThresh && guess <= maxThresh) {
      console.log(`You are close!`);
    } else {
      if (guess > options.goal) {
        console.log(`You might need to guess lower.`);
      } else {
        console.log(`You might need to guess higher.`);
      }
    }

    player.attempts += 1;

    if (player.attempts > options.maxAttempts - 1) {
      console.log(
        `You exceeded the maximum number of attempts! Please try again. Oh, and the goal was ${options.goal}`
      );
      rl.close();
      process.exit(0);
    } else {
      takeGuess();
    }
  });
}

enrollUser();

