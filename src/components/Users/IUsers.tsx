import UserProfileProps from '../UserProfile/IUserProfile'

export default interface UsersProps {
  users: UserProfileProps[];
  updateUser: Function;
  addUser: Function;
}