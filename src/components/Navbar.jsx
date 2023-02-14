import styles from '../sass/components/Navbar.module.scss';
import Logo from '/logo.png'

export default function Navbar({home}) {
    return (
			<header>
				<nav className={styles.nav}>
					<a className={home ? styles.nav__a : styles.nav__a_music} href="/">
						<i className="fas fa-house"></i>
					</a>
					<img className={styles.nav__img} src={Logo} />
					<a
						className={home ? styles.nav__a : styles.nav__a_music}
						href="/music"
					>
						<i className="fas fa-bars"></i>
					</a>
				</nav>
			</header>
		);
}