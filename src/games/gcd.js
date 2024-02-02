import getRandomInteger from '../randomNumGenerator.js';
import startGame from '../index.js';

const RULES = 'Find the greatest common divisor of given numbers.';

const getCorrectAnswer = (randomNum1, randomNum2) => {
  let number1 = randomNum1;
  let number2 = randomNum2;

  while (number1 !== number2) {
    if (number1 > number2) {
      number1 -= number2;
    } else {
      number2 -= number1;
    }
  }

  const result = number1.toString();

  return result;
};

const getInfoForRound = () => {
  const randomNum1 = getRandomInteger(1, 50);
  const randomNum2 = getRandomInteger(1, 50);

  const statement = `${randomNum1} ${randomNum2}`;
  const correctAnswer = getCorrectAnswer(randomNum1, randomNum2);
  return [statement, correctAnswer];
};

const startBrainGcd = () => {
  startGame(RULES, getInfoForRound);
};

export default startBrainGcd;
