import TelosBrand from '../../../assets/images/Home/telos-brand.png';
import LoginButton from "../LoginButton";
import { Container, Image } from "./styles";


const Header = () => {
    return (
        <Container>
            <Image src={TelosBrand}/>
            <LoginButton/>
        </Container>
    );
}

export default Header;