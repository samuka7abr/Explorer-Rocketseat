import { api } from '../../../../NotesManager-API/src/services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { Container, Profile, Logout } from './styles';
import { RiShutDownLine} from 'react-icons/ri';
import { useAuth } from '../../hooks/auth';
import { Link } from 'react-router-dom';

export function Header() {
  const { signOut, user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  return (
    <Container>
        <Profile to="/Profile"> 
            <img src={avatarUrl} alt='Foto do usuário'/>

            <div>
                <span>Bem-vindo</span>
                <strong>{user.name}</strong>
            </div>
        </Profile>
        <Logout onClick={signOut}>
          <RiShutDownLine />
        </Logout>
    </Container>
  )
}