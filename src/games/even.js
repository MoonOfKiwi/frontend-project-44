const getRules = () => ('Answer "yes" if the number is even, otherwise answer "no".');

const getRandomInteger = () => {
  const min = -100000;
  const max = 100000;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getCorrectAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');

const getInfoForRound = () => {
  const number = getRandomInteger();
  const correctAnswer = getCorrectAnswer(number);
  return [number, correctAnswer];
};

export { getRules, getInfoForRound };
