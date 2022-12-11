const { GAME } = require("../constants/constant");

const validateRestartAnswer = (answer) => {
  if (answer !== GAME.RESTART.YES && answer !== GAME.RESTART.NO) {
    throw new Error(`[ERROR] 재시작하려면 ${GAME.RESTART.YES}, 종료하려면 ${GAME.RESTART.NO}를 입력하세요.`);
  }
};

module.exports = validateRestartAnswer;
