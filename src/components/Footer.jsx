import React from 'react';
import styled from 'styled-components';
import { Flex, Text } from '../elem';

const Footer = () => {
	return (
		<Container>
			<OuterBox>
				<InnerBox>
					<Text mg="0 0 10px 0" fs="28px" fw="600">BackEnd</Text>
					<Text mg="0 0 10px 0">김성경 https://github.com/Code-Angler /// https://velog.io/@code_angler</Text>
					<Text mg="0 0 10px 0">이태강 https://github.com/BlossomWhale</Text>
					<Text >전영진 https://github.com/ipinid613 /// https://velog.io/@ipinid613</Text>
				</InnerBox>
				<InnerBox style={{marginLeft:"30px"}}>
					<Text mg="0 0 10px 0" fs="28px" fw="600">FrontEnd</Text>
					<Text mg="0 0 10px 0">이승규 https://github.com/dltmdrbtjd /// https://velog.io/@dltmdrbsla14</Text>
					<Text>예상기 https://github.com/with-key /// https://velog.io/@with-key</Text>
				</InnerBox>
			</OuterBox>
			<Flex between>
				<div>Copyright 2021 &copy; 오늘의레피시</div>
				<div>v 1.0.2</div>
			</Flex>
		</Container>
	);
};

const OuterBox = styled.div`
	margin-bottom: 20px;
	display: flex;
`;

const InnerBox = styled.div`

`;

const Container = styled.footer`
	margin-top: 150px;
	padding: 50px;
	width: 100%;
	height: 250px;
	color: #fff;
	background-color: #ff7776;
`;
export default Footer;
