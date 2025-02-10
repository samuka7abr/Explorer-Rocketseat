import { Button } from '../../components/Button';
import { FiMail, FiLock } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { MyContext } from '../../myContext';
import { Container, Form } from './styles';
import { Link } from 'react-router-dom';
import { Background } from './styles';
import { useContext } from 'react';

export function SignIn() {

  const data = useContext(MyContext);
  console.log('MEU CONTEXTO =>', data)

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Entrar" />

        <Link to="/Register">Criar conta</Link>

      </Form>
      <Background />
    </Container>
  )
}