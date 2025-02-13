import { Container, Brand, Menu, Search, Content, NewNote } from './styles';
import { api } from '../../../../NotesManager-API/src/services/api';
import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/Section';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Note } from '../../components/Note';
import { useState, useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';


export function Home() {
  const [tags, setTags] = useState([]);


  

  useEffect( () => {
    const token = localStorage.getItem("@rocketnotes:token");
    async function fetchTags(){
      const response = await api.get("/tags", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      setTags(response.data)
    }
    fetchTags()
  }, [] )

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title="Todos" $isactive /></li>
        {
          tags && tags.map(tag => (
          <li key={String(tag.id)}><ButtonText title={tag.name}  /></li>
        ))
        }
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note to={"/Details/${5}"} data={{
            title: 'React',
            tags: [
              { id: '1', name: 'react' },
              { id: '2', name: 'rocketseat' }
            ]
          }}
          />
        </Section>
      </Content>

      <NewNote to="/New">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}