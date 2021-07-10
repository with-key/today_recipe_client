import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { __loadAarticles } from '../modules/article';

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
	background-color: #fff;
	border-radius: 10px;
`;
export default Home;
