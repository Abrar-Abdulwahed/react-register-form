import "./styles.css";
import Core from "./Core";
import Form from "./Form";
import Modal from "./Modal";

export default function App() {
  const {
    formData,
    errors,
    isChecked,
    handleChange,
    handleCheck,
    handleSubmit,
    userInfo,
    isOpen,
    setIsOpen
  } = Core();

  return (
    <div className="App">
      {/* <p>
        <a href="./readme.html">Click me to see the requirements</a> or just add
        readme.html to the address bar
      </p> */}
      <Form
        formData={formData}
        errors={errors}
        handleChange={handleChange}
        handleCheck={handleCheck}
        handleSubmit={handleSubmit}
        isChecked={isChecked}
      />
      {isOpen && <Modal user={userInfo} setIsOpen={setIsOpen} />}
    </div>
  );
}
