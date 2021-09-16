import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HomeProps from './IHome'
import Users from '../../components/Users/Users';

import { getUsers, updateUser, addUser } from '../../actions/usersActions';
import { RootState } from '../../reducers/rootReducer';

const Home = (props: HomeProps) => {
  const dispatch = useDispatch();
  const { users } = useSelector((state: RootState) => {
    return state;
  });

  const handleupdateUser = (data: any) => {
    dispatch(updateUser(data));
  }

  const handleAddUser = (data: any) => {
    dispatch(addUser(data));
  }

  useEffect(() => {
    dispatch(getUsers());
  }, [])

  return <Users users={users.data} updateUser={handleupdateUser} addUser={handleAddUser} />
}

export default Home;
