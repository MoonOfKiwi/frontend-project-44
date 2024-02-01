import readlineSync from 'readline-sync';
import askUsername from './cli.js';

const startGame = (Rules, getInfoForRound) => {
  const roundsCount = 3;

  console.log('Welcome to the Brain Games!');
  const username = askUsername();
  console.log(Rules);

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
