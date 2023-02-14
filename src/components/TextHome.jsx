import styles from '../sass/components/TextHome.module.scss';

export default function TextHome({username}) {
    return (
        <p className={styles.p}>
            Hola {username}!, acá encontrarás tu música más escuchada.
        </p>
    );
}