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
			<Footer />
		</Container>
	);
};

const Container = styled.section`
	/* border: 1px solid red; */
`;
const Section = styled.section``;
export default Template;
