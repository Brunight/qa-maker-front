import '../../App.css'
import styled from 'styled-components'
import Button from '../../components/Button'

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
	return (
		<StyledApp>
			<Title>Hulk Plus</Title>
			<Label>Nome do Projeto:</Label>
			<Input />
			<Button>Criar QA</Button>
		</StyledApp>
	)
}

export default Dashboard
