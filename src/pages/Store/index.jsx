import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import api from '../../services/api'


import { Container } from './styles'

const Store = () => {
	const [points, setPoints] = useState([])

	const params = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		async function run() {
			try {
				const { data } = await api.get(`/stores/${params.storeId}/points`)

				setPoints(data)
			} catch (err) {
				alert('Ocorreu um erro!')
				navigate('/')
			}
		}
		run()
	}, [navigate, params])

	return (
		<Container>
			<div className="container-top">
				<h1>Bonita Loja</h1>
				<div className="button">
					<span class="add-symbol">+</span>
					<p class="add-text">Adicionar novo card</p>
				</div>
			</div>

			<ul>
				{points.map((point) => (
					<li key={point.id}>
						<h2>{point.title}</h2>
						<p>{point.description}</p>
						<div className="select-wrapper">
							<p>Status: </p>
							<select onChange={(e) => {console.log(e.target.selectedOptions[0].value)}} >
								<option value="0">Selecionar</option>
								<option value="1">Feito</option>
								<option value="2">Em Progresso</option>
								<option value="3">Aguardando Info</option>
								<option value="4">Impossibilitado</option>
							
							</select>
						</div>
						<div className="icons">
							{point.images.map( (image) => {
								return (
									<img src={image} />
								)
							})}
						</div>
					</li>
				))}
			</ul>
		</Container>
	)
}

export default Store
