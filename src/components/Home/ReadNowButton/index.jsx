import React from 'react';

import {
    ButtonTitle,
    Container
} from './styles';

const ReadNowButton = () => {
    return(
        <Container to="/news">
            <ButtonTitle>Ler Agora</ButtonTitle>
        </Container>
    );
}

export default ReadNowButton;