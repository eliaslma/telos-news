import React from 'react';

import {
    ButtonTitle,
    Container
} from './styles';

const ReadNowMiniButton = () => {
    return(
        <Container to="/news">
            <ButtonTitle>Ler Agora</ButtonTitle>
        </Container>
    );
}

export default ReadNowMiniButton;