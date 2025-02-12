import { Container } from './styles'

export function Button({ title, loading = false, ...rest }) {
  return (
    <Container
      as="button"
      disabled={loading}
      {...rest}
    >
      {loading ? 'Carregando...' : title}
    </Container >
  )
}