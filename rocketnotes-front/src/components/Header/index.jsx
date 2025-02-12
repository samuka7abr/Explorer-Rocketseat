import { Container, Profile, Logout } from './styles';
import { RiShutDownLine} from 'react-icons/ri';
import { useAuth } from '../../hooks/auth';
import { Link } from 'react-router-dom';

export function Header() {
  const { signOut } = useAuth();
  return (
    <Container>
        <Profile to="/Profile"> 
            <img src= "https://github.com/samuka7abr.png" alt='Foto do usuário'/>

            <div>
                <span>Bem-vindo</span>
                <strong>Samuel Abrão</strong>
            </div>
        </Profile>
        <Logout onClick={signOut}>
          <RiShutDownLine />
        </Logout>
    </Container>
  )
}