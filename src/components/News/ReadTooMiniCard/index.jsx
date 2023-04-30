import React from 'react';

import {
    CardRight,
    Container,
    Image,
    Subtitle,
    TitleCard
} from './styles';

const ReadTooMiniCard = ({...props}) => {
    return(
        <Container>
            <Image src={props.new.image}/>
            <CardRight>
                <TitleCard>{props.new.title}</TitleCard>
                <Subtitle>{props.new.subtitle}</Subtitle>
            </CardRight>
        </Container>
    );
}

export default ReadTooMiniCard;