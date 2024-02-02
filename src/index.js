import readlineSync from 'readline-sync';
import askUsernameAndGreet from './cli.js';

const startGame = (rules, getInfoForRound) => {
  const roundsCount = 3;

  const username = askUsernameAndGreet();
  console.log(rules);

  for (let currentAttempt = 1; currentAttempt <= roundsCount; currentAttempt += 1) {
    const [question, correctAnswer] = getInfoForRound();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${username}!`);
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
};

export default startGame;
