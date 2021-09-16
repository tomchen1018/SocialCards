import TextInput from '../Inputs/TextInput';
import UserProfileProps from './IUserProfile'

const UserProfileForm = (props: UserProfileProps) => {
  const { address, name, email, phone, website, company, id, hideUserProfileForm,
    submitUserProfileForm } = props;

  const { streetAddress, city, state, zipCode } = address;
  const isNewUser = id === 0;
  const baseClass = 'user-profile-form';
  const actionClass = `${baseClass}-${isNewUser ? 'new' : 'edit'}`;

  const handleCancelEvent = () => {
    if (hideUserProfileForm) {
      hideUserProfileForm();
    }
  }

  const handleSubmitEvent = (e: any) => {
    e.preventDefault()
    if (submitUserProfileForm) {
      const {
        name,
        email,
        phone,
        website,
        streetAddress,
        city,
        state,
        zipCode,
        company
      } = e.target.elements

      const data = {
        id: id,
        name: name.value,
        email: email.value,
        phone: phone.value,
        website: website.value,
        streetAddress: streetAddress.value,
        city: city.value,
        state: state.value,
        zipCode: zipCode.value,
        company: company.value
      }

      submitUserProfileForm(data);
    }

    if (hideUserProfileForm) {
      hideUserProfileForm();
    }


  }


  return (
    <form className={`${baseClass} ${actionClass}`} onSubmit={handleSubmitEvent}>
      <h3>
        {`${isNewUser ? "Add" : "Edit"} User Profile`}
      </h3>

      <TextInput id='name' label="Name" content={name} />
      <TextInput id='email' label="Email" content={email} />
      <TextInput id='phone' label="Phone" content={phone} />
      <TextInput id='website' label="Website" content={website} />
      <TextInput id='streetAddress' label="Street" content={streetAddress} />
      <TextInput id='city' label="City" content={city} />
      <TextInput id='state' label="State" content={state} />
      <TextInput id='zipCode' label="ZipCode" content={zipCode} />
      <TextInput id='company' label="Company" content={company.companyName + company.companySuffix} />

      <button type='button' onClick={handleCancelEvent}> Cancel </button>
      <button type='submit' > Submit </button>
    </form >
  )
}

export default UserProfileForm;