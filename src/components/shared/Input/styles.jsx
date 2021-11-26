import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 60px;
	border-radius: 5px;
	border: 1px solid #ccc;
  padding: 12px;
`

export const StyledInput = styled.input`
	border: none;
	background-color: transparent;
	width: 100%;
	height: 100%;
	&::placeholder {
		color: #ccc;
	}
`
