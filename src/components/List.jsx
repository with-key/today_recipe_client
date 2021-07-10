import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
import { Row, Button } from '../elem';

const List = ({ history }) => {
	const articles = useSelector((store) => store.article.articles);
	return (
		<Container>
			<Title>
				<H1>엄선한 오늘의 레시피!</H1>
				<Button primary large>
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
						작성일 / 작성자
					</Col>
					<Col width='10%' centerY centerX>
						조회수
					</Col>
					<Col width='10%' centerY centerX>
						좋아요
					</Col>
				</ListHeader>
				{articles.map((item) => (
					<Row item={item} key={item.id} history={history}>
						<Col width='10%' centerY centerX>
							{item.id}
						</Col>
						<Col width='50%' centerY>
							{item.title}
						</Col>
						<Col width='20%' centerY centerX>
							<div>
								<div>{item.createdAt}</div>
								<div>{item.user.userId}</div>
							</div>
						</Col>
						<Col width='10%' centerY centerX>
							{item.views}
						</Col>
						<Col width='10%' centerY centerX>
							{item.isLikeCnt}
						</Col>
					</Row>
				))}
				<Pagintion>
					<Button large primary>
						더보기
					</Button>
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
	padding: 48px 32px;
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
	margin-top: 100px;
	padding-bottom: 50px;
	height: 100px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default List;
