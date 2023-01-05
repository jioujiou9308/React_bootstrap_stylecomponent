import styled, { css } from 'styled-components';

const ButtonStyle = styled.button`
	background: gray;
	width: 300px;
	border: 1px solid black;
	margin: 20px;
	padding: 30px;
	&:hover {
		background: white;
		color: black;
	}
	${(props) =>
		(props.primary &&
			css`
				background: blue;
				width: 300px;
				border: 1px solid black;
				margin: 20px;
				padding: 30px;
				&:hover {
					background: lightblue;
					color: black;
				}
			`) ||
		(props.secondary &&
			css`
				background: yellow;
				width: 300px;
				border: 1px solid black;
				margin: 20px;
				padding: 30px;
				&:hover {
					background: lightyellow;
					color: black;
				}
			`)}
`;
const ButtonExtend = styled(ButtonStyle)`
	font-weight: bolder;
	font-size: 32px;
`;

export { ButtonStyle, ButtonExtend };
