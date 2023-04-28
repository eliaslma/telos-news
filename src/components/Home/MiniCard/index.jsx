import React from 'react';
import ReadNowMiniButton from '../ReadNowMiniButton';

import {
    Container,
    FooterCard,
    HeaderCard,
    ImageWrapper,
    TitleMiniCard
} from './styles';

const MiniCard = () => {
    return(
        <Container>
            <HeaderCard>
                <ImageWrapper>
                    <TitleMiniCard>Por que trabalhar com  propósito ?</TitleMiniCard>
                </ImageWrapper>
            </HeaderCard>
            <FooterCard>
                <ReadNowMiniButton/>
            </FooterCard>
        </Container>
    );
}

export default MiniCard;