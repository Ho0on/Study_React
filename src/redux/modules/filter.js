import { handleActions } from 'redux-actions';
import { createActions } from 'redux-actions';

// // 액션 타입 정의
// const SHOW_ALL = 'study_react/filter/SHOW_ALL';
// const SHOW_COMPLETE = 'study_react/filter/SHOW_COMPLETE';

// // 액션 생성 함수
// export const showAll = () => {
//   return { type: SHOW_ALL };
// };

// export const showComplete = () => {
//   return { type: SHOW_COMPLETE };
// };

// 초기값
const initialState = 'ALL';

// // 리듀서
// const reducer = (previousState = initialState, action) => {
//   switch (action.type) {
//     case SHOW_COMPLETE:
//       return 'COMPLETE';

//     case SHOW_ALL:
//       return 'ALL';

//     default:
//       return previousState;
//   }
// };

// redux-actions : ducks pattern을 사용할떄 편하게 적용가능
export const { showAll, showComplete } = createActions(
  'SHOW_ALL',
  'SHOW_COMPLETE',
  {
    prefix: 'study_react/filter',
  }
);

const reducer = handleActions(
  {
    SHOW_ALL: (state, action) => 'ALL',
    SHOW_COMPLETE: () => 'COMPLETE',
  },
  initialState,
  { prefix: 'study_react/filter' }
);

export default reducer;
