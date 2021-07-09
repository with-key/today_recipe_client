import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// compo
import Template from '../components/Template';
import Search from '../components/Search';

const Home = ({ articles }) => {
	if (!articles) {
		return <div>로딩중....</div>;
	}

	return (
		<Template>
			<Search></Search>
			{articles.map((item) => (
				<div>{item.id}</div>
			))}
		</Template>
	);
};

export default Home;
