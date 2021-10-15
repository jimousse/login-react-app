import classes from './LoginButton.module.css';

const LoginButton = (props) => {
  const cssClasses = [classes['login-button']];
  if (props.isDisabled) {
    cssClasses.push(classes['disabled']);
  }
  return <button className={cssClasses.join(' ')}>Login</button>;
};

export default LoginButton;
