import LoginIcon from '@mui/icons-material/Login';
import { Button, Title } from './styles';

const LoginButton = () => {
    return(
        <Button>
            <LoginIcon/>
            <Title>Entrar</Title>
        </Button>
    );
}

export default LoginButton;