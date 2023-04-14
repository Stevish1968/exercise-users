import styles from './UserList.module.css';

const UserList = (props) => {

    const deleteUser = () => {
       props.onDeleteUser(props.user.id);
    }

    return (

        <>
       <li className={styles.li} onClick={deleteUser}>
        {props.children}
       </li>
       </>
    )
}

export default UserList;