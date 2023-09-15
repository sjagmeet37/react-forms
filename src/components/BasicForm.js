import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredName,
    hasError: isValidName,
    valueChangeHandler: onNameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    isValid: isEnterNameValid,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    hasError: isValidLastName,
    valueChangeHandler: onLastNameChangedHandler,
    inputBlurHandler: nameLastBlurHandler,
    isValid: isEnterLastNameValid,
    reset: resetLastName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: isValidEmail,
    valueChangeHandler: onEmailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    isValid: isEnterEmailValid,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  const nameInpuClasses = isValidName ? "form-control invalid" : "form-control";
  const lastNameInpuClasses = isValidLastName
    ? "form-control invalid"
    : "form-control";
  const emailInpuClasses = isValidEmail
    ? "form-control invalid"
    : "form-control";

  return (
    <form>
      <div className="control-group">
        <div className={nameInpuClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={onNameChangedHandler}
            onBlur={nameBlurHandler}
          />
        </div>
        <div className={nameInpuClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={onLastNameChangedHandler}
            onBlur={nameLastBlurHandler}
          />
        </div>
      </div>
      <div className={nameInpuClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={onEmailChangedHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
