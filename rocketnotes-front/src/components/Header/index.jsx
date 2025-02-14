import { api } from '../../../../NotesManager-API/src/services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { Container, Profile, Logout } from './styles';
import { Link, useNavigate } from 'react-router-dom';
import { RiShutDownLine} from 'react-icons/ri';
import { useAuth } from '../../hooks/auth';

export function Header() {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  function handleSignOut(){
    signOut();
    navigate('/')
  }

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
        <Logout onClick={handleSignOut}>
          <RiShutDownLine />
        </Logout>
    </Container>
  )
}