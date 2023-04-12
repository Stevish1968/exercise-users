// display each user
import Card from "../Card/Card";
import UserList from "../UserList/UserList";

const Users = (props) => {
  return (
    <Card>
      <div>
        {props.objUsers.map((user) => {
          return <UserList name={user.name} age={user.age} />;
        })}
      </div>
    </Card>
  );
};

export default Users;
