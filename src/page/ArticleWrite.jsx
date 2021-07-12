import React from 'react';

import styled from 'styled-components';
import { Text, Input, Button } from '../elem';

import { useDispatch, useSelector } from 'react-redux';
import { articleActions } from '../modules/article';

import Template from '../components/Template';
import Upload from '../shared/upload';


const ArticleWrite = (props) => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();

    console.log(user)

    const [contents, setContents] = React.useState({title:'',content:''});


    const WriteSucces = () => { // upload하기 이따 같이 넣기
        dispatch(articleActions.addArticleDB(contents));
    }

    return (
        <React.Fragment>
            <Template>
                <Container>
                    <Box>
                        <Upload />
                        <Grid>
                            <Text fs="28px" mg="0 0 30px 0" bold>제목</Text>
                            <Input label="오늘의 레시피 제목을 작성해주세요!" _onChange={(e) => {
                                setContents({...contents,title:e.target.value});
                            }}/>
                        </Grid>
                        <Grid>
                            <Text fs="28px" mg="30px 0 30px 0" bold>레시피</Text>
                            <Input multiLine label="선정하신 요리의 레시피를 작성해주세요!" _onChange={(e) => {
                                setContents({...contents,content:e.target.value})
                            }}/>
                        </Grid>
                        <BtnBox>
                            <Button primary large _onClick={WriteSucces}>작성완료</Button>
                        </BtnBox>
                    </Box>
                </Container>
            </Template>
        </React.Fragment>
    )
}

const Box = styled.div`
    width: 70vw;
    height: 80vh;
    background-color: #fff;
    padding:60px;
    box-sizing: border-box;
    box-shadow: 7px 7px 7px rgba(0,0,0,0.25);
    border-radius: 10px;
    overflow: auto;
`;

const Grid = styled.div`
    width: 100%;
    display: block;
`;

const BtnBox = styled.div`
    display: block;
    text-align: center;
    margin-top: 5%;
`;

const Container = styled.div`
	width: 100%;
	height: calc(100vh - 150px);
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	align-items: center;
`;

export default ArticleWrite;