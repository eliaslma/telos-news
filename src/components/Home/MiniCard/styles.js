import styled from "styled-components";
import img from '../../../assets/images/Home/mini-card-image-1.png';

export const Container = styled.div`
    border-left: 2px solid #CAC4D0;
    margin-bottom: 75px;
    height: 348px;
`;

export const ImageWrapper = styled.div`
    display: flex;
    height: 216.08px;
    width: 337px;
    background-image: url(${img});
    background-size: contain;
`;

export const TitleMiniCard = styled.text`
    font-family: "Roboto", sans-serif;
    font-size: 25px;
    font-weight: 400;
    align-self: flex-end;
`;

export const HeaderCard = styled.div`
    padding: 13px;
    margin: 15px;
    background-color: #F1F0EF;
    border-radius: 29px;
`;

export const FooterCard = styled.div`
    display: flex;
    padding: 19px;
    border-top: 2px solid #CAC4D0;
`;
