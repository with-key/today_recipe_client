import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import Template from '../components/Template';
import Search from '../components/Search';
import styled from 'styled-components';

const Home = ({ articles }) => {
	const user = useSelector(state => state.user.user);
	const is_login = useSelector(state => state.user.is_login);
	console.log(user)

	axios.get('http://localhost:4000/posts').then(res=>console.log(res));

	axios
	.post('http://localhost:4000/posts', {"id":7272,"title":"추가연습","body":"추가연습2"})
	.then(res=>console.log(res))
	.catch((res)=>console.log('err'));

	if (!articles) {
		return <div>로딩중....</div>;
	}

	if(!is_login){
		return(<div>로그인 부터 하시죠!!</div>)
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
