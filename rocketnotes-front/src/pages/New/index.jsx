import { Textarea } from '../../components/Textarea';
import { NoteItem} from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Container, Form } from './styles';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export function New() {
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleAddLink(){
    setLinks(prevState => [...prevState, newLink]);
    setNewLink("");

  }

  function handleRemoveLink(LinkDeleted){
    setLinks(prevState => prevState.filter(link => link !== LinkDeleted));

  }

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted){
    
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>

          <Input placeholder="Título" />
          <Textarea placeholder="Observações" />

          <Section title="Links úteis">
            {
              links.map((link, index) => (
                <NoteItem 
                key={String(index)}
                value={link}
                onClick={() => handleRemoveLink(link)}
            />
              ))
            }

            <NoteItem 
            isNew 
            placeholder="Novo Link"
            value={newLink}
            onChange={e => setNewLink(e.target.value)}
            onClick={handleAddLink}
            />

          </Section>

          <div className="tags">
            <Section title="Marcadores">
              {
                tags.map((tag, index) => (
                  <NoteItem 
                  key={String(index)}
                  value={tag}
                  onClick={() => {}}
                  />
                ))
              
              }
              <NoteItem isNew 
              placeholder="Nova tag"
              onChange={e => setNewTag(e.target.value)}
              onClick={handleAddTag}
              />
            </Section>
          </div>

          <Button title="Salvar"/> 
        </Form>
      </main>
    </Container>
  )
}