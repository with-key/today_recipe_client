import React from 'react';

import styled from 'styled-components';
import { Button, Text } from '../elem';
import AWS from 'aws-sdk';

import { useDispatch } from 'react-redux';
import { imageCreators } from '../modules/image';

const Upload = (props) => {
    // AWS.config.update({
    //     region: "ap-northeast-2",
    //     credentials: new AWS.CognitoIdentityCredentials({
    //       IdentityPoolId: "ap-northeast-2:1341881f-0e47-4578-a076-7cf301309b84",
    //     }),
    //   })

    const fileInput = React.useRef();
    const dispatch = useDispatch();
    // const date = new Date()

    const selectFile = (e) => {
        const file = fileInput.current.files[0];
        const filename = file.name
        console.log(filename)
        dispatch(imageCreators.setPreview(filename));

        // console.log(date.getTime())
        // console.log(file.name)
        // console.log(file.name+date.getTime())

        // const upload = new AWS.S3.ManagedUpload({
        //     params: {
        //       Bucket: "todayrecipe",
        //       Key: file.name + date.getTime() + ".jpg",
        //       Body: file,
        //     },
        //   })

        // const promise = upload.promise();

        // promise.then((data) => {
        //     console.log(data)
        // }).catch((err) => {
        //     window.alert("이미지 업로드에 문제가 있어요!",err)
        // })
    }


    return (
        <React.Fragment>
            <Box>
                <Text fs="20px" mg="0 0 10px 0" bold>이미지 업로드</Text>
                <input type="file" ref={fileInput} onChange={selectFile}/>
            </Box>
        </React.Fragment>
    )
}

const Box = styled.div`
    width: 100%;
    height: 10vh;
`;
// Amazon Cognito 인증 공급자를 초기화합니다
// CognitoCachingCredentialsProvider credentialsProvider = new CognitoCachingCredentialsProvider(
//     getApplicationContext(),
//     "ap-northeast-2:1341881f-0e47-4578-a076-7cf301309b84", // 자격 증명 풀 ID
//     Regions.AP_NORTHEAST_2 // 리전
// );

export default Upload;