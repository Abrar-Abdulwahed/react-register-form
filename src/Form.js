export default function Form(props) {
  const {
    formData,
    errors,
    isChecked,
    handleChange,
    handleCheck,
    handleSubmit
  } = props;

  return (
    <div className="flex">
      <form className="form" onSubmit={handleSubmit}>
        <header>registration form</header>

        <section className="above">
          <div
            className={"form-control " + (errors.username && "error-control")}
          >
            <div className="input flex">
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder={"Username"}
                value={formData.username}
                onChange={handleChange}
              />
              <i className="fa fa-user" />
            </div>
            <p className="error-msg">{errors.username}</p>
          </div>
          <div className={"form-control " + (errors.email && "error-control")}>
            <div className="input flex">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder={"Email Address"}
                value={formData.email}
                onChange={handleChange}
              />
              <i className="fa fa-solid fa-envelope" />
            </div>
            <p className="error-msg">{errors.email}</p>
          </div>
          <div
            className={"form-control " + (errors.password && "error-control")}
          >
            <div className="input flex">
              <label htmlFor="password" className="sr-only">
                password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder={"Password"}
                value={formData.password}
                onChange={handleChange}
              />
              <i className="fa fa-solid fa-lock" />
            </div>
            <p className="error-msg">{errors.password}</p>
          </div>
          <div
            className={"form-control " + (errors.coPassword && "error-control")}
          >
            <div className="input flex">
              <label htmlFor="coPassword" className="sr-only">
                confirm password
              </label>
              <input
                type="password"
                id="coPassword"
                name="coPassword"
                placeholder={"Confirm Password"}
                value={formData.coPassword}
                onChange={handleChange}
              />
              <i className="fa fa-solid fa-lock" />
            </div>
            <p className="error-msg">{errors.coPassword}</p>
          </div>
        </section>
        <section className="bottom">
          <div className="fullname">
            <div
              className={"form-control " + (errors.fname && "error-control")}
            >
              <div className="input flex">
                <label htmlFor="fname" className="sr-only">
                  First Name
                </label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder={"First name"}
                  value={formData.fname}
                  onChange={handleChange}
                />
              </div>
              <p className="error-msg">{errors.fname}</p>
            </div>
            <div
              className={"form-control " + (errors.lname && "error-control")}
            >
              <div className="input flex">
                <label htmlFor="lname" className="sr-only">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  placeholder={"Last name"}
                  value={formData.lname}
                  onChange={handleChange}
                />
              </div>
              <p className="error-msg">{errors.lname}</p>
            </div>
          </div>
          <div
            className={"form-control flex " + (!isChecked && "error-control")}
          >
            <label htmlFor="TOS" className="sr-only">
              I agree with Terms of Service
            </label>
            <input
              type="checkbox"
              name="agree"
              defaultChecked={false}
              onChange={handleCheck}
              id="TOS"
            />
            <p className={" " + (!isChecked && "error-msg")}>
              I agree with Terms of Service
            </p>
          </div>
        </section>

        <footer>
          <button type="submit" className="submit-btn">
            Sign up
          </button>
        </footer>
      </form>
    </div>
  );
}
