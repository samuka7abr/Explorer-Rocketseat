import { Container } from "./styles";

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from "../../components/Section";
import { Links } from "../../components/Section/styles";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details(){
  return(
    <Container>
      <Header />
      <ButtonText title="excluir nota"/>

      <Section title= "Links úteis">

        <Links>
          <li> <a href="#">http://github/samuka7abr</a></li>
          <li> <a href="#">http://github/samuka7abr</a></li>
        </Links>

      </Section>

      <Section title= "Marcadores">
        <Tag title="nodeJs" />
        <Tag title="reactJs" />
        <Tag title="express" />
      </Section>


    <Button title="voltar"/>
    </Container>
    
  )
}