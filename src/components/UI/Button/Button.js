import React, { useMemo } from 'react'
import './button.scss'

const Button = ({onClick, text, type, color}) => {

	const buttonTypes = {
		'fit': 'button-fit',
	}

	const buttonColors = {
		'warning': 'button-warning',
		'info': 'button-info',
		'danger': 'button-danger',
	}

	const buttonClasses = useMemo(() => {
		let classes = ['button-container'];
		if (buttonTypes.hasOwnProperty(type)) {
			classes.push(buttonTypes[type]);
		}
		if (buttonColors.hasOwnProperty(color)) {
			classes.push(buttonColors[color]);
		}
		return classes.join(' ');
	}, [type, color])

	return (
		<div onClick={onClick} className={buttonClasses}>
			{text}
		</div>
	)
}

export default Button
