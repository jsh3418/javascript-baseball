const GAME = {
  MESSAGE: {
    START: "숫자 야구 게임을 시작합니다.",
    END: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",

    REQUEST: {
      GUESS_ANSWER: "숫자를 입력해주세요 : ",
      RESTART_OR_NOT: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
    },

    HINT: {
      BALL: "볼",
      STRIKE: "스트라이크",
      NOTHING: "낫싱",
    },
  },

  COMPUTER_ANSWER: {
    LENGTH: 3,

    RANGE: {
      MIN: 1,
      MAX: 9,
    },
  },
};

module.exports = GAME;
