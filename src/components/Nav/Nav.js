import React from 'react';
import './Nav.scss';
import logo from '../../assets/logo-192.png';

function App() {
	return (
		<div className='nav'>
			<img src={logo} alt='logo' className='nav__logo' width='50px' />
			<button className='nav__resume-button'>Resume</button>
		</div>
	);
}

export default App;
