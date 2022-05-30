import Login from '../pages/login/';
import Registration from '../pages/registration/';
import error404 from '../pages/404/';
import error500 from '../pages/500/';
import LoginInfo from './loginInfo/loginInfo';
import RegistrationInfo from './registrationInfo/registrationInfo';
import mainpage from '../pages/mainpage/';
import mainpageInfo from './mainpageInfo/mainpageInfo';
import mainpageExit from './mainpageExit/mainpageExit';
import mainpageAddTaskFetch from './mainpageAddTaskFetch/mainpageAddTaskFetch';
import mainpageAddPostWindow from './mainpageAddPostWindow/mainpageAddPostWindow';
import mainpageProfileWindow from './mainpageProfileWindow/mainpageProfileWindow';
import registrationValidation from './registrationValidation/registrationValidation';
import loginValidation from './loginValidation/loginValidation';

document.getElementById('lds-facebook')!.style.display = 'none';

const app = document.getElementById('app') as HTMLElement;

const routes = [
  {
    path: '/404',
    view: error404,
  },
  {
    path: '/',
    view: Login,
  },
  {
    path: '/registration',
    view: Registration,
  },
  {
    path: '/mainpage',
    view: mainpage,
  },
  {
    path: '/500',
    view: error500,
  },
];

const router = async () => {
  let isMatch = routes.map((route) => {
    return {
      route,
      isMatch: route.path === location.pathname,
    };
  });
  let match = isMatch.find((route) => route.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }
  let matchedView = match.route.view;

  app.appendChild(await matchedView());

  const accessToken = sessionStorage.getItem('access_token');

  if (location.pathname === '/') {
    loginValidation();

    if (
      sessionStorage.length &&
      accessToken !== 'undefined' &&
      accessToken!.length > 50
    ) {
      location.pathname = '/mainpage';
    }
    document
      .getElementById('loginButton')!
      .addEventListener('click', (e) => LoginInfo(e));
  }

  if (location.pathname === '/registration') {
    registrationValidation();

    if (sessionStorage.length && accessToken !== 'undefined') {
      location.pathname = '/';
    }
    document
      .getElementById('regButton')!
      .addEventListener('click', (e) => RegistrationInfo(e));
  }

  if (location.pathname === '/mainpage') {
    document.getElementById('post-correct')!.style.display = 'none';
    document.getElementById('post-incorrect')!.style.display = 'none';
    if (!sessionStorage.length || accessToken === 'undefined') {
      location.pathname = '/';
    } else {
      mainpageInfo();
      document
        .getElementById('mainpageExit')!
        .addEventListener('click', () => mainpageExit());
      document
        .getElementById('mainpageAddPost')!
        .addEventListener('click', (e) => mainpageAddPostWindow(e));
      document
        .getElementById('mainpageMyProfile')!
        .addEventListener('click', (e) => mainpageProfileWindow(e));
      document
        .getElementById('add-post-button')!
        .addEventListener('click', (e) => mainpageAddTaskFetch(e));
    }
  }
};

window.addEventListener('load', router);
