import React from 'react';
import styled from 'styled-components';

const Footer = () => {
	return <Container>Copyright 2021 &copy; 오늘의레피시</Container>;
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
