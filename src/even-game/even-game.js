import BaseGame from '../common/game.js';

const isEven = (number) => {
  if (typeof number !== 'number') {
    throw new Error('Put number to this function');
  }
  return number % 2 === 0;
};

class EvenGame extends BaseGame {
  constructor(rightAnswersToWin = 3, maxGeneratedNumber = 100) {
    super(
      rightAnswersToWin,
      maxGeneratedNumber,
      'Answer "yes" if the number is even, otherwise answer "no".',
    );
  }

  generateQuestionAndAnswer() {
    const number = BaseGame.getRandomInt(this.maxGeneratedNumber);
    const isNumberEven = isEven(number);
    const correctAnswer = BaseGame.convertToAnswerString(isNumberEven);
    const resultObject = {
      question: `${number}`,
      answer: correctAnswer,
    };

    return resultObject;
  }
}

export default EvenGame;
