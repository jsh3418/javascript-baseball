const MESSAGE = {
  GAME_START: "숫자 야구 게임을 시작합니다.",
  REQUEST_ANSWER: "숫자를 입력해주세요 : ",
  GAME_END: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  REQUEST_RESTART_OR_NOT: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
};

const GAME = {
  STRIKE: "스트라이크",
  BALL: "볼",
  NOTHING: "낫싱",
  THREE_STRIKE_OUT: 3,
  ANSWER_LENGTH: 3,

  RESTART: {
    YES: "1",
    NO: "2",
  },

  ANSWER_RANGE: {
    MIN: 1,
    MAX: 9,
  },
};

module.exports = { MESSAGE, GAME };
