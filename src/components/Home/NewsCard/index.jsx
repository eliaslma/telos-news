import React from 'react';
import newCardImage from '../../../assets/images/Home/news-card-image.png';
import KnowMoreButton from '../KnowMoreButton';
import ReadNowButton from '../ReadNowButton';

import {
    Buttons,
    Container,
    DescriptionCard,
    ImageCard,
    TitleCard,
} from './styles';

const NewsCard = () => {
    return (
        <Container>
            <ImageCard src={newCardImage} />
            <TitleCard>Tecnologia</TitleCard>
            <DescriptionCard>
                Entenda como a tecnologia vem alterando os mais
                diversos tipos de relações pessoais e profissionais
            </DescriptionCard>
            <Buttons>
                <KnowMoreButton/>
                <ReadNowButton/>
            </Buttons> 
        </Container>
    );
}

export default NewsCard;