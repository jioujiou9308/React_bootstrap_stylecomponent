import React from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const Bootstrap = () => {
	return (
		<div>
			<h1>在React 中如何使用 Bootstrap</h1>
			<h3>介紹 Bootstrap</h3>
			<h3>安裝</h3>
			<a href='https://react-bootstrap.github.io/getting-started/introduction'>react-bootstrap</a>
			<p>npm install react-bootstrap bootstrap</p>
			<h3>實際撰寫</h3>
			{/* 為引入的bootstrap 樣式 */}
			<Button>bootstrap button example</Button>
			{/* 客製化 variant & extend */}
			<Button variant='secondary' className='fz-1'>
				bootstrap button example 2
			</Button>
			{/* hover */}
			<CustomBootButton>CustomBootButton(繼承bootstrap的客製化元件)</CustomBootButton>
			<br />
			{/* blobal styles */}
			<a href='https://react-bootstrap.github.io/getting-started/introduction'>連結1測試</a>
			<br />
			<a href='https://react-bootstrap.github.io/getting-started/introduction'>連結2測試</a>
			<br />
			{/* props & theme */}
			<CustomBootButton2 theme={theme}>使用自製主題顏色來表示</CustomBootButton2>
		</div>
	);
};

// 從頭開始設計元件
const theme = {
	primary: 'yellow',
	secondary: 'green',
};
const CustomBootButton2 = styled(Button)`
	background: ${(props) => props.theme.secondary};
`;

const CustomBootButton = styled(Button)`
	font-weight: bolder;
	font-size: 20px;
	&:hover {
		background: black !important;
	}
`;

export default Bootstrap;
