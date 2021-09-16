import UserProfileProps from './IUserProfile'

import Text from '../Text/Text';
import emailIcon from '../../assets/email.png';
import phoneIcon from '../../assets/phone.png';
import websiteIcon from '../../assets/website.png';
import addressIcon from '../../assets/address.png';
import companyIcon from '../../assets/company.png';
import { getColor, getNameInitImg } from '../../utils/nameInitImg'
import './userProfile.scss'


const UserProfile = (props: UserProfileProps) => {
  const { avatar, address, name, email, phone, website, company } = props;

  const { streetAddress, city, state, zipCode } = address;
  const fullAddress = streetAddress + ', ' + city + ', ' + state + ', ' + zipCode;

  const { companyName, companySuffix, catchPhrase } = company;
  const companyFullName = companyName + ' ' + companySuffix;

  const nameInit = {
    size: 500,
    color: getColor(),
    name,
  }

  const avatarUrl = avatar ? avatar : getNameInitImg(nameInit);
  const baseClass = 'user-profile';

  return (
    <div className={baseClass}>


      <div className={`${baseClass}-avatar`}>
        <img src={avatarUrl} />
      </div>

      <div className={`${baseClass}-details`}>
        <Text
          content={name}
          contentClass={`${baseClass}-name `}
        />

        <Text
          content={email}
          icon={emailIcon}
          contentClass={`${baseClass}-text ${baseClass}-email `}
        />

        <Text
          content={fullAddress}
          icon={addressIcon}
          contentClass={`${baseClass}-text ${baseClass}-address `}
        />

        <Text
          content={phone}
          icon={phoneIcon}
          contentClass={`${baseClass}-text ${baseClass}-phone `}
        />

        <Text
          content={website}
          icon={websiteIcon}
          type='link'
          contentClass={`${baseClass}-text ${baseClass}-website `}
        />

        <div className={`${baseClass}-company`}>
          <img src={companyIcon} />

          <div>
            <Text content={companyFullName} contentClass={`${baseClass}-company-companyName `} />
            <Text content={catchPhrase} contentClass={`${baseClass}-company-catchPhrase `} />
          </div>
        </div>

      </div>

    </div>
  )
}

export default UserProfile;
