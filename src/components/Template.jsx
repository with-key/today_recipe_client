import React from 'react';
import styled from 'styled-components';

// compo
import Header from './Header';
import Footer from './Footer';

const Template = ({ children }) => {
	return (
		<Container>
			{/* <Header /> */}
			<Section>{children}</Section>
			{/* <Footer /> */}
		</Container>
	);
};

const Container = styled.section``;
const Section = styled.section`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export default Template;
