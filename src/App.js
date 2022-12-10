const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.computerAnswer = [];
  }

  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.computerAnswer = this.makeComputerAnswer();
    this.readAnswer();
  }

  readAnswer() {
    Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      const playerAnswer = answer.split("");
    });
  }

  makeComputerAnswer() {
    const computerAnswer = [];

    while (computerAnswer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);

      if (!computerAnswer.includes(number)) {
        computerAnswer.push(number);
      }
    }

    return computerAnswer;
  }
}

const app = new App();
app.play();

module.exports = App;
