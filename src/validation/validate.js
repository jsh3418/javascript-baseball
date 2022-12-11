const { GAME } = require("../constants/constant");

const validateAnswer = (answer) => {
  validateAnswerIsNumber(answer);
  validateAnswerLength(answer);
};

const validateAnswerIsNumber = (answer) => {
  answer = Number(answer);

  if (typeof answer !== "number" || isNaN(answer)) {
    throw new Error("[ERROR] 숫자를 입력해주세요.");
  }
};

const validateAnswerLength = (answer) => {
  if (answer.length !== GAME.ANSWER_LENGTH) {
    throw new Error(`[ERROR] 숫자 ${GAME.ANSWER_LENGTH}자리 입력해야 합니다.`);
  }
};

module.exports = validateAnswer;
