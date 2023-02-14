import { useState } from 'react'
import styles from '../sass/pages/UploadMusic.module.scss'

export default function UploadMusic() {

    const [music, setMusic] = useState('');

    const uploadMusic = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'audio');
        const res = await fetch(
            'https://api.cloudinary.com/'
        )
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} action="" method="POST">
                <input className={styles.input_file} type='file' />
                <input className={styles.input_btn} type='submit' />
            </form>
        </div>
    )
}