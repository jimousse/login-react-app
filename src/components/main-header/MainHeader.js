import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import LogoutButton from './LogoutButton';
import classes from './MainHeader.module.scss';

const MainHeader = () => {
  const authCtx = useContext(AuthContext);
  return (
    <header className={classes['main-header']}>
      <h1>Login App</h1>
      {authCtx.isLoggedIn && <LogoutButton />}
    </header>
  );
};

export default MainHeader;
