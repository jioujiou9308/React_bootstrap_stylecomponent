import React from 'react';
import { ButtonStyle, ButtonExtend } from '../styles/ButtonStyle';
const Prop = () => {
	return (
		<div>
			<h1>styled component 與 props extend 共用元件</h1>
			<h3>props : 設定會不斷用到的主題等等</h3>
			<ButtonStyle>button1</ButtonStyle>
			<ButtonStyle primary>button2</ButtonStyle>
			<ButtonStyle secondary>button3</ButtonStyle>
			<h3>extend : 套用別人寫好的樣式，在客製化</h3>
			<ButtonExtend>button1</ButtonExtend>
		</div>
	);
};

export default Prop;
