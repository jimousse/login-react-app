import { Fragment } from 'react';
import classes from './FormInput.module.css';

const FormInput = (props) => {
  const { label, id, type, value, placeholder, onChange, onBlur } = props;
  return (
    <Fragment>
      <label className={classes.label} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className={classes.input}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        value={value}
      />
    </Fragment>
  );
};

export default FormInput;
