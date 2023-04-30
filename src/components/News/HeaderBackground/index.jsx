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
    MainContent,
    NewsContent,
    NewsText,
    ReadingTime,
    SideContent,
    TitleText,
    UserCircle,
    UserName
} from './styles';

const HeaderBackground = () => {
    return (
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
                <UserCircle src={userCircle} />
                <UserName>John Doe</UserName>
                <ReadingTime>Tempo de leitura: 10 minutos</ReadingTime>
            </AutorWrapper>
            <NewsContent>
                <MainContent>
                    <NewsText>Então você está sentindo estresse, ansiedade e às vezes uma alteração de humor muito rápida? Talvez você possa estar sofrendo da Síndrome de Burnout ou Síndrome do Esgotamento! Aqui iremos te explicar de maneira bem sintetizada o que é o burnout, seu significado, alguns sintomas, formas de tratamento e como lidar. Continue lendo!</NewsText>
                    <TitleText>Burnout: o que é?</TitleText>
                    <NewsText>O burnout ou síndrome do esgotamento profissional é um distúrbio psíquico advindo de condições de trabalho desgastantes. Fazer muitas horas extras, ter uma pressão excessiva e ininterrupta sobre seu cargo são alguns dos motivos que podem te gerar essa sensação de esgotamento e desânimo para o trabalho.</NewsText>
                    <NewsText style={{ marginTop: '20px' }}>Como características principais, possui o estado de tensão emocional e estresse crônico devido a condições de trabalhos físicos, emocionais e psicológicos desgastantes. Profissões na área da educação, saúde, segurança entre outras estão entre as mais afetadas devido ao alto envolvimento interpessoal. Na quarentena, devido ao covid-19, muitos profissionais têm reclamado do aumento da jornada de trabalho e aumento de atribuições, gerando um grande estresse e desconforto.</NewsText>
                </MainContent>
                <SideContent>
                </SideContent>
            </NewsContent>
        </Container>
    );
}

export default HeaderBackground;