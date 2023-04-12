import { useState } from "react";

import "./App.css";
import UserInput from "./components/UsersInput/UserInput";
import Users from "./components/Users/Users";

function App() {
  const [user, setUser] = useState([
    {
      name: "Stephen",
      age: 54,
    },
  ]);

  const onAddUser = (user) => {
    setUser((prevUser) => {
      const updatedUsers = [...prevUser];
      updatedUsers.unshift({ name: user.name, age: user.age });
      return updatedUsers;
    });
  };

  return (
    <div className="wrapper">
      <UserInput onAddUser={onAddUser} />
      <ul>
        <Users objUsers={user} />
      </ul>
    </div>
  );
}

export default App;
