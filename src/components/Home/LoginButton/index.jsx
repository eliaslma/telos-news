import LoginIcon from '@mui/icons-material/Login';
import { Button, Title } from './styles';

const LoginButton = () => {
    return(
        <Button>
            <LoginIcon sx={{color: '#49474A'}}/>
            <Title>Entrar</Title>
        </Button>
    );
}

export default LoginButton;