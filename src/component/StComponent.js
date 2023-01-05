import React from 'react';
import styled from 'styled-components';

const StComponent = () => {
	return (
		<div>
			<Intro>example</Intro>
			<Button>example</Button>
			<hr />
		</div>
	);
};

const Intro = styled.button`
	width: 200px;
	background: transparent;
	border: 1px solid #369;
	color: #369;
	font-size: 10px;
	transition: 0.5s;
	&:hover {
		background: yellow;
		color: blue;
		transform: scale(2);
	}
`;
const Button = styled.button.attrs({ className: 'button1' })`
	background: black;
	color: white;
`;
export default StComponent;
