import '../../App.css'
import styled from 'styled-components'
import Button from '../../components/Button'
import { useCallback, useState } from 'react'
import api from '../../services/api'
import { useNavigate } from 'react-router'

const StyledApp = styled.div`
	background-color: rgba(50, 207, 152, 0.4);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 100vh;
`

const Title = styled.h1`
	color: #41b932;
	font-size: 100px;
	position: absolute;
	top: 0;
`

const Label = styled.label`
	font-size: 16px;
	transform: translateX(-90%);
	margin-bottom: 10px;
`

const Input = styled.input`
	height: 40px;
	width: 350px;
	border-radius: 5px;
	margin-bottom: 10px;
	font-size: 16px;
	padding-left: 10px;
`

const Dashboard = () => {
	const [name, setName] = useState('')

	const navigate = useNavigate()

	const handleSubmit = useCallback(async () => {
		let id
		try {

			const { data } = await api.get(`/stores/${name}`)
			id = data._id
		} catch(err) {
			// alert('Não encontram')
			const { data } = await api.post(`/stores`, { name })
			id = data._id
		}
		navigate(`/stores/${id}`)
	})

	return (
		<StyledApp>
			<Title>Hulk Plus</Title>
			<Label>Nome do Projeto:</Label>
			<Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
			<Button onClick={handleSubmit}>Criar QA</Button>
		</StyledApp>
	)
}

export default Dashboard
