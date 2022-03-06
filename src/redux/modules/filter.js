// 액션 타입 정의
const SHOW_ALL = 'study_react/filter/SHOW_ALL';
const SHOW_COMPLETE = 'study_react/filter/SHOW_COMPLETE';

// 액션 생성 함수
export const showAll = () => {
  return { type: SHOW_ALL };
};

export const showComplete = () => {
  return { type: SHOW_COMPLETE };
};

// 초기값
const initialState = 'ALL';

// 리듀서
const reducer = (previousState = initialState, action) => {
  switch (action.type) {
    case SHOW_COMPLETE:
      return 'COMPLETE';

    case SHOW_ALL:
      return 'ALL';

    default:
      return previousState;
  }
};

export default reducer;
