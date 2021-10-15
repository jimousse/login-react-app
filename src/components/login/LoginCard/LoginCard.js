import Card from '../../ui/Card/Card';
import UserIcon from '../../icons/UserIcon';
import FormLogin from '../FormLogin/FormLogin';
import classes from './LoginCard.module.css';

const LoginCard = () => {
  return (
    <Card className={classes.centered}>
      <div className={classes['login-container']}>
        <span className={classes['main-icon']}>
          <UserIcon
            size="50"
            stroke="white"
            strokeWidth="1px"
            color="transparent"
          />
        </span>
        <FormLogin />
      </div>
    </Card>
  );
};

export default LoginCard;
