import axios from 'axios';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserList from '../pages/ReduxPage/UserList';
import {
  getUsersFail,
  getUsersStart,
  getUsersSuccess,
} from '../redux/action/actions';

const UserListContainer = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.data);

  const getUsers = useCallback(async () => {
    try {
      dispatch(getUsersStart());
      const res = await axios.get('https://api.github.com/users');
      dispatch(getUsersSuccess(res.data));
    } catch (error) {
      dispatch(getUsersFail(error));
    }
  }, [dispatch]);

  return <UserList users={users} getUsers={getUsers} />;
};

export default UserListContainer;
