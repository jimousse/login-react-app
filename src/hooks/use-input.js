import { useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  let newState;

  switch (action.type) {
    case 'INPUT':
      newState = {
        value: action.value,
        isTouched: state.isTouched,
      };
      break;

    case 'BLUR':
      newState = {
        value: state.value,
        isTouched: true,
      };
      break;

    case 'RESET':
      newState = {
        value: '',
        isTouched: false,
      };
      break;

    default:
      newState = initialInputState;
      break;
  }

  return newState;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueChangeHandler = (event) => {
    dispatch({ type: 'INPUT', value: event.target.value });
  };

  const inputBlurHandler = (event) => {
    dispatch({ type: 'BLUR' });
  };
  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    isValid: validateValue(inputState.value),
    isTouched: inputState.isTouched,
    reset,
    valueChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;
