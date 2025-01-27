import { Container, Profile } from './styles'

export function Header() {
  return (
    <Container>
        <Profile> 
            <img src= "https://github.com/samuka7abr.png" alt='Foto do usuário'/>

            <div>
                <span>Bem-vindo</span>
                <strong>Samuel Abrão</strong>
            </div>
        </Profile>
    </Container>
  )
}