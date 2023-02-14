import styles from '../sass/components/MusicCard.module.scss';

export default function MusicCard({ name, img, duration }) {
	return (
		<div className={styles.container}>
			<img src={img} alt={`${name} - Wallpaper`} />
			<div className={styles.music_name}>
				<p>Nombre:</p>
				<span>{name}</span>
			</div>
			<div className={styles.music_duration}>
				<p>Duración:</p>
				<span>{duration}</span>
			</div>
			<button className={styles.music_btn}>
				<i className="fa-solid fa-play"></i>
			</button>
		</div>
	);
}
