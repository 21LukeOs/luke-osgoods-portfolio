import React from 'react';
import './Nav.scss';
import logo from '../../assets/logo-512.png';

function Nav() {
	return (
		<div className='nav'>
			<img src={logo} alt='logo' className='nav__logo' width='50px' height='50px' />
			<a href='https://lukeosgood.com' target='_blank' rel='noopener noreferrer'><button className='nav__resume-button'>Resumé</button></a>
		</div>
	);
}

export default Nav;
