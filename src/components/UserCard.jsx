import styles from '../sass/components/UserCard.module.scss';
import { Link } from 'react-router-dom';
import Logo from '../assets/user.png';

export default function UserCard({ username }) {
	return (
		<div className={styles.container}>
			<img className={styles.img} src={Logo} />
			<p className={styles.p}>{username}</p>
			<Link to="/change-username" className={styles.btn}>
				<i className="fa-regular fa-pen-to-square"></i>
			</Link>
		</div>
	);
}
