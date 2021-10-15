import { Fragment, useContext } from 'react';
import AuthContext from './store/auth-context';
import MainHeader from './components/main-header/MainHeader';
import LoginCard from './components/login/LoginCard/LoginCard';
import Home from './components/home/Home';
import classes from './App.module.scss';

function App() {
  const ctx = useContext(AuthContext);
  const { isLoggedIn } = ctx;
  return (
    <Fragment>
      <MainHeader />
      <div className={classes['App']}>
        {!isLoggedIn && <LoginCard />}
        {isLoggedIn && <Home />}
      </div>
    </Fragment>
  );
}

export default App;
