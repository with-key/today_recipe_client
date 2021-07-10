import React, { useState } from 'react';
import styled from 'styled-components';

const Search = () => {
	const [term, setTerm] = useState('');
	return (
		<Container>
			<XIcon
				onClick={() => {
					setTerm('');
				}}
			>
				x
			</XIcon>
			<Input
				value={term}
				placeholder='오늘 점심을 뭘 먹을까?'
				onChange={(e) => {
					setTerm(e.target.value);
				}}
			/>
		</Container>
	);
};

const Container = styled.div`
	position: relative;
	width: 100%;
	margin: 50px 0;
	display: flex;
	justify-content: center;
`;

const Input = styled.input`
	width: 60%;
	font-size: 14px;
	font-weight: 400;
	letter-spacing: 1px;
	height: 70px;
	padding: 0 24px;
	border: 1px solid #eee;
	border-radius: 10px;
	outline: none;
	&:focus {
		border: 2px solid #ff6b6b;
	}
`;

const XIcon = styled.div`
	cursor: pointer;
	position: absolute;
	right: 21%;
	bottom: 19px;
	font-size: 32px;
	color: #ddd;
	width: 40px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	&:hover {
		color: #333;
	}
`;

export default Search;
