import React, { useCallback, useState } from 'react'
import './main-view.scss'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import HDivider from '../../components/UI/HDivider/HDivider'
import BaseDialog from '../../components/UI/BaseDialog/BaseDialog'

const MainView = () => {
	const [searchGroups, setSearchGroups] = useState('')
	const handleSearch = useCallback((e) => {
			setSearchGroups(e.target.value)
		},[]);
	const [isModalOpen, setIsModalOpen] = useState(false);

	function openCreateGroupModal() {
		setIsModalOpen(true);
	}

	return (
		<div className='main-view-container'>
			<BaseDialog/>
			<div className='main-view-container__sidebar'>
				<Input value={searchGroups} onChange={handleSearch} placeholder='Find my group' />
				<Button onClick={openCreateGroupModal} text='Create group'/>
				<HDivider/>
			</div>
			<div className='main-view-container__content'></div>
		</div>
	)
}

export default MainView
