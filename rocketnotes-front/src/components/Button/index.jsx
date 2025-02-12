import { Container } from './styles'
import { Link } from "react-router-dom";

export function Button({ title, loading = false, to, ...rest }) {
  if (to) {
    return (
      <Container as={Link} to={to} {...rest}>
        {loading ? 'Carregando...' : title}
      </Container>
    );
  }

  return (
    <Container
      type="button"
      disabled={loading}
      {...rest}
    >
      {loading ? 'Carregando...' : title}
    </Container>
  )
}
