import { Container, Brand, Menu, Search, Content, NewNote } from './styles';
import { Header } from '../../components/Header';
import { ButtonText} from '../../components/ButtonText';
import { FiPlus } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { FiSearch } from 'react-icons/fi';
export function Home(){
    return(
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header />

            <Menu>
            <li><ButtonText title="Todos" $isactive/></li>
            <li><ButtonText title="NodeJs"/></li>
            <li><ButtonText title="ReactJs"/></li>
                
            </Menu>

            <Search>
                <Input placeholder="Pesquise pelo título" icon={ FiSearch }/>
            </Search>

            <Content>

            </Content>

            <NewNote>
                <FiPlus />
                    Criar Nota
            </NewNote>

        </Container>
    )
}