const validateAnswer = (answer) => {
  validateAnswerIsNumber(answer);
};

const validateAnswerIsNumber = (answer) => {
  answer = Number(answer);

  if (typeof answer !== "number" || isNaN(answer)) {
    throw new Error("[ERROR] 숫자를 입력해주세요.");
  }
};

module.exports = validateAnswer;
