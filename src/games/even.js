import getRandomInteger from '../randomNumGenerator.js';
import startGame from '../index.js';

const RULES = 'Answer "yes" if the number is even, otherwise answer "no".';

const getCorrectAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');

const getInfoForRound = () => {
  const number = getRandomInteger(0, 100);
  const correctAnswer = getCorrectAnswer(number);
  return [number, correctAnswer];
};

const startBrainEven = () => {
  startGame(RULES, getInfoForRound);
};

export default startBrainEven;
