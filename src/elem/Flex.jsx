import React from 'react';
import styled, { css } from 'styled-components';

const Flex = ({ children, ...rest }) => {
	return <FlexBx {...rest}>{children}</FlexBx>;
};

const FlexBx = styled.div`
	display: flex;
	align-items: center;
	gap: ${(props) => props.gap};
	${(props) =>
		props.center &&
		css`
			align-items: center;
			justify-content: center;
		`}
`;
export default Flex;
