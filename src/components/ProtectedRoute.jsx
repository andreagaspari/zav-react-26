import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

export default function ProtectedRoute({redirectTo, children}) {   
    const { user } = useContext(AuthContext);
    const location = useLocation();
    
    if (!user)
        return <Navigate to={redirectTo} replace state={{from: location }}/>
    
    return <>{children}</>
}