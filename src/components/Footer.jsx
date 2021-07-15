import React from 'react';
import styled from 'styled-components';

// compo & elem & share & util
import { Flex, Text, Git, Velog } from '../elem';

const Footer = () => {
	return (
		<Container>
			<OuterBox>
				<InnerBox>
					<Text mg='0 0 10px 0' fs='28px' fw='600'>
						BackEnd
					</Text>
					<Flex gap='10px'>
						<div>김성경</div>
						<Git
							_onClick={() => {
								window.location.href = 'https://github.com/Code-Angler';
							}}
						/>
						<Velog
							_onClick={() => {
								window.location.href = 'https://velog.io/@code_angler';
							}}
						/>
					</Flex>
					<Flex gap='10px'>
						<div>이태강</div>
						<Git
							_onClick={() => {
								window.location.href = 'https://github.com/BlossomWhale';
							}}
						/>
					</Flex>
					<Flex gap='10px'>
						<div>전영진</div>
						<Git
							_onClick={() => {
								window.location.href = 'https://github.com/ipinid613';
							}}
						/>
						<Velog
							_onClick={() => {
								window.location.href = 'https://velog.io/@ipinid613';
							}}
						/>
					</Flex>
				</InnerBox>
				<InnerBox style={{ marginLeft: '30px' }}>
					<Text mg='0 0 10px 0' fs='28px' fw='600'>
						FrontEnd
					</Text>
					<Flex gap='10px'>
						<div>이승규</div>
						<Git
							_onClick={() => {
								window.location.href = 'https://github.com/dltmdrbtjd';
							}}
						/>
						<Velog
							_onClick={() => {
								window.location.href = 'https://velog.io/@dltmdrbsla14';
							}}
						/>
					</Flex>
					<Flex gap='10px'>
						<div>예상기</div>
						<Git
							_onClick={() => {
								window.location.href = 'https://github.com/with-key';
							}}
						/>
						<Velog
							_onClick={() => {
								window.location.href = 'https://velog.io/@with-key';
							}}
						/>
					</Flex>
				</InnerBox>
			</OuterBox>
			<Flex right gap='10px'>
				<div>Copyright 2021 &copy; 오늘의레시피</div>
				<div>v 1.0.3</div>
			</Flex>
		</Container>
	);
};

const OuterBox = styled.div`
	margin-bottom: 20px;
	display: flex;
`;

const InnerBox = styled.div``;

const Container = styled.footer`
	margin-top: 150px;
	padding: 50px;
	width: 100%;
	height: 250px;
	color: #fff;
	background-color: #ff7776;
`;
export default Footer;
