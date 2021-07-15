import React from 'react';
import styled from 'styled-components';

const Row = ({ children, item, history }) => {
	return (
		<Container
			key={item.id}
			onClick={() => {
				history.push(`/article/${item.id}`);
			}}
		>
			{children}
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	height: 67px;
	cursor: pointer;
	&:hover {
		background-color: #fbfbfb;
	}
`;

export default Row;
