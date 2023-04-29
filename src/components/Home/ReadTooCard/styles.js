import styled from 'styled-components';

export const Container = styled.div` 
    display: flex;
    background-color: #DADCE0;
    border-radius: 12px;
    flex-direction: column;
    width: 360px;
    height: 480px;
`;

export const Header = styled.div`
    display: flex;
    padding: 24px;
    background-color: #F7F2FA;
    border-radius: 12px 12px 0px 0px;
    
`;

export const HeaderTitle = styled.text`
    font-family: "Campton", sans-serif;
    font-weight: bold;
    color: #3D3D3D;
    font-size: 20px;
    margin-left: 20px;
`;

export const Image = styled.img`
    height: 200px;
    width: 360px;
    margin: 18px 0px;
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px 16px;
    background-color: #F7F2FA;
    height: 100vh;
    border-radius: 0px 0px 12px 12px;
`;

export const Title = styled.text`
    font-family: "Roboto", sans-serif;
    color: #1D1B20;
    font-size: 16px;
`;

export const Description = styled.text`
    font-family: "Roboto", sans-serif;
    color: #49454F;
    font-size: 14px;
    margin-top: 32px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 32px;
`;