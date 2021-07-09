import React from 'react';
import styled from 'styled-components';

const Flex = ({ children, ...rest }) => {
	return <FlexBx {...rest}>{children}</FlexBx>;
};

const FlexBx = styled.div`
	display: flex;
	align-items: center;
	gap: ${(props) => props.gap};
`;
export default Flex;
