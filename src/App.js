import { useState } from "react";

import "./App.css";
import UserInput from "./components/UsersInput/UserInput";
import Users from "./components/Users/Users";

function App() {
  const [users, setUser] = useState([
    {
      name: "Stephen",
      age: 54,
      id:  Math.random().toString(),
    },
  ]);

  const onAddUser = (user) => {
    setUser((prevUser) => {
      const updatedUsers = [...prevUser];
      updatedUsers.unshift({ name: user.name, age: user.age, id: Math.random().toString()});
      return updatedUsers;
    });
  };

  const onDeleteUser = (userId) => {
    setUser(prevUser => {
      console.log(userId + ' ' +  prevUser[0].id)
      const updateUsers = prevUser.filter(filteredUser => filteredUser.id !== userId);
      return updateUsers;
    })
  }

  return (
    <div className="wrapper">
      <UserInput onAddUser={onAddUser} />
        <Users objUsers={users}  onDeleteUser={onDeleteUser} />
    </div>
  );
}

export default App;
