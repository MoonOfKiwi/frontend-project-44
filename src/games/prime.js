import getRandomInteger from '../randomNumGenerator.js';
import startGame from '../index.js';

const RULES = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getCorrectAnswer = (number) => {
  if (number <= 1) return 'no';
  if (number === 2) return 'yes';

  const maxDivider = Math.sqrt(number);

  for (let divider = 2; divider <= maxDivider; divider += 1) {
    if (number % divider === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const getInfoForRound = () => {
  const number = getRandomInteger(1, 100);
  const correctAnswer = getCorrectAnswer(number);
  return [number, correctAnswer];
};

const startBrainPrime = () => {
  startGame(RULES, getInfoForRound);
};

export default startBrainPrime;
