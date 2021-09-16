export default interface UserProfileProps {
  address: {
    city: string;
    state: string;
    streetAddress: string;
    zipCode: string;
  };
  avatar: string;
  email: string;
  id: number;
  name: string;
  phone: string;
  website: string;
  company: {
    companyName: string;
    catchPhrase: string;
    companySuffix: string;
  };
  hideUserProfileForm?: Function;
  submitUserProfileForm?: Function;
}