import regexChecker from '../loginChecker/loginChecker';

export default function loginValidation() {
  const login = document.querySelector('#login') as HTMLElement;
  const password = document.querySelector('#password') as HTMLElement;

  const loginError = document.querySelector('#wrong-login') as HTMLElement;
  const passwordError = document.querySelector(
    '#wrong-password'
  ) as HTMLElement;

  login.onfocus = (subEventOne) => {
    const boolCheck = regexChecker((<HTMLInputElement>login).value);
    const target = subEventOne.target as HTMLInputElement;
    if (boolCheck === false) {
      loginError.hidden = false;
    } else {
      loginError.hidden = true;
      loginError.hidden = !target.validity.patternMismatch;
    }
  };
  login.onblur = (subEventOne) => {
    const boolCheck = regexChecker((<HTMLInputElement>login).value);
    const target = subEventOne.target as HTMLInputElement;
    if (boolCheck === false) {
      loginError.hidden = false;
    } else {
      loginError.hidden = true;
      loginError.hidden = !target.validity.patternMismatch;
    }
  };

  if (password) {
    password.onfocus = (subEventTwo) => {
      const target = subEventTwo.target as HTMLInputElement;
      passwordError.hidden = !target.validity.patternMismatch;
    };
    password.onblur = (subEventTwo) => {
      const target = subEventTwo.target as HTMLInputElement;
      passwordError.hidden = !target.validity.patternMismatch;
    };
  }
}
