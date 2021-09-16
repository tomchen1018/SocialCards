import * as faker from 'faker';

let users: any[] = [];

export const generateUsers = () => {
  for (let id = 1; id <= 200; id++) {

    const { findName } = faker.name;
    const { email, url } = faker.internet;
    const { streetAddress, city, state, zipCode } = faker.address;
    const { companyName, suffixes, catchPhrase } = faker.company;

    const phone = faker.phone.phoneNumber();

    // create some empty avatars for showing name init img
    const avatar = id % (3) !== 0 ? faker.image.avatar() : '';

    const address = {
      streetAddress: streetAddress(),
      city: city(),
      state: state(),
      zipCode: zipCode(),
    };

    const randomCompanySuffix = Math.floor(Math.random() * 4);

    const company = {
      companyName: companyName(),
      catchPhrase: catchPhrase(),
      companySuffix: suffixes()[randomCompanySuffix]
    };

    users.push({
      "id": id,
      "avatar": avatar,
      "address": address,
      "email": email(),
      "name": findName(),
      "phone": phone,
      "website": url(),
      "company": company
    });
  }

  return { "data": users }
}


export const postUser = (user: any) => {
  const { data } = user;
  const { name, email, phone, website, city, state, streetAddress, zipCode, company } = data;

  const updatedUsers = users.map((profile: any) => {
    if (profile.id === data.id) {
      profile.name = name;
      profile.email = email;
      profile.phone = phone;
      profile.website = website;
      profile.address.streetAddress = streetAddress;
      profile.address.city = city;
      profile.address.state = state;
      profile.address.zipCode = zipCode;
      profile.company.companyName = company;
    }
    return profile;
  })

  return { "data": updatedUsers }
}


export const addNewUser = (user: any) => {
  const { data } = user;
  const { name, email, phone, website, city, state, streetAddress, zipCode, company } = data;

  const address = {
    streetAddress,
    city,
    state,
    zipCode,
  };

  const newCompany = {
    companyName: company
  };

  const newUser = {
    id: users.length + 1,
    name,
    email,
    phone,
    website,
    address,
    company: newCompany
  };

  users.push(newUser);

  return { "data": users }
}

