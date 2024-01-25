import readlineSync from 'readline-sync';
import askUsername from './cli.js';

const getRandomInteger = () => {
  const min = -100000;
  const max = 100000;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getCorrectAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');

const printRoundResult = (isAnswerCorrect, username, userAnswer, correctAnswer) => {
  if (isAnswerCorrect) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${username}!`);
  }
};

const startGame = () => {
  const roundsCount = 3;

  console.log('Welcome to the Brain Games!');
  const username = askUsername();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let currentAttempt = 0; currentAttempt < roundsCount; currentAttempt += 1) {
    const number = getRandomInteger();
    const correctAnswer = getCorrectAnswer(number);

    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const isAnswerCorrect = (userAnswer === correctAnswer);
    printRoundResult(isAnswerCorrect, username, userAnswer, correctAnswer);
    if (!isAnswerCorrect) return;
  }
  console.log(`Congratulations, ${username}!`);
};

export default startGame;
