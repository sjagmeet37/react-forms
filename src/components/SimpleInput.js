import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const nameInputRef = useRef();
  const [isValidName, setIsValidName] = useState(false);
  const [isNameTouched, setIsNameTouched] = useState(false);

  const onNameChnagedHandler = (event) => {
    setName(event.target.value);
    if (name.trim().length === 0) {
      setIsValidName(false);
      return;
    }
    setIsValidName(true);
    console.log(name);
  };

  useEffect(() => {
    if (isValidName) {
      console.log("Name is Valid");
    }
  }, [isValidName]);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setIsNameTouched(true);
    console.log(nameInputRef.current.value);
  };

  const nameInputIsInvalid = isNameTouched && !isValidName;

  const nameInpuClasses = nameInputIsInvalid ? "form-control invalid" : "form-control" ;


  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInpuClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          onChange={onNameChnagedHandler}
        />
        {nameInputIsInvalid && <p>Please enter a valid name</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
