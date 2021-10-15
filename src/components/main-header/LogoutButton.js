import { useContext } from 'react';

import Button from '../ui/Button/Button';
import AuthContext from '../../store/auth-context';

const LogoutButton = (props) => {
  const authCtx = useContext(AuthContext);
  return <Button onClick={authCtx.onLogout}>Logout</Button>;
};

export default LogoutButton;
