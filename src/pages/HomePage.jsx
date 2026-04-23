import {Container} from 'react-bootstrap'
import GridAutomobili from '../components/GridAutomobili'
import LoginForm from '../components/LoginForm'
import LogoutButton from '../components/LogoutButton'

export default function HomePage() {
  return <>
    <h1>Hello World!</h1>
    <LogoutButton variant="danger" />
    <Container>
      <GridAutomobili />
    </Container>
  </>
}