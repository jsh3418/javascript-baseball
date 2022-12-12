const { Console, Random } = require("@woowacourse/mission-utils");
const GAME = require("./constants/constant");

class App {
  constructor() {
    this.computerAnswer = [];
  }

  play() {
    Console.print(GAME.MESSAGE.START);
    this.computerAnswer = this.generateComputerAnswer();
    this.readAnswer();
  }

  generateComputerAnswer() {
    const answer = [];

    while (answer.length < GAME.COMPUTER_ANSWER.LENGTH) {
      const number = Random.pickNumberInRange(GAME.COMPUTER_ANSWER.RANGE.MIN, GAME.COMPUTER_ANSWER.RANGE.MAX);

      if (!answer.includes(number)) {
        answer.push(number);
      }
    }

    return answer;
  }

  readAnswer() {
    Console.readLine(GAME.MESSAGE.REQUEST.GUESS_ANSWER, (userAnswer) => {
      const [ball, strike] = this.compareAnswers(this.computerAnswer, userAnswer);
      this.printHint(ball, strike);

      if (strike !== GAME.COMPUTER_ANSWER.LENGTH) {
        this.readAnswer();
      }
    });
  }

  compareAnswers(computerAnswer, userAnswer) {
    userAnswer = userAnswer.split("").map(Number);

    let [ball, strike] = [0, 0];

    computerAnswer.forEach((number, index) => {
      if (number === userAnswer[index]) {
        strike++;

        return;
      }

      if (computerAnswer.includes(userAnswer[index])) {
        ball++;

        return;
      }
    });

    return [ball, strike];
  }

  printHint(ball, strike) {
    const arr = [];

    if (ball !== 0) {
      arr.push(ball + GAME.MESSAGE.HINT.BALL);
    }

    if (strike !== 0) {
      arr.push(strike + GAME.MESSAGE.HINT.STRIKE);
    }

    if (!ball && !strike) {
      Console.print(GAME.MESSAGE.HINT.NOTHING);

      return;
    }

    Console.print(arr.join(" "));
  }
}

const app = new App();
app.play();

module.exports = App;
