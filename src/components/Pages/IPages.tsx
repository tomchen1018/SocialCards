import UserProfileProps from '../UserProfile/IUserProfile'

export default interface PagesProps {
  users: UserProfileProps[];
  onChangePage: Function;
}