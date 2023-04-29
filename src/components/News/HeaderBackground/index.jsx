import React from 'react';
import telosBrandNews from '../../../assets/images/News/telos-brand-news.png';
import userCircle from '../../../assets/images/News/user-circle.png';

import {
    AutorWrapper,
    BackgroundWrapper,
    BrandWrapper,
    Container,
    HeaderTitle,
    Image,
    ReadingTime,
    UserCircle,
    UserName
} from './styles';

const HeaderBackground = () => {
    return(
        <Container>
            <BackgroundWrapper>
                <BrandWrapper>
                    <Image src={telosBrandNews} />
                </BrandWrapper>
                <HeaderTitle>
                    Burnout: você sabe lidar com o esgotamento profissional?
                </HeaderTitle>
            </BackgroundWrapper>
            <AutorWrapper>
                <UserCircle src={userCircle}/>
                <UserName>John Doe</UserName>
                <ReadingTime>Tempo de leitura: 10 minutos</ReadingTime>
            </AutorWrapper>
        </Container>
    );
}

export default HeaderBackground;