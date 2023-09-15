import useInput from "../hooks/use-input";

const SimpleInput = (props) => {


  const {
    value: enteredName,
    hasError: isValidName,
    valueChangeHandler: onNameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    isValid: isEnterNameValid,
    reset: resetName
  } = useInput(value => value.trim() !== '');


  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredName);
    resetName();
  };


  const nameInpuClasses = isValidName ? "form-control invalid" : "form-control";


  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInpuClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={onNameChangedHandler}
          onBlur={nameBlurHandler}
        />
        {isValidName && <p>Please enter a valid name</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
