import {Container} from 'react-bootstrap'
import GridAutomobili from '../components/GridAutomobili'
import LoginForm from '../components/LoginForm'

export default function HomePage() {
  return <>
    <h1>Hello World!</h1>
    <Container>
      <GridAutomobili />
    </Container>
  </>
}