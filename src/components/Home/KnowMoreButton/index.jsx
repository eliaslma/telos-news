import React from 'react';

import {
    ButtonTitle,
    Container
} from './styles';

const KnowMoreButton = () => {
    return(
        <Container to="/news">
            <ButtonTitle>Saiba mais</ButtonTitle>
        </Container>
    );
}

export default KnowMoreButton;