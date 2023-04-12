import { useState } from "react";
import "./UserInput.css";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";

const UserInput = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [showModal, setShowModal] = useState("false");

  const onUserNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const onUserAgeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if(!userName){
      openModal();
      return;
    }

    const user = { name: userName, age: userAge };

    props.onAddUser(user);
  };

  return (
    <div>
      <Card>
        <form className="user-form" onSubmit={formSubmitHandler}>
          <div className="form-control">
            <label className="form-label">Username</label>
            <input type="text" name="username" onChange={onUserNameHandler} />
          </div>
          <div className="form-control">
            <label className="form-label">Age(Years)</label>
            <input type="text" name="age" onChange={onUserAgeHandler} />
          </div>
          <Button type="submit" onSubmit={formSubmitHandler}>
            Add User
          </Button>
        </form>
        { console.log(showModal)}
        <Modal
          title="Missing fields"
          message="Both fields must be filled out"
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </Card>
    </div>
  );
};

export default UserInput;
