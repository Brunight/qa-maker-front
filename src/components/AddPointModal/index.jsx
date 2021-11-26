import React, { useCallback, useRef, useState } from 'react'
import ReactModal from 'react-modal'
import { FiX } from 'react-icons/fi'
import api from '../../services/api'
import Button from '../Button'
import Input from '../shared/Input'
import Textarea from '../shared/Textarea'

import { Container } from './styles'

const AddPointModal = ({ isOpen, onRequestClose, storeId, handleRefresh }) => {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [files, setFiles] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	const handleFileChange = useCallback(async (event) => {
		setIsLoading(true)
		const formData = new FormData()
		;[...event.target.files].forEach((img) => {
			formData.append('image', img)
		})

		const { data } = await api.post('images', formData)
		setFiles((oldValue) => [...oldValue, ...data])
		setIsLoading(false)
	}, [])

	const handleSubmit = useCallback(
		async (e) => {
			e.preventDefault()
			const sendData = {
				title,
				description,
				images: files
			}

			try {
				const { data } = await api.post(`stores/${storeId}/points`, sendData)
				handleRefresh()
				onRequestClose()
			} catch (e) {
				alert('Ocorreu um erro!')
				console.error(e)
			}
		},
		[title, description, files, storeId, handleRefresh, onRequestClose]
	)

	return (
		<ReactModal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName="react-modal-overlay"
			className="react-modal-content"
		>
			<Container onSubmit={handleSubmit}>
				<FiX size={20} onClick={onRequestClose} />
				<Input
					type="text"
					placeholder="Digite um título"
					required
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<Textarea
					type="text"
					placeholder="Descreva qual é o ajuste necessário"
					required
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<input type="file" multiple="multiple" onChange={handleFileChange} />
				<span>{isLoading ? 'Enviando...' : `${files.length} arquivos carregados.`}</span>
				<Button type="submit">Enviar</Button>
			</Container>
		</ReactModal>
	)
}

export default AddPointModal
