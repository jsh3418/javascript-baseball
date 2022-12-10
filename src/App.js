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
      const playerAnswer = answer.split("").map(Number);
      const [strike, ball] = this.compareAnswers(this.computerAnswer, playerAnswer);

      this.printHint(strike, ball);

      if (strike === 3) {
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

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
      arr.push(ball + "볼");
    }

    if (strike !== 0) {
      arr.push(strike + "스트라이크");
    }

    if (arr.length === 0) {
      Console.print("낫싱");
      return;
    }

    Console.print(arr.join(" "));
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
