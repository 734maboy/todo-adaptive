import React from 'react'
import './home-view.scss'

const HomeView = () => {
	return (
		<div className='home-container'>
			<div className='left-empty'></div>
			<main className='center-container'>
				<div className="home-content">
					<div className="home-content__title">
						<h1>TODO-Helper</h1>
					</div>
				</div>
			</main>
			<div className='right-empty'></div>
		</div>
	)
}

export default HomeView
