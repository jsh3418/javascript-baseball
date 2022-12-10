const { Console, Random } = require("@woowacourse/mission-utils");
const { MESSAGE, GAME } = require("./constants/constant");

class App {
  constructor() {
    this.computerAnswer = [];
  }

  play() {
    Console.print(MESSAGE.GAME_START);
    this.initComputerAnswer();
  }

  initComputerAnswer() {
    this.computerAnswer = this.makeComputerAnswer();
    this.readAnswer();
  }

  makeComputerAnswer() {
    const computerAnswer = [];

    while (computerAnswer.length < GAME.ANSWER_LENGTH) {
      const number = Random.pickNumberInRange(GAME.ANSWER_RANGE.MIN, GAME.ANSWER_RANGE.MAX);

      if (!computerAnswer.includes(number)) {
        computerAnswer.push(number);
      }
    }

    return computerAnswer;
  }

  readAnswer() {
    Console.readLine(MESSAGE.REQUEST_ANSWER, (answer) => {
      const playerAnswer = answer.split("").map(Number);
      const [strike, ball] = this.compareAnswers(this.computerAnswer, playerAnswer);

      this.printHint(strike, ball);

      if (strike === GAME.THREE_STRIKE_OUT) {
        Console.print(MESSAGE.GAME_END);
        this.considerRestart();

        return;
      }

      this.readAnswer();
    });
  }

  compareAnswers(computerAnswer, playerAnswer) {
    let strike = 0;
    let ball = 0;

    computerAnswer.forEach((number, index) => {
      if (number === playerAnswer[index]) {
        strike++;
        return;
      }

      if (playerAnswer.includes(number)) {
        ball++;
        return;
      }
    });

    return [strike, ball];
  }

  printHint(strike, ball) {
    const arr = [];

    if (ball !== 0) {
      arr.push(ball + GAME.BALL);
    }

    if (strike !== 0) {
      arr.push(strike + GAME.STRIKE);
    }

    if (arr.length === 0) {
      Console.print(GAME.NOTHING);
      return;
    }

    Console.print(arr.join(" "));
  }

  considerRestart() {
    Console.readLine(MESSAGE.REQUEST_RESTART_OR_NOT, (answer) => {
      if (answer === GAME.RESTART.YES) {
        this.initComputerAnswer();
      }

      if (answer === GAME.RESTART.NO) {
        Console.close();
      }
    });
  }
}

const app = new App();
app.play();

module.exports = App;
