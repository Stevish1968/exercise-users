// display each user
import Card from "../Card/Card";
import UserList from "../UserList/UserList";

const Users = (props) => {
  if (props.objUsers.length === 0)
    return (
      <Card>
        <ul>
          <li>
            <p>No user at this time</p>
          </li>
        </ul>
      </Card>
    );

  return (
    <Card>
      <div>
        <ul>
          {props.objUsers.map((user) => {
            return (
              <UserList user={user} onDeleteUser={props.onDeleteUser}>
                {`${user.name} (${user.age}) (${user.id})`}
              </UserList>
            );
          })}
        </ul>
      </div>
    </Card>
  );
};

export default Users;
