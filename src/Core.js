import { useState } from "react";
import validate from "./validate";
import submit from "./submit";

export default function Core() {
  let user = {};
  const formConrols = {
    username: "",
    email: "",
    password: "",
    coPassword: "",
    fname: "",
    lname: ""
  };
  const [formData, setFormData] = useState(Object.assign({}, formConrols));
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState(Object.assign({}, formConrols));
  const [userInfo, setUserInfo] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setFormData((formData) => {
      setErrors(validate(formData, errors, name));
      return formData;
    });
  };

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({
      ...formData
    });

    setErrors(validate(formData, errors, "all"));
    setTimeout(() => {
      setErrors({});
    }, 5000);

    if (Object.keys(errors).length === 0 && isChecked) {
      user = await submit(formData);
      // if (errors === {}) submit(formData);
      setIsOpen(true);
      setFormData(Object.assign({}, formConrols));
      setUserInfo(user);
      setIsChecked(false);
    }
  };
  return {
    formData,
    errors,
    isChecked,
    handleChange,
    handleCheck,
    handleSubmit,
    userInfo,
    isOpen,
    setIsOpen
  };
}
