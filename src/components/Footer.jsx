import React from 'react';
import styled from 'styled-components';
import { Flex } from '../elem';

const Footer = () => {
	return (
		<Container>
			<Flex between>
				<div>Copyright 2021 &copy; 오늘의레피시</div>
				<div>v 1.0.2</div>
			</Flex>
		</Container>
	);
};

const Container = styled.footer`
	margin-top: 150px;
	padding: 100px;
	width: 100%;
	height: 100px;
	color: #fff;
	background-color: #ff7776;
`;
export default Footer;
