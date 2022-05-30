import fetchApiClass from '../service/service';

async function LoginInfo(e: Event) {
  console.log('test from loginInfo');

  e.preventDefault();

  document.getElementById('lds-facebook')!.style.display = 'inline';

  const loginValue = (<HTMLInputElement>document.querySelector('#login')).value;
  const passwordValue = (<HTMLInputElement>document.querySelector('#password'))
    .value;

  const obj = {
    username: loginValue,
    password: passwordValue,
  };

  const url = 'http://10.130.19.30/api/login/access-token';

  try {
    const fetchAPI = new fetchApiClass();
    await fetchAPI.postLoginRequest(url, obj);
    location.pathname = '/mainpage';
  } catch (err) {
    if (err instanceof Error) {
      alert(err.message);
      throw err;
    }
  }

  document.getElementById('lds-facebook')!.style.display = 'none';
}

export default LoginInfo;
