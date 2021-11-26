import React from 'react'

import { Container, StyledInput } from './styles'

const Input = (props) => {
	return (
		<Container>
			<StyledInput {...props} />
		</Container>
	)
}

export default Input
