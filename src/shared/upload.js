import React from 'react';

import styled from 'styled-components';
import { Text } from '../elem';

const Upload = (props) => {
    const fileInput = React.useRef();
    console.log(fileInput);

    const selectFile = (e) => {
        const reader = new FileReader();
        const file = fileInput.current.files[0];

        reader.readAsDataURL(file);
        console.log(file);
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


export default Upload;