export const emailValidator = (props) => {
  const regemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,99}$/;
  if (props === "") return { validate: false, msg: "Field is required" };
  else if (!regemail.test(props))
    return { validate: false, msg: "Enter valid email id" };
  else return { validate: true };
};

export const passwordValidator = (props) => {
  const minReg = props.length < 8;
  const maxReg = props.length >= 15;
  const capReg = props.search(/[A-Z]/) < 0;
  const alphaReg = props.search(/[A-Za-z]/) < 0;
  const digitReg = props.search(/[0-9]/) < 0;
  const speCharReg = props.search(/.*[!@#$%^&*() =+_-]/) < 0;

  let errMsg = "";

  if (props === "") return { validate: false, msg: "Field is required" };
  else if (minReg || maxReg) {
    errMsg = "Length must be between 8 to 15 characters.";
    return {
      validate: false,
      msg: errMsg,
    };
  } else if (capReg) {
    errMsg = "Your password must contain at least one Capital letter.";
    return {
      validate: false,
      msg: errMsg,
    };
  } else if (alphaReg) {
    errMsg = "Your password must contain at least one alphabet.";
    return {
      validate: false,
      msg: errMsg,
    };
  } else if (digitReg) {
    errMsg = "Must have at least one digit.";
    return {
      validate: false,
      msg: errMsg,
    };
  } else if (speCharReg) {
    errMsg = "Must have at least one special character.";
    return {
      validate: false,
      msg: errMsg,
    };
  } else return { validate: true };
};
