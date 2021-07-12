import React from 'react';
import styled from "styled-components";

const Image = (props) => {
    const {shape,src,size,_onClick} = props

    const styles = {
        src: src,
        size: size,
    }

    if(shape === "circle"){
        return (
            <ImageCircle onClick={_onClick} {...styles}></ImageCircle>
        )
    }

    if(shape === "rectangle"){
        return (
            <AspectOutter>
                <AspectInner {...styles}></AspectInner>
            </AspectOutter>
        )
    }

    return (
        <React.Fragment>
            <ImageDefault {...styles}></ImageDefault>
        </React.Fragment>
    )
}

Image.defaultProps = {
    shape: "circle",
    src: "https://m.young.hyundai.com:444/upload/CMS_NEWS_IMAGE/2020/10/22/CMS_NEWS_IMAGE_Q0t8p6urFXhUaqTGv71c.png",
    size: 36,
    _onClick: () => {},
    cursor: null,
}

const ImageDefault = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    background-image: url("${(props) => props.src}");
    background-size: cover;
    background-position: center;
`;

const AspectOutter = styled.div`
    width: 100%;
    min-width: 250px;
    margin-top: 20px;
`;

const AspectInner = styled.div`
    position: relative;
    padding-top: 75%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;
    background-position: center;
    cursor: pointer;
`;

const ImageCircle = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);
    background-image: url("${(props) => props.src}");
    background-size: cover;
    background-position: center;
    margin-right: 10px;
    cursor: pointer;
    z-index: 2;
    position: relative;
`;


export default Image;