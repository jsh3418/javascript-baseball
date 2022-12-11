const { Console, Random } = require("@woowacourse/mission-utils");
const { MESSAGE, GAME } = require("./constants/constant");
const validateAnswer = require("./validation/validateAnswer");
const validateRestartAnswer = require("./validation/validateRestartAnswer");

class App {
  constructor() {
    this.computerAnswer = [];
  }

  play() {
    Console.print(MESSAGE.GAME_START);
    this.initGame();
  }

  initGame() {
    this.computerAnswer = this.makeComputerAnswer();
    this.readAnswer();
  }

  makeComputerAnswer() {
    const answer = [];

    while (answer.length < GAME.ANSWER_LENGTH) {
      const number = Random.pickNumberInRange(GAME.ANSWER_RANGE.MIN, GAME.ANSWER_RANGE.MAX);

      if (!answer.includes(number)) {
        answer.push(number);
      }
    }

    return answer;
  }

  readAnswer() {
    Console.readLine(MESSAGE.REQUEST_ANSWER, (answer) => {
      validateAnswer(answer);
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
      validateRestartAnswer(answer);

      if (answer === GAME.RESTART.YES) {
        this.initGame();
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
