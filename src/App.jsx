import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import GlobalStyle from './styles/global'

import Routes from './routes'
import ReactModal from 'react-modal'

ReactModal.setAppElement('#root')
const App = () => (
	<Router>
		<Routes />

		<GlobalStyle />
	</Router>
)

export default App
