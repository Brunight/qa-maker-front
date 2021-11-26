import { useCallback, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import AddPointModal from '../../components/AddPointModal'
import api from '../../services/api'

import { Container } from './styles'

const Store = () => {
	const [points, setPoints] = useState([])
	const [storeName, setStoreName] = useState('')
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [editingPoint, setEditingPoint] = useState(null)

	const params = useParams()
	const navigate = useNavigate()

	const handleRefresh = useCallback(async () => {
		setEditingPoint(null)
		try {
			const { data } = await api.get(`/stores/${params.storeId}/points`)

			setPoints(data)
		} catch (err) {
			alert('Ocorreu um erro!')
			navigate('/')
		}
	}, [navigate, params])

	const statuses = ['none', 'done', 'in-progress', 'waiting-info', 'unable']

	async function handleSelectChange(index, pointId) {
		try {
			console.log(index)
			const sendData = { status: statuses[index] }
			console.log(sendData)
			const { data } = await api.put(`/stores/${params.storeId}/points/${pointId}`, sendData)
		} catch (err) {
			alert('Ocorreu um erro!')
		}
	}

	useEffect(() => {
		async function run() {
			const { data } = await api.get('/stores')
			const store = data.filter((store) => store._id === params.storeId)[0]
			setStoreName(store.name)
		}
		run()
		handleRefresh()
	}, [handleRefresh, params])

	const handleOpenModal = useCallback(() => {
		setIsModalOpen(true)
	}, [])

	const handleCloseModal = useCallback(() => {
		setEditingPoint(null)
		setIsModalOpen(false)
	}, [])

	return (
		<>
			<Container>
				<div className="container-top">
					<h1>{storeName}</h1>
					<div className="button" onClick={handleOpenModal}>
						<span className="add-symbol">+</span>
						<p className="add-text">Adicionar novo card</p>
					</div>
				</div>

				<ul>
					{points.map((point) => (
						<li key={point.id}>
							<h2>{point.title}</h2>
							<p>{point.description}</p>
							<div className="select-wrapper">
								<p>Status: </p>
								<select
									onChange={(e) => {
										console.log(e.target.selectedOptions[0].value)
										handleSelectChange(e.target.selectedOptions[0].value, point._id)
									}}
								>
									<option value="0" selected={statuses.includes(point.status)}>Selecionar</option>
									<option value="1" selected={statuses.includes(point.status)}>Feito</option>
									<option value="2" selected={statuses.includes(point.status)}>Em Progresso</option>
									<option value="3" selected={statuses.includes(point.status)}>Aguardando Info</option>
									<option value="4" selected={statuses.includes(point.status)}>Impossibilitado</option>
								</select>
							</div>
							<div className="icons">
								{point.images.map((image) => {
									return <img src={image} />
								})}
							</div>
							<span onClick={() => {
								setEditingPoint(point)
								handleOpenModal()
							}}>Editar</span>
						</li>
					))}
				</ul>
			</Container>
			<AddPointModal
				onRequestClose={handleCloseModal}
				isOpen={isModalOpen}
				storeId={params.storeId}
				handleRefresh={handleRefresh}
				editingPoint={editingPoint}
			/>
		</>
	)
}

export default Store
