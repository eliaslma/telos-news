import React from 'react';

import {
    ButtonTitle,
    Container
} from './styles';

const ReadTooButton = () => {
    return(
        <Container to="/news">
            <ButtonTitle>ler agora</ButtonTitle>
        </Container>
    );
}

export default ReadTooButton;