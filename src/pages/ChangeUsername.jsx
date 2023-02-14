import { useState } from 'react';
import styles from '../sass/pages/ChangeUsername.module.scss'

export default function ChangeUsername() {

    const [username, setUsername] = useState();

    function cambiarUserName() {
        localStorage.setItem('username', username);
    }

	return (
		<div className={styles.container}>
			<h1>Change username</h1>
			<input
				onChange={(e) => setUsername(e.target.value)}
				placeholder="Pablito Escobar"
				maxLength={12}
			/>
			<a href="/" onClick={cambiarUserName}>
				Cambiar username
			</a>
		</div>
	);
}
