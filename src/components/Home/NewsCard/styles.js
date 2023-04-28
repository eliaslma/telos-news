import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 676px;
    height: 770px;
    background-color: #F7F2FA;
    flex-direction: column;
    border-radius: 21.5px;
`;

export const TitleCard = styled.text`
    font-family: "Roboto", sans-serif;
    font-size: 25px;
    color: #49454F;
    margin-left: 28px;
    font-weight: 400;
    margin-top: 10px;
`;

export const DescriptionCard = styled.text`
    font-family: "Roboto", sans-serif;
    font-size: 25px;
    color: #49454F;
    margin-top: 57px;
    font-weight: 400;
    margin-left: 28px;
`;

export const ImageCard = styled.img`
    height: 393px;
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-right: 28px;
    margin-top: 57px;
`;