import React, { useEffect } from 'react';
import styled from 'styled-components';

// redux
import { useDispatch } from 'react-redux';
import { __loadAarticles } from '../modules/article';

// compo & elem & share & util
import Template from '../components/Template';
import Search from '../components/Search';
import List from '../components/List';

const Home = ({ history }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(__loadAarticles());
	}, []);

	return (
		<Template>
			<Search />
			<Container>
				<List history={history} />
			</Container>
		</Template>
	);
};

const Container = styled.section`
	width: 70%;
	border-radius: 10px;
`;
export default Home;
