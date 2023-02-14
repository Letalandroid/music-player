import styles from './sass/App.module.scss';
import Navbar from './components/Navbar';
import TextHome from './components/TextHome';
import UserCard from './components/UserCard';
import ChangeUsername from './pages/ChangeUsername';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Music from './pages/Music';
import UploadMusic from './pages/UploadMusic';

export default function App() {
	const username = localStorage.getItem('username');

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Navbar home={true} />
							<div className={styles.main}>
								<TextHome
									className={styles.main__text}
									username={username != undefined ? username : 'User'}
								/>
								<UserCard
									username={username != undefined ? username : 'User'}
								/>
							</div>
						</>
					}
				/>
				<Route path="/change-username" element={<ChangeUsername />} />
				<Route path="/music" element={<Music />} />
				<Route path="/upload-music" element={<UploadMusic />} />
				{/* <Route path="*" element={<P404 />} errorElement={404} /> */}
			</Routes>
		</BrowserRouter>
	);
}
