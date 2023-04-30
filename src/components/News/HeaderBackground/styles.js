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
    font-family: 'Paralucent', sans-serif;
    font-weight: medium;
    margin-left: 15px;
    color: #0E1A22B2;
`;

export const ReadingTime = styled.text`
    font-size: 15px;
    font-family: 'Paralucent', sans-serif;
    font-weight: bold;
    margin-left: 155px;
    color: #0E1A22B2;
`;

export const NewsContent = styled.div`
    display: flex;
    margin-top: 80px;
`;

export const MainContent = styled.div`
    display: flex;
    width: 653px;
    margin-left: 100px;
    flex-direction: column;
`;

export const SideContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 120px;
`;

export const NewsText = styled.text`
    font-size: 15px;
    font-family: 'Paralucent', sans-serif;
    font-weight: medium;
    color: #A6A6A6;
`;

export const TitleText = styled.text`
    font-size: 25px;
    font-family: 'Paralucent', sans-serif;
    font-weight: bold;
    color: #4D4D4D;
    margin-top: 45px;
    margin-bottom: 20px;
`;

export const ImageNew = styled.img`
    margin-top: 45px;
`;

export const ReadTooTitle = styled.text`
    font-size: 20px;
    font-family: 'Paralucent', sans-serif;
    font-weight: bold;
    color: #4D4D4D;
`;

