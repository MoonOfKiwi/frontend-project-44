import getRandomInteger from '../randomNumGenerator.js';

const Rules = 'What number is missing in the progression?';

const getProgression = (start, difference, length) => {
  const progression = [];
  let element = start;

  for (let i = 0; i < length; i += 1) {
    progression.push(element);
    element += difference;
  }

  return progression;
};

const getQuestionAndAnswer = (progression, length, indexOfHiddenElement) => {
  const formattedProgression = [];
  let hiddenElement = 0;

  for (let i = 0; i < length; i += 1) {
    if (i === indexOfHiddenElement) {
      formattedProgression.push('..');
      hiddenElement = progression[i];
    } else {
      formattedProgression.push(progression[i]);
    }
  }

  const correctAnswer = hiddenElement.toString();
  const question = formattedProgression.join(' ');

  return [question, correctAnswer];
};

const getInfoForRound = () => {
  const firstElement = getRandomInteger(1, 100);
  const commonDifference = getRandomInteger(1, 10);
  const progressionLength = getRandomInteger(5, 10);
  const indexOfHiddenElement = getRandomInteger(0, progressionLength - 1);

  const progression = getProgression(firstElement, commonDifference, progressionLength);
  const infoForRound = getQuestionAndAnswer(progression, progressionLength, indexOfHiddenElement);
  return infoForRound;
};

export { Rules, getInfoForRound };
