import MusicCard from '../components/MusicCard';
import Navbar from '../components/Navbar';
import UserCard from '../components/UserCard';
import styles from '../sass/pages/Music.module.scss';

export default function Music() {

    const username = localStorage.getItem('username');

	return (
		<>
			<Navbar home={false} />
			<div className={styles.container}>
				<div className={styles.playlist}>
					<MusicCard img={'https://cdn.thetealmango.com/wp-content/uploads/2022/05/95.jpg'} name="Un verano sin ti" duration="3:10" />
					<MusicCard img={'https://cdn.thetealmango.com/wp-content/uploads/2022/05/95.jpg'} name="Un verano sin ti" duration="3:10" />
				</div>
				<UserCard username={username != undefined ? username : 'User'} />
			</div>
		</>
	);
}
