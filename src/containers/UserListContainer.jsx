import axios from 'axios';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserList from '../components/UserList';
import {
  getUsersFail,
  getUsersPromise,
  getUsersSagaStart,
  getUsersStart,
  getUsersSuccess,
  getUsersThunk,
} from '../redux/modules/users';

const UserListContainer = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.data);

  // const getUsers = useCallback(async () => {
  //   try {
  //     dispatch(getUsersStart());
  //     const res = await axios.get('https://api.github.com/users');
  //     dispatch(getUsersSuccess(res.data));
  //   } catch (error) {
  //     dispatch(getUsersFail(error));
  //   }
  // }, [dispatch]);

  const getUsers = useCallback(async () => {
    dispatch(getUsersSagaStart());
  }, [dispatch]);

  return <UserList users={users} getUsers={getUsers} />;
};

export default UserListContainer;
