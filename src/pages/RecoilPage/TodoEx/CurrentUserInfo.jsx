import axios from 'axios';
import React from 'react';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import ErrorBoundary from './ErrorBoundary';

const currentUserIDState = atom({
  key: 'CurrentUserID',
  default: 1,
});

const tableOfUsers = [{ name: 'jimmy' }, { name: 'choi' }];

// const currentUserNameState = selector({
//   key: 'CurrentUserName',
//   get: ({ get }) => {
//     return tableOfUsers[get(currentUserIDState)].name;
//   },
// });

const currentUserNameQuery = selector({
  key: 'CurrentUserName',
  get: async ({ get }) => {
    const response = await axios.get(`/data/data.json`);
    return response.data.data[get(currentUserIDState)].name;
  },
});

const CurrentUser = () => {
  const userName = useRecoilValue(currentUserNameQuery);
  const [id, setId] = useRecoilState(currentUserIDState);
  return (
    <>
      <div>{userName}</div>
      <input
        type="text"
        value={id}
        onChange={e => {
          setId(e.target.value);
        }}
      />
    </>
  );
};

const CurrentUserInfo = () => {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={<div>Loading...</div>}>
        <CurrentUser />
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default CurrentUserInfo;
