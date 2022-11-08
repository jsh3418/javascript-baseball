const MESSAGE = {
  ERROR: {
    ANSWER_LENGTH_MUST_BE_THREE: "입력 에러! 숫자 3자리를 입력해주세요!",
    ANSWER_IS_MUST_BE_DIFFERENT_EACH_NUMBER: "입력 에러! 숫자 3개는 각각 다른 숫자여야 합니다!",
  },

  COMPARE_ANSWER: {
    THREE_STRIKE: "3스트라이크",
    NOTHING: "낫싱",
  },

  REQUEST: {
    USER_ANSWER: "숫자를 입력해주세요. : ",
    IS_CONTINUE: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
  },

  GAME_PROGRESS: {
    START: "숫자 야구 게임을 시작합니다.",
    END: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
    SHUTDOWN: "게임을 종료합니다",
  },
};

module.exports = MESSAGE;
