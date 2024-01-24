import readlineSync from 'readline-sync';

const sayYourName = () => {
  const nameMan = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameMan}!`);
};

export default sayYourName;
