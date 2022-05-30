import fetchApiClass from '../service/service';

async function RegistrationInfo(e: Event) {
  e.preventDefault();

  document.getElementById('lds-facebook')!.style.display = 'inline';

  const emailValue = (<HTMLInputElement>document.querySelector('#email')).value;
  const loginValue = (<HTMLInputElement>document.querySelector('#login')).value;
  const nameValue = (<HTMLInputElement>document.querySelector('#name')).value;
  const surnameValue = (<HTMLInputElement>document.querySelector('#surname'))
    .value;
  const phoneValue = (<HTMLInputElement>document.querySelector('#phone')).value;
  const passwordValue = (<HTMLInputElement>document.querySelector('#password'))
    .value;

  const obj = {
    email: `${emailValue}`,
    username: `${loginValue}`,
    first_name: `${nameValue}`,
    last_name: `${surnameValue}`,
    telephone: `${phoneValue}`,
    password: `${passwordValue}`,
  };

  try {
    const url = 'http://10.130.19.30/api/register/';
    const fetchAPI = new fetchApiClass();
    // const jsonReq = await fetchAPI.postRegistrationRequest(url, obj);
    await fetchAPI.postRegistrationRequest(url, obj);
  } catch (err) {
    if (err instanceof Error) {
      alert(err.message);
      throw err;
    }
  }

  (<HTMLInputElement>document.getElementById('lds-facebook')).style.display =
    'none';
}

export default RegistrationInfo;
