import { useEffect, useState } from 'react';

import UsersProps from './IUsers'
import UserProfile from '../UserProfile/UserProfile';
import UserProfileProps from '../UserProfile/IUserProfile';
import UserProfileForm from '../UserProfile/UserProfileForm';
import Pages from '../Pages/Pages';
import Modal from '../Modals/Modal';

import './users.scss'

const initUserState = {
  address: { city: '', state: '', streetAddress: '', zipCode: '' },
  avatar: '',
  email: '',
  id: 0,
  name: '',
  phone: '',
  website: '',
  company: { companyName: '', catchPhrase: '', companySuffix: '' },
}

const Users = (props: UsersProps) => {
  const { users, updateUser, addUser } = props;
  const [isPageUpdated, setIsPageUpdated] = useState(false);
  const [pageOfUsers, setPageOfUsers] = useState([...users]);
  const [showModal, setShowModal] = useState(false);
  const [userDetails, setUserDetails] = useState<UserProfileProps>(initUserState);

  const handlePageChange = (pageUsers: UserProfileProps[]) => {
    setPageOfUsers(pageUsers)
  }

  const hideUserProfileForm = () => {
    setShowModal(false);
  }

  const openUserProfileForm = (user?: UserProfileProps) => {
    setShowModal(true);

    if (user) {
      setUserDetails(user);
    } else {
      setUserDetails(initUserState)
    }
  }

  const submitUserProfileForm = (data: any) => {
    setIsPageUpdated(true);

    if (data.id === 0) {
      addUser(data);
    } else {
      updateUser(data);
    }
  }

  useEffect(() => {
    if (isPageUpdated) {
      const updatedUser = users.slice(0, 15);
      setIsPageUpdated(false);
      setPageOfUsers(updatedUser);
    }
  }, [isPageUpdated])


  return (
    <div className='users-container'>
      <div className='users-content'>
        {
          pageOfUsers.map((user: UserProfileProps) => {
            return (
              <div onClick={() => openUserProfileForm(user)} key={user.id} className='user-profile'>
                <UserProfile {...user} />
              </div>
            )
          })
        }
      </div>

      <div className='users-actions'>
        <button className='users-actions-add' onClick={() => openUserProfileForm()}>
          <span> + </span>
          <span>Add Profile</span>
        </button>
      </div>

      <Pages
        users={users}
        onChangePage={(pageUsers: UserProfileProps[]) => handlePageChange(pageUsers)}
      />

      {
        showModal &&
        <Modal>
          <UserProfileForm
            {...userDetails}
            hideUserProfileForm={hideUserProfileForm}
            submitUserProfileForm={submitUserProfileForm}
          />
        </Modal>
      }

    </div>
  )


}

export default Users;
