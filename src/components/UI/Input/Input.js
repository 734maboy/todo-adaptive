import React from 'react'
import './input.scss'

const Input = (props) => {
	return (
		<div className='input-container'>
			<input {...props} type="text"/>
		</div>
	)
}

export default Input
