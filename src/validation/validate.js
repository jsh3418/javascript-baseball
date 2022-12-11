const { GAME } = require("../constants/constant");

const validateAnswer = (answer) => {
  validateAnswerIsNumber(answer);
  validateAnswerLength(answer);
  validateDuplicateNumber(answer);
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

const validateDuplicateNumber = (answer) => {
  if (answer.length !== [...new Set(answer)].length) {
    throw new Error(`${GAME.ANSWER_LENGTH}가지 숫자는 서로 다른 숫자여야 합니다.`);
  }
};

module.exports = validateAnswer;
