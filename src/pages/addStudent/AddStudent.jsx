import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SuccessModal from "../../components/modals/successModal/SuccessModal";
import "./AddStudent.scss";

export default function AddStudent() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [modalMessage, setModalMessage] = useState(null);
  const userNameRef = useRef();
  const userEmailRef = useRef();
  const userAgeRef = useRef();
  const userPhoneRef = useRef();
  const userBioRef = useRef();

  function onSubmitForm(e) {
    e.preventDefault();

    const newStudent = {
      name: userNameRef.current.value,
      email: userEmailRef.current.value,
      age: userAgeRef.current.value,
      phone: userPhoneRef.current.value,
      bio: userBioRef.current.value,
    };
    const storedData = localStorage.getItem("localeData");
    const students = storedData ? JSON.parse(storedData) : [];
    const updatedData = [...students, newStudent];
    localStorage.setItem("localeData", JSON.stringify(updatedData));
    setUser(newStudent);

    userNameRef.current.value = "";
    userEmailRef.current.value = "";
    userAgeRef.current.value = "";
    userPhoneRef.current.value = "";
    userBioRef.current.value = "";
    setModalMessage("New Student has been added successfully!");
    setTimeout(() => {
      setModalMessage(null);
      navigate("/students");
    }, 4000);
  }

  return (
    <div className="section add-student-page">
      <div className="d-flex flex-wrap gap-3">
        <div className="add-form-text">
          <h1>Create a new student!</h1>
          <h3>Fill in the form below to add a new student record.</h3>
        </div>

        <div className="add-form">
          <form onSubmit={onSubmitForm}>
            <div className="form-input">
              <label htmlFor="username">Name</label>
              <input
                type="text"
                ref={userNameRef}
                name="username"
                placeholder="Enter name"
                required
              />
            </div>
            <div className="form-input">
              <label htmlFor="useremail">Email</label>
              <input
                type="email"
                ref={userEmailRef}
                name="useremail"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="form-input form-input-phone">
              <label htmlFor="userphone">Phone</label>
              <input
                  type="number"
                  ref={userPhoneRef}
                  name="userphone"
                  placeholder="Enter phone"
                  required
                />
              {/* <div className="form-input-phone-grp">
                <select>
                  <option value={"ind"}>+91</option>
                  <option value={"pak"}>+92</option>
                </select>
                <input
                  type="number"
                  ref={userPhoneRef}
                  name="userphone"
                  placeholder="Enter phone"
                  required
                />
              </div> */}
            </div>
            <div className="form-input">
              <label htmlFor="userage">Age</label>
              <input
                type="number"
                ref={userAgeRef}
                name="userage"
                placeholder="Enter age"
                required
              />
            </div>
            <div className="form-input">
              <label htmlFor="userage">Bio</label>
              <textarea
                type="text"
                ref={userBioRef}
                name="userbio"
                placeholder="Enter bio"
                rows="5"
                required
              />
            </div>
            <div className="form-input">
              <button type="submit" className="btn btn-primary">
                Add new
              </button>
            </div>
          </form>
        </div>
      </div>
      {modalMessage && (
        <SuccessModal
          message={modalMessage}
          onClose={() => setModalMessage(null)}
        />
      )}
    </div>
  );
}
