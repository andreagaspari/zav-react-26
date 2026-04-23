import { Button } from 'react-bootstrap'
import { AuthContext } from '../contexts/AuthContext'
import { useContext } from 'react'

export default function LogoutButton({label = "Logout", ...props}) {
    const { logout } = useContext(AuthContext);

    return <Button onClick={logout} {...props}>{label}</Button>
}