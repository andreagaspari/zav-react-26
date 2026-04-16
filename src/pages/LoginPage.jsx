import { Container } from 'react-bootstrap'
import LoginForm from '../components/LoginForm'

export default function LoginPage() {
    return <Container className='h-100 d-flex justify-content-center align-items-center'>
        <LoginForm />
    </Container>;
}