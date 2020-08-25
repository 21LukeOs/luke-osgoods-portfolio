import React from 'react';
import './Nav.scss';
import logo from '../../assets/logo-512.png';

function Nav() {
	return (
		<div className='nav'>
			<img src={logo} alt='logo' className='nav__logo' width='50px' />
			<button className='nav__resume-button'>Resumé</button>
		</div>
	);
}

export default Nav;
