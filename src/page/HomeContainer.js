import React, { useEffect, useState } from 'react';
import { apis } from '../shared/api';
import Home from './Home';

const HomeContainer = () => {
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
	return <Home articles={articles}  />;
};

export default HomeContainer;
