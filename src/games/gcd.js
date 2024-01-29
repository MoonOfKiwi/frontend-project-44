const getRules = () => ('Find the greatest common divisor of given numbers.');

const getRandomInteger = () => {
  const min = 1;
  const max = 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

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
  const randomNum1 = getRandomInteger();
  const randomNum2 = getRandomInteger();

  const statement = `${randomNum1} ${randomNum2}`;
  const correctAnswer = getCorrectAnswer(randomNum1, randomNum2);
  return [statement, correctAnswer];
};

export { getRules, getInfoForRound };
