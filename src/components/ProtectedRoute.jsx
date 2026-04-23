import { useContext } from 'react'
import { Navigate, useLocation, Route, Outlet } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

export default function ProtectedRoute({redirectTo = "/login", element, children, ...rest}) {   
    const { user } = useContext(AuthContext);
    const location = useLocation();

    const redirectElement = <Navigate to={redirectTo} replace state={{from: location}} />
    
    return (user) ? element : redirectElement;
    
    /*if (element) {
        if (user) {
            return <Route {...rest} element={element} /> // Es. <Route path="/" element={ <HomePage /> } />
        } else {
            return <Route {...rest} element={redirectElement} /> // Es. <Route path="/" element={ <Navigate to="/login" /> } />
        }

        
        // Alternativa all'if precedente
        // const wrappedElement = user ? element : redirectElement;
        // return <Route {...rest} element={wrappedElement} />
    } else {
        if (user) {
            return <Route {...rest} element={<Outlet />}>{children}</Route> // Es. <Route path="/" element={ <Outlet /> } ><HomePage/></Route>
        } else {
            return <Route {...rest} element={redirectElement} /> // Es. <Route path="/" element={ <Navigate to="/login" /> }>{children}</Route>
        }
        // Alternativa all'if precedente
        // const wrappedOutlet = user ? <Outlet /> : redirectElement;
        // return <Route {...rest} element={wrappedOutlet} > {children} </Route>
    }*/
}