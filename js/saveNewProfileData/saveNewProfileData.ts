import fetchApiClass from '../service/service';

export default async function saveNewProfileData(
  e: Event,
  emailChecker: String
) {
  e.preventDefault();

  let boolProfileDataCheck: boolean = true;
  let boolProfileUpdateCheck: boolean = false;

  const errorMsg = 'Wrong input';

  const regexEmail = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$');
  const profileEmail = document.getElementById(
    'profile-email'
  ) as HTMLInputElement;
  const email = regexEmail.test(profileEmail.value)
    ? profileEmail.value
    : errorMsg;
  if (email === errorMsg) {
    document.getElementById('profile-wrong-email')!.style.display = 'inline';
    boolProfileDataCheck = false;
  } else {
    document.getElementById('profile-wrong-email')!.style.display = 'none';
  }

  const regexNameSurname = new RegExp('[а-яА-ЯёЁa-zA-Z-]{3,}$');
  const profileName = document.getElementById(
    'profile-name'
  ) as HTMLInputElement;
  const name = regexNameSurname.test(profileName.value)
    ? profileName.value
    : errorMsg;
  if (name === errorMsg) {
    document.getElementById('profile-wrong-name')!.style.display = 'inline';
    boolProfileDataCheck = false;
  } else {
    document.getElementById('profile-wrong-name')!.style.display = 'none';
  }

  const profileSurname = document.getElementById(
    'profile-surname'
  ) as HTMLInputElement;
  const surname = regexNameSurname.test(profileSurname.value)
    ? profileSurname.value
    : errorMsg;
  if (surname === errorMsg) {
    boolProfileDataCheck = false;
    document.getElementById('profile-wrong-surname')!.style.display = 'inline';
  } else {
    document.getElementById('profile-wrong-surname')!.style.display = 'none';
  }

  const regexLogin = new RegExp('(?=.*[a-zA-Z-].*)[a-zA-Z0-9-_]+.{2,15}');
  const profileLogin = document.getElementById(
    'profile-login'
  ) as HTMLInputElement;
  const login = regexLogin.test(profileLogin.value)
    ? profileLogin.value
    : errorMsg;
  if (login === errorMsg) {
    boolProfileDataCheck = false;
    document.getElementById('profile-wrong-login')!.style.display = 'inline';
  } else {
    document.getElementById('profile-wrong-login')!.style.display = 'none';
  }

  const regexPhone = new RegExp('[+]?[0-9]{8,15}');
  const profilePhone = document.getElementById(
    'profile-phone'
  ) as HTMLInputElement;
  const phone = regexPhone.test(profilePhone.value)
    ? profilePhone.value
    : errorMsg;
  if (phone === errorMsg) {
    boolProfileDataCheck = false;
    document.getElementById('profile-wrong-phone')!.style.display = 'inline';
  } else {
    document.getElementById('profile-wrong-phone')!.style.display = 'none';
  }

  if (emailChecker === profileEmail.value) {
    alert('Please change email');
  } else {
    if (boolProfileDataCheck === false) {
      alert('Please change the data as per Company regulations');
    } else {
      const object = {
        email: profileEmail.value,
        first_name: profileName.value,
        last_name: profileSurname.value,
        login: profileLogin.value,
        telephone: profilePhone.value,
      };

      try {
        const url = `http://10.130.19.30/api/users/me`;
        const fetchAPI = new fetchApiClass();
        // const jsonUpdateReq = await fetchAPI.updateProfileRequest(url, object);
        await fetchAPI.updateProfileRequest(url, object);
        boolProfileUpdateCheck = true;
      } catch (err) {
        if (err instanceof Error) {
          alert(err.message);
          throw err;
        }
      }

      if (boolProfileUpdateCheck === true) {
        alert('Your profile has been succesfully updated');
        location.reload();
      }
    }
  }
}
