import styled from "styled-components";
import img from '../../../assets/images/News/teaser-telos.png';


export const Container = styled.div`
    display: flex;
    padding: 0px 110px;
    flex-direction: column;
`;

export const BackgroundWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 659px;
    width: 1240px;
    background-image: url(${img});
    background-size: contain;
    justify-content: space-between;
    background-position: center;
`;

export const Image = styled.img`
    width: 93.75px;
    height: 30px;
`;

export const BrandWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 35px;
    border-bottom: 1px solid white;
`;

export const HeaderTitle = styled.text`
    padding: 0px 100px;
    font-size: 50px;
    font-family: 'Campton', sans-serif;
    font-weight: bold;
    margin-bottom: 36px;
`;

export const AutorWrapper = styled.div`
    display: flex;
    align-items: center;
    width: '100%';
    padding: 0px 100px;
    margin-top: 20px;
`;

export const UserCircle = styled.img`
    display: flex;
    width: 35px;
    height: 35px;
`;

export const UserName = styled.text`
    font-size: 15px;
    font-family: 'Campton', sans-serif;
    font-weight: bold;
    margin-left: 15px;
    color: #0E1A22B2;
`;

export const ReadingTime = styled.text`
    font-size: 15px;
    font-family: 'Campton', sans-serif;
    font-weight: bold;
    margin-left: 155px;
    color: #0E1A22B2;
`;