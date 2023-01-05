import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyles from './styles/GlobalStyles';
import './App.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<GlobalStyles></GlobalStyles>
		<App />
	</React.StrictMode>
);
