import fetchApiClass from '../service/service';
import saveNewProfileData from '../saveNewProfileData/saveNewProfileData';

async function mainpageProfileWindow(e: Event) {
  e.preventDefault();

  document.getElementById('profile-container')!.style.display = 'inline';
  document.getElementById('addTaskWindow')!.style.display = 'none';

  let jsonReq: any = '';
  try {
    const url = `http://10.130.19.30/api/users/me`;
    const fetchAPI = new fetchApiClass();
    jsonReq = await fetchAPI.getProfileRequest(
      url,
      (sessionStorage as any).getItem('access_token')
    );
  } catch (err) {
    if (err instanceof Error) {
      alert(err.message);
      throw err;
    }
  }

  console.log(jsonReq);

  const profileEmail = document.getElementById(
    'profile-email'
  ) as HTMLInputElement;
  const firstName = document.getElementById('profile-name') as HTMLInputElement;
  const lastName = document.getElementById(
    'profile-surname'
  ) as HTMLInputElement;
  const login = document.getElementById('profile-login') as HTMLInputElement;
  const phone = document.getElementById('profile-phone') as HTMLInputElement;

  profileEmail.value = jsonReq['email'];
  firstName.value = jsonReq['first_name'];
  lastName.value = jsonReq['last_name'];
  login.value = jsonReq['username'];
  phone.value = jsonReq['telephone'];

  document
    .getElementById('profile-save')
    ?.addEventListener('click', (e) => saveNewProfileData(e, jsonReq['email']));
}

export default mainpageProfileWindow;
