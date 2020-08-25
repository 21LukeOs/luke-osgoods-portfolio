import React from 'react';
import './Projects.scss';
import PropTypes from 'prop-types';

const Project = ({ url, pic }) => {
	return (
		<li className='project invisible'>
			<a
				href={url}
				target='_blank'
				rel='noopener noreferrer'
				className='project-link'>
				<span className='iphone'>
					<img src={pic} alt='external link' />
				</span>
			</a>
		</li>
	);
};

Project.propTypes = {
	url: PropTypes.string.isRequired,
	pic: PropTypes.string.isRequired
};

export default Project;
