import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react';
import ReadTooButton from '../ReadTooButton';

import {
    ButtonWrapper,
    Container,
    Description,
    Footer,
    Header,
    HeaderTitle,
    Image,
    Title
} from './styles';

const ReadTooCard = ({ ...props }) => {

    return (
        <Container>
            <Header>
                <MoreVertIcon />
                <HeaderTitle>Leia também</HeaderTitle>
            </Header>
            <Image src={props.new.image} />
            <Footer>
                <Title>{props.new.title}</Title>
                <Description>{props.new.description}</Description>
                <ButtonWrapper>
                    <ReadTooButton />
                </ButtonWrapper>
            </Footer>
        </Container>
    );
}

export default ReadTooCard;