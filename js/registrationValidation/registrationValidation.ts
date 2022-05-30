import regexChecker from '../loginChecker/loginChecker';

export default function registrationValidation() {
  const email: HTMLInputElement | null = document.querySelector('#email');
  const login: HTMLInputElement | null = document.querySelector('#login');
  const name: HTMLInputElement | null = document.querySelector('#name');
  const surname: HTMLInputElement | null = document.querySelector('#surname');
  const phone: HTMLInputElement | null = document.querySelector('#phone');
  const password: HTMLInputElement | null = document.querySelector('#password');
  const repeatedPassword: HTMLInputElement | null =
    document.querySelector('#repeat-password');

  const emailError = document.querySelector('#wrong-email') as HTMLElement;
  if (email) {
    email.onfocus = (event: FocusEvent) => {
      const target = event.target as HTMLInputElement;
      emailError.hidden = !target.validity.patternMismatch;
    };
    email.onblur = (event: Event) => {
      const target = event.target as HTMLInputElement;
      emailError.hidden = !target.validity.patternMismatch;
    };
  }

  const loginError = document.querySelector('#wrong-login') as HTMLElement;
  login!.onfocus = (subEventTwo: Event) => {
    const boolCheck = regexChecker((<HTMLInputElement>login).value);
    const target = subEventTwo.target as HTMLInputElement;
    if (boolCheck === false) {
      loginError!.hidden = false;
    } else {
      loginError!.hidden = true;
      loginError.hidden = !target.validity.patternMismatch;
    }
  };

  login!.onblur = (subEventTwo: Event) => {
    const boolCheck = regexChecker((<HTMLInputElement>login).value);
    const target = subEventTwo.target as HTMLInputElement;
    if (boolCheck === false) {
      loginError!.hidden = false;
    } else {
      loginError!.hidden = true;
      loginError.hidden = !target.validity.patternMismatch;
    }
  };

  const nameError = document.querySelector('#wrong-name') as HTMLElement;
  if (name) {
    name.onfocus = (subEventThree: Event) => {
      const target = subEventThree.target as HTMLInputElement;
      nameError.hidden = !target.validity.patternMismatch;
    };
    name.onblur = (subEventThree: Event) => {
      const target = subEventThree.target as HTMLInputElement;
      nameError.hidden = !target.validity.patternMismatch;
    };
  }

  const surnameError = document.querySelector('#wrong-surname') as HTMLElement;
  if (surname) {
    surname.onfocus = (subEventFour: Event) => {
      const target = subEventFour.target as HTMLInputElement;
      surnameError.hidden = !target.validity.patternMismatch;
    };
    surname.onblur = (subEventFour: Event) => {
      const target = subEventFour.target as HTMLInputElement;
      surnameError.hidden = !target.validity.patternMismatch;
    };
  }

  const phoneError = document.querySelector('#wrong-phone') as HTMLElement;
  if (phone) {
    phone.onfocus = (subEventFive: Event) => {
      const target = subEventFive.target as HTMLInputElement;
      phoneError.hidden = !target.validity.patternMismatch;
    };
    phone.onblur = (subEventFive: Event) => {
      const target = subEventFive.target as HTMLInputElement;
      phoneError.hidden = !target.validity.patternMismatch;
    };
  }

  const passwordError = document.querySelector(
    '#wrong-password'
  ) as HTMLElement;
  if (password) {
    password.onfocus = (subEventSix: Event) => {
      const target = subEventSix.target as HTMLInputElement;
      passwordError.hidden = !target.validity.patternMismatch;
    };
    password.onblur = (subEventSix: Event) => {
      const target = subEventSix.target as HTMLInputElement;
      passwordError.hidden = !target.validity.patternMismatch;
    };
  }

  const repeatedPasswordError = document.querySelector(
    '#wrong-repeated-password'
  ) as HTMLElement;
  if (repeatedPassword) {
    repeatedPassword!.onfocus = (subEventSeven: Event) => {
      const target = subEventSeven.target as HTMLInputElement;
      repeatedPasswordError.hidden = !target.validity.patternMismatch;
    };
    repeatedPassword!.onblur = (subEventSeven: Event) => {
      const target = subEventSeven.target as HTMLInputElement;
      repeatedPasswordError.hidden = !target.validity.patternMismatch;
    };
  }
}
