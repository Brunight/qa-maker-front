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
			{/* <h1>{params.storeId}</h1> */}

			<ul>
				{points.map((point) => (
					<li key={point.id}>
						<h2>{point.title}</h2>
						<p>{point.description}</p>
					</li>
				))}
			</ul>
		</Container>
	)
}

export default Store
