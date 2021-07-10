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
		`};
	${(props) =>
		props.between &&
		css`
			align-items: center;
			justify-content: space-between;
		`};
	${(props) =>
		props.right &&
		css`
			align-items: center;
			justify-content: flex-end;
		`}
	margin :${(props) => props.mg};
`;
export default Flex;
