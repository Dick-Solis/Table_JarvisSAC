import { STORE } from '../store.js';

export async function dataJsonOrdered() {
  const dataJson = [];
  for (let user of STORE.users) {
    dataJson.push({
      gender: user.gender,
      name_title: user.name.title,
      name_first: user.name.first,
      name_last: user.name.last,
      street_number: user.location.street.number,
      street_name: user.location.street.name,
      city: user.location.city,
      state: user.location.state,
      country: user.location.country,
      postcode: user.location.postcode,
      longitude: user.location.coordinates.longitude,
      latitude: user.location.coordinates.latitude,
      offset: user.location.timezone.offset,
      description: user.location.timezone.description.replaceAll(",","-"),
      email: user.email,
      login_uuid: user.login.uuid,
      login_username: user.login.username,
      login_password: user.login.password,
      login_salt: user.login.salt,
      login_md5: user.login.md5,
      login_sha1: user.login.sha1,
      login_sha256: user.login.sha256,
      dob_date: user.dob.date,
      dob_age: user.dob.age,
      registered_date: user.registered.date,
      registred_age: user.registered.age,
      phone: user.phone,
      cell: user.cell,
      id_name: user.id.name,
      id_value: user.id.value,
      picture_large: user.picture.large,
      picture_medium: user.picture.medium,
      picture_thumbnail: user.picture.thumbnail,
      nat: user.nat,
    });
  }
  return dataJson;
}

