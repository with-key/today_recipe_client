import React from 'react';

import styled from 'styled-components';

const Text = (props) => {
    const {children,size,bold,color,margin} = props;

    const styles = {
        size: size,
        bold: bold,
        margin: margin,
        color: color,
    }

    return (
        <React.Fragment>
            <Font {...styles}>{children}</Font>
        </React.Fragment>
    )
}

Text.defaultProps = {
    children: null,
    size: '16px',
    bold: false,
    color: '#000000',
    margin: false,
}

const Font = styled.p`
    font-size: ${(props) => props.size};
    font-weight: ${(props) => (props.bold? '600' : '400')};
    color: ${(props) => props.color};
    margin: ${(props) => props.margin};
`;

export default Text;

