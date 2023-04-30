import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import burnoutNewImage from '../../../assets/images/News/burnout-new-image.png';
import telosBrandNews from '../../../assets/images/News/telos-brand-news.png';
import userCircle from '../../../assets/images/News/user-circle.png';

import readTooMiniCardOne from '../../../assets/images/News/read-card-too-1.png';
import readTooMiniCardTwo from '../../../assets/images/News/read-card-too-2.png';
import readTooMiniCardThree from '../../../assets/images/News/read-card-too-3.png';
import readTooMiniCardFour from '../../../assets/images/News/read-card-too-4.png';
import ReadTooMiniCard from '../ReadTooMiniCard';

import {
    AutorWrapper,
    BackgroundWrapper,
    BrandWrapper,
    Container,
    HeaderTitle,
    Image,
    ImageNew,
    LoginButton,
    LoginButtonTitle,
    MainContent,
    MenuButton,
    MenuButtonTitle,
    NewsContent,
    NewsText,
    ReadTooTitle,
    ReadingTime,
    SideContent,
    TitleText,
    UserCircle,
    UserName
} from './styles';

const NewsTemplate = () => {
    return (
        <Container>
            <BackgroundWrapper>
                <BrandWrapper>
                    <MenuButton>
                        <MenuIcon sx={{ color: '#FFFFFF' }} />
                        <MenuButtonTitle>Menu</MenuButtonTitle>
                    </MenuButton>
                    <Image src={telosBrandNews} />
                    <LoginButton>
                        <LoginIcon sx={{ color: '#FFFFFF' }} />
                        <LoginButtonTitle>Entrar</LoginButtonTitle>
                    </LoginButton>
                </BrandWrapper>
                <HeaderTitle>
                    Burnout: você sabe lidar com esgotamento profissional?
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
                    <ImageNew src={burnoutNewImage} />
                    <TitleText>Sintomas do Burnout</TitleText>
                    <NewsText>O sintoma mais característico da síndrome é a sensação de esgotamento físico e emocional. Além disso, sintomas como dores de cabeça, cansaço, palpitação, pressão alta, insônia também podem estar associadas ao distúrbio.</NewsText>
                </MainContent>
                <SideContent>
                    <ReadTooTitle>Leia também</ReadTooTitle>
                    <ReadTooMiniCard
                        new={{
                            image: readTooMiniCardOne,
                            title: "Mercado de trabalho",
                            subtitle: "Gamificação: saiba como ela pode…"
                        }} />
                    <ReadTooMiniCard
                        new={{
                            image: readTooMiniCardTwo,
                            title: "Negócios",
                            subtitle: "Por que trabalhar com propósito ?"
                        }} />
                    <ReadTooMiniCard
                        new={{
                            image: readTooMiniCardThree,
                            title: "Educação",
                            subtitle: "Por que contratar treinamentos…"
                        }} />
                    <ReadTooMiniCard
                        new={{
                            image: readTooMiniCardFour,
                            title: "Educação",
                            subtitle: "O que levar em consideração…"
                        }} />

                </SideContent>
            </NewsContent>
        </Container>
    );
}

export default NewsTemplate;