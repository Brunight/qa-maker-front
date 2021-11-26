import styled from 'styled-components'

export const Container = styled.form`
	position: relative;
	width: 760px;
	padding: 40px;
	padding-top: 60px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: white;

	box-shadow: 0px 4px 4px rgba(88, 62, 62, 0.04), 0px 4px 24px rgba(0, 0, 0, 0.12);
	border-radius: 5px;

	> div, > input, > span {
		margin-bottom: 20px;
	}

	> svg {
		position: absolute;
		top: 16px;
		right: 16px;
		cursor: pointer;
	}
`
