import { api } from "../../../../NotesManager-API/src/services/api";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonText } from "../../components/ButtonText";
import { Container, Links, Content } from "./styles";
import { Section } from "../../components/Section";
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { useState, useEffect } from "react";
import { Tag } from "../../components/Tag";

export function Details() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const params = useParams();
  
  useEffect(() => {
    async function fetchNote() {
      const token = localStorage.getItem("@rocketnotes:token"); 
      const response = await api.get(`/notes/${params.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data);
     
    }

    fetchNote();
  }, []); 

  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            <ButtonText title="excluir nota" />

            <h1>{data.title}</h1>
            <p>{data.description}</p>

            {data.links && (
              <Section title="Links úteis">
                <Links>
                  {data.links.map(link => (
                    <li key={String(link.id)}>
                      <a href={link.url} target="blank">
                        {link.url}
                      </a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}

            {
              data.tags &&
              <Section title="Marcadores">
                {data.tags.map(tag => <Tag key={String(tag.id)} title={tag.name} />)}
            </Section>}

            <Button title="voltar" onClick={() => navigate("/")} />
          </Content>
        </main>
      )}
    </Container>
  );
}
