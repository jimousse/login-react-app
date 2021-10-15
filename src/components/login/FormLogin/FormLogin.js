import { useContext } from 'react';

import useInput from '../../../hooks/use-input';
import AuthContext from '../../../store/auth-context';

import LoginButton from '../LoginButton/LoginButton';
import UserIcon from '../../icons/UserIcon';
import CheckMark from '../../icons/CheckMark';
import CrossMark from '../../icons/CrossMark';
import LockIcon from '../../icons/LockIcon';
import FormInput from '../FormInputs/FormInput';

import { validateEmail, validatePassword } from '../../../utils/validation';

import classes from './FormLogin.module.css';

const FormLogin = () => {
  const authCtx = useContext(AuthContext);
  const {
    value: email,
    isValid: isEmailValid,
    reset: resetEmail,
    isTouched: emailTouched,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(validateEmail);

  const {
    value: password,
    isValid: isPasswordValid,
    reset: resetPassword,
    isTouched: passwordTouched,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput(validatePassword);

  const isFormValid = isEmailValid && isPasswordValid;

  const submitHandler = (event) => {
    event.preventDefault();
    if (!isFormValid) {
      return;
    }
    authCtx.onLogin();
    resetPassword();
    resetEmail();
  };

  const cssClassesEmailMark = isEmailValid
    ? [classes['validation-mark-container']]
    : [classes['validation-mark-container'], classes['has-tooltip']];

  const emailInput = (
    <div className={classes.control}>
      <div className={classes['input-icon']}>
        <UserIcon size="18" color="#123456" />
      </div>
      <FormInput
        type="email"
        id="email"
        placeholder="Email"
        label="Email"
        value={email}
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
      />
      {emailTouched && (
        <span className={cssClassesEmailMark.join(' ')}>
          {!isEmailValid && (
            <span className={classes.tooltip}>
              Please, enter a valid email address.
            </span>
          )}
          {isEmailValid && <CheckMark size="13" />}
          {!isEmailValid && <CrossMark size="10" />}
        </span>
      )}
    </div>
  );

  const cssClassesPasswordMark = isPasswordValid
    ? [classes['validation-mark-container']]
    : [classes['validation-mark-container'], classes['has-tooltip']];

  const passwordInput = (
    <div className={classes.control}>
      <div className={classes['input-icon']}>
        <LockIcon size="15" color="#123456" />
      </div>
      <FormInput
        type="password"
        id="password"
        placeholder="Password"
        label="Password"
        value={password}
        onChange={passwordChangeHandler}
        onBlur={passwordBlurHandler}
      />
      {passwordTouched && (
        <span className={cssClassesPasswordMark.join(' ')}>
          {!isPasswordValid && (
            <span className={classes['tooltip']}>
              Passwords should have at least 6 characters.
            </span>
          )}
          {isPasswordValid && <CheckMark size="13" />}
          {!isPasswordValid && <CrossMark size="10" />}
        </span>
      )}
    </div>
  );

  const loginAction = (
    <div className={classes.actions}>
      <LoginButton isDisabled={!isFormValid} />
    </div>
  );

  return (
    <form autoComplete="off" className={classes.form} onSubmit={submitHandler}>
      <div className={classes.welcome}>Welcome back!</div>
      {emailInput}
      {passwordInput}
      <div className={classes['forgot-password']}>
        <a className={classes['forgot-password-link']} href="/">
          Forgot Password ?
        </a>
      </div>
      {loginAction}
      <div className={classes['sign-in']}>
        <span className={classes['sign-in-text']}>
          Already have an account?
        </span>
        <a className={classes['sign-in-link']} href="/">
          Sign in.
        </a>
      </div>
    </form>
  );
};

export default FormLogin;
