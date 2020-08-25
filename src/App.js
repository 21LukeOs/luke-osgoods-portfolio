import React from 'react';
import './App.scss';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';

function App() {
	return (
		<div className='app'>
			<Nav />
			<div className='app-heading'>
				<h1 className='fade-slide-in'>Luke Osgood</h1>
			</div>
      <Projects />
		</div>
	);
}

export default App;
