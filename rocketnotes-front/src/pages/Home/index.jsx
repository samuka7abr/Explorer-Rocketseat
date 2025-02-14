import { Container, Brand, Menu, Search, Content, NewNote } from './styles';
import { api } from '../../../../NotesManager-API/src/services/api';
import { ButtonText } from '../../components/ButtonText';
import { useNavigate } from 'react-router-dom';
import { Section } from '../../components/Section';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Note } from '../../components/Note';
import { useState, useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';


export function Home() {
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState("");
  const [search, setSearch] = useState([]);
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  function handleTagSelected(tagName){
    if(tagName === "all"){
      return setTagsSelected([]);
    }

    const alreadySelected = tagsSelected.includes(tagName);
    if(alreadySelected){
      const filteredTags = tagsSelected.filter(tag => tag !== tagName);
      setTagsSelected(filteredTags)
    }else{
      setTagsSelected(prevState => [...prevState, tagName]);
  }
    };

    function handleDetails(id){
      console.log("Tentando navegar para:", `/details/${id}`);
      
      setTimeout(() => {
        navigate(`/details/${id}`);
        console.log("Navegação feita!");
      }, 1000);
    }

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
  }, [] );

  useEffect(() => {
    const token = localStorage.getItem("@rocketnotes:token");
    async function fetchNotes(){
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setNotes(response.data);
    }

    fetchNotes();
  }, [tagsSelected, search]);


  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title="Todos" $isactive={tagsSelected.length === 0} 
        onClick={() => handleTagSelected("all")} /></li>
        {
          tags && tags.map(tag => (
          <li key={String(tag.id)}><ButtonText title={tag.name}  
            onClick={() => handleTagSelected(tag.name)}
            $isactive={tagsSelected.includes(tag.name)}   
          /></li>
        ))
        }
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título"
        onChange={e => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="Minhas notas">
          {
            notes.map(note => (
            <Note 
              key={String(note.id)}
              data={note}
              onClick={() => handleDetails(note.id)}
            />))
            }
        </Section>
      </Content>

      <NewNote to="/New">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}