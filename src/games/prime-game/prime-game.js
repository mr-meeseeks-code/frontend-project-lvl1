import BaseGame from '../../common/game.js';

const isPrime = (number) => {
  if (typeof number !== 'number') {
    throw new Error('Put number to this function');
  }
  const sqrt = Math.sqrt(number);
  for (let i = 2; i <= sqrt; i += 1) {
    if (number % i === 0) return false;
  }
  return number > 1;
};

const primeGame = (rightAnswersToWin = 3, maxGeneratedNumber = 100) => {
  const baseGame = new BaseGame(
    rightAnswersToWin,
    maxGeneratedNumber,
    'Answer "yes" if given number is prime. Otherwise answer "no".',
  );
  baseGame.generateQuestionAndAnswer = () => {
    const number = baseGame.getRandomInt(baseGame.maxGeneratedNumber);
    const isNumberPrime = isPrime(number);
    const correctAnswer = baseGame.convertToAnswerString(isNumberPrime);
    const resultObject = {
      question: `${number}`,
      answer: correctAnswer,
    };

    return resultObject;
  };

  return baseGame;
};

export default primeGame;