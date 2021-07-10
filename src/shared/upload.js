import React from 'react';

import styled from 'styled-components';
import { Text } from '../elem';
import AWS from 'aws-sdk';

const Upload = (props) => {
    AWS.config.update({
        region: "ap-northeast-2",
        credentials: new AWS.CognitoIdentityCredentials({
          IdentityPoolId: "ap-northeast-2:1341881f-0e47-4578-a076-7cf301309b84",
        }),
      })

    const fileInput = React.useRef();
    console.log(fileInput);

    const selectFile = (e) => {
        const file = fileInput.current.files[0];

        console.log(file)
    }


    return (
        <React.Fragment>
            <Box>
                <Text size="20px" margin="0 0 10px 0" bold>이미지 업로드하기</Text>
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