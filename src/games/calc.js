import getRandomInteger from '../randomNumGenerator.js';

const Rules = 'What is the result of the expression?';

const getRandomMathSymbol = () => {
  const mathSymbols = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * mathSymbols.length);
  return mathSymbols[randomIndex];
};

const getCorrectAnswer = (operand1, operand2, symbol) => {
  let result = 0;
  switch (symbol) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    default:
      break;
  }
  return result.toString();
};

const getInfoForRound = () => {
  const operand1 = getRandomInteger(0, 10);
  const operand2 = getRandomInteger(0, 10);
  const mathSymbol = getRandomMathSymbol();

  const expression = `${operand1} ${mathSymbol} ${operand2}`;
  const correctAnswer = getCorrectAnswer(operand1, operand2, mathSymbol);

  return [expression, correctAnswer];
};

export { Rules, getInfoForRound };
