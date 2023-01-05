import React from 'react';
import { Button } from 'react-bootstrap';
import styled, { css } from 'styled-components';

const Utility = () => {
	return (
		<div>
			<h1>在 React 中如何使用Bootatrap</h1>
			<h3>實際撰寫</h3>
			{/* utils */}
			<p className='fz-1'>測試utilis global</p>
			<Button className=' ml-1'>測試button</Button>
			{/* theme 放在不同地方有什麼樣的差別 */}
			<CustomBootButton2 theme={theme} className='ml-3'>
				customButton測試
			</CustomBootButton2>
		</div>
	);
};

// 如果比較在原本的js檔案所設定的主題，與global設定的主題
const theme = {
	primary: 'yellow',
	secondary: 'green',
};
const CustomBootButton2 = styled(Button)`
	background: ${(props) => props.theme.secondary};
`;

export default Utility;
