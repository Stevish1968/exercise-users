import styles from './UserList.module.css';

const UserList = (props) => {
    return (
       <li className={styles.li}>{props.name}({props.age})</li>
    )
}

export default UserList;