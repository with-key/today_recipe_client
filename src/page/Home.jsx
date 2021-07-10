import React, { useEffect, useState } from 'react';
import { apis } from '../shared/api';
import styled from 'styled-components';

// compo
import Template from '../components/Template';
import Search from '../components/Search';
import List from '../components/List';

const Home = ({ history }) => {
	const [articles, setArticles] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchInfo = async () => {
			try {
				setLoading(true);
				const { data } = await apis.articles();
				setArticles(data);
			} catch (e) {
				console.log(`에러가 발생했습니다! : ${e}`);
				setError(e);
			} finally {
				setLoading(false);
			}
		};
		fetchInfo();
	}, []);

	if (!articles) {
		return <div>로딩중....</div>;
	}

	return (
		<Template>
			<Container>
				<Search />
				<List articles={articles} history={history} />
			</Container>
		</Template>
	);
};

const Container = styled.div`
	width: 100%;
	height: calc(100vh - 150px);
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	align-items: center;
`;

export default Home;
