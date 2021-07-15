import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
import { Row, Button, Text } from '../elem';
import { dateConvert } from '../util';

const List = ({ history }) => {
	const articles = useSelector((store) => store.article.list);
	console.log(articles);
	const isLogin = useSelector((store) => store.user.is_login);

	return (
		<Container>
			<Title>
				<H1>엄선한 오늘의 레시피!</H1>
				<Button
					disabled={isLogin ? '' : 'disabled'}
					primary
					large
					_onClick={() => {
						history.push('/add_article');
					}}
				>
					레시피 추가
				</Button>
			</Title>
			<ListWrap>
				<ListHeader>
					<Col width='10%' centerY centerX>
						순번
					</Col>
					<Col width='50%' centerY>
						제목
					</Col>
					<Col width='20%' centerY centerX>
						작성자
					</Col>
					<Col width='20%' centerY centerX>
						작성시간
					</Col>
				</ListHeader>
				{articles.map((item, idx) => (
					<Row item={item} history={history} key={item.id}>
						<Col width='10%' centerY centerX>
							{articles.length - idx}
						</Col>
						<Col width='50%' centerY>
							{item.title}
						</Col>
						<Col width='20%' centerY centerX>
							<Text mg='10px 0'>{item.username}</Text>
						</Col>
						<Col width='20%' centerY centerX>
							{dateConvert(item.createdAt)}
						</Col>
					</Row>
				))}
				<Pagintion>
					{/* <Button large primary>
						더보기
					</Button> */}
				</Pagintion>
			</ListWrap>
		</Container>
	);
};

const Container = styled.div`
	margin-top: 50px;
	border-radius: 10px;
	background-color: #fff;
`;
const Col = styled.div`
	font-size: 16px;
	color: #333;
	display: flex;
	border-bottom: 1px solid #e3e8ed;
	height: 100%;
	width: ${(props) => props.width};
	${(props) =>
		props.centerY &&
		css`
			align-items: center;
		`}

	${(props) =>
		props.centerX &&
		css`
			justify-content: center;
		`}
`;
const ListWrap = styled.div`
	width: 100%;
	padding: 0 24px;
`;
const Title = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 32px 32px 0 32px;
	margin-bottom: 50px;
`;

const H1 = styled.h1`
	color: #ff7776;
	font-size: 2.4rem;
	font-weight: 700;
`;

const ListHeader = styled.div`
	width: 100%;
	height: 40px;
	display: flex;
	div {
		font-weight: 600;
		color: #333;
	}
`;

const Pagintion = styled.div`
	/* padding-bottom: 20px; */
	height: 100px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default List;
