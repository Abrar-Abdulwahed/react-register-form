export default function Modal({ user, setIsOpen }) {
  console.log("inside modal");
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">
              Successful Registration
              <i className="fa fa-sharp fa-solid fa-circle-check" />
            </h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            X
          </button>
          <div className="modalContent">
            Welcome, <span className="user">{user.name}</span>
          </div>
        </div>
      </div>
    </>
  );
}
