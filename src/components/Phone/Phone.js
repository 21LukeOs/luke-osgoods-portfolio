import React from 'react';
import './Phone.scss';
import phoneartfully from '../../assets/iphone-x-artfully.png';

function App() {
	return (
		<div className='phone-artfully'>
			<img src={phoneartfully} alt='logo' className='nav__logo' width='50px' />
		</div>
	);
}

export default App;
