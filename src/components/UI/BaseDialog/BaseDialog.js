import React from 'react'
import './base-dialog.scss'
import HDivider from '../HDivider/HDivider'
import Button from '../Button/Button'
import crossIcon from '../../../assets/icons/cross-icon.svg'

const BaseDialog = ({title = 'Modal title', spaceClosable = true,children}) => {
	return (
		<div className='base-modal'>
			<div className="base-modal__form">
				<header>
					{title}
					<HDivider/>
					<img className='close-icon' src={crossIcon} alt="cross"/>
				</header>
				<div className="base-modal__form-content">

				</div>
				{children}
				<footer>
					<HDivider/>
					<div className="footer-actions">
						<Button color={'info'} type={'fit'} text={'OK'}/>
						<Button color={'danger'} type={'fit'} text={'Cancel'}/>
					</div>
				</footer>
			</div>
		</div>
	)
}

export default BaseDialog
