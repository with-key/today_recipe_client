import React from 'react';
import styled, { css } from 'styled-components';

const Button = ({ children, ...rest }) => {
	return <BtnBx {...rest}>{children}</BtnBx>;
};

Button.defaultProps = {
	width: '120px;',
	height: '40px;',
	backgroundColor: '#fff',
	color: '#000',
};
const BtnBx = styled.button`
	${(props) =>
		props.full
			? css`
					width: 100%;
			  `
			: `width: ${props.width}`};

	${(props) =>
		props.large
			? css`
					width: 200px;
					height: 50px;
			  `
			: `width: ${props.width}`};

	${(props) =>
		props.primary
			? css`
					background-color: #ff6b6b;
					color: #fff;
					&:hover {
						opacity: 80%;
					}
			  `
			: ''}
	border: none;
	padding: 10px 20px;
	border-radius: 8px;
	cursor: pointer;
`;
export default Button;
