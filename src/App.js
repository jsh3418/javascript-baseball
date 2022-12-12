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
    Console.readLine(GAME.MESSAGE.REQUEST.GUESS_ANSWER, (answer) => {});
  }
}

const app = new App();
app.play();

module.exports = App;
