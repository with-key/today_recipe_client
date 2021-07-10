import React from 'react';
import styled from 'styled-components';
import { Text } from '.';

const Input = (props) => {
    const {type,label,placeholder,multiLine,_onChange} = props;

    if(multiLine){
        return (
            <React.Fragment>
                {label && <Text margin="20px 5px 10px 0">{label}</Text>}
                <TextArea placeholder={placeholder} rows={20} onChange={_onChange}/>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            {label && <Text margin="20px 5px 5px 0">{label}</Text>}
            <NormalInput type={type} placeholder={placeholder} onChange={_onChange}/>
        </React.Fragment>
    )
}

Input.defaultProps = {
    label: false,
    type: 'text',
    placeholder: '',
    multiLine: false,
    _onChange: () => {},
}



const NormalInput = styled.input`
    border: 1px solid #c4c4c4;
    border-radius: 4px;
    width: 100%;
    padding: 8px 8px;
    box-sizing: border-box;
    display: block;
    margin-top: 15px;

   &:focus {
       outline:none;
       border: 1px solid #ff7776;
   }
`;

const TextArea = styled.textarea`
    border: 1px solid #c4c4c4;
    border-radius: 4px;
    width: 100%;
    padding: 8px 8px;
    box-sizing: border-box;
    resize: none;
    overflow: auto;

    &:focus {
       outline:none;
       border: 1px solid #ff7776;
   }
`;


export default Input;