import React from 'react';
import styled, { css } from 'styled-components';

const Text = ({ children, ...rest }) => {
	return <TextBx {...rest}>{children}</TextBx>;
};

const TextBx = styled.div`
	${(props) =>
		props.mg &&
		css`
			margin: ${props.mg};
		`};
	font-size: ${(props) => props.fs};
	font-weight: ${(props) => props.fw};
	color: ${(props) => props.color};
	line-height: ${(props) => props.lh};
`;
export default Text;
