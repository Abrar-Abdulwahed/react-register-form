export default function validate(formData, errors, name) {
  const checkFirstName = (fname) => {
    if (!fname) {
      errors.fname = "Firstname required";
    } else if (/\d+/.test(fname)) {
      errors.fname = "The firstname should not contain any numbers";
    } else {
      delete errors.fname;
    }
  };
  const checkLastName = (lname) => {
    if (!lname) {
      errors.lname = "Lastname required";
    } else if (/\d+/.test(lname)) {
      errors.lname = "The lastname should not contain any numbers";
    } else {
      delete errors.lname;
    }
  };
  const checkUsername = (username) => {
    if (!username) {
      errors.username = "Username required";
    } else {
      delete errors.username;
    }
  };
  const checkEmail = (email) => {
    if (!email) {
      errors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email address is invalid";
    } else {
      delete errors.email;
    }
  };
  const checkPassword = (password) => {
    if (!password) {
      errors.password = "Password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{7,}$/.test(
        password
      )
    ) {
      errors.password =
        "Passwords should have over 8 characters long, have at least one capital letter, have at least one small letter, have at least one number, have at least one symbol";
    } else {
      delete errors.password;
    }
  };
  const checkConfirmPassword = (coPassword) => {
    if (!coPassword) {
      errors.coPassword = "Confirm Password is required";
    } else if (coPassword !== formData["password"]) {
      errors.coPassword = "Passwords do not match";
    } else {
      delete errors.coPassword;
    }
  };
  switch (name) {
    case "fname":
      checkFirstName(formData.fname);
      break;
    case "lname":
      checkLastName(formData.lname);
      break;
    case "username":
      checkUsername(formData.username);
      break;
    case "email":
      checkEmail(formData.email);
      break;
    case "password":
      checkPassword(formData.password);
      break;
    case "coPassword":
      checkConfirmPassword(formData.coPassword);
      break;
    default:
      checkFirstName(formData.fname);
      checkLastName(formData.lname);
      checkUsername(formData.username);
      checkEmail(formData.email);
      checkPassword(formData.password);
      checkConfirmPassword(formData.coPassword);
      break;
  }
  return errors;
}
