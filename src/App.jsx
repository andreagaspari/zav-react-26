import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <ProtectedRoute redirectTo="/login"><HomePage /></ProtectedRoute> } />
                <Route path="/login" element={ <LoginPage /> } />
                <Route path="*" element={
                    <h1>Errore 404!</h1>
                } />
            </Routes>
        </Router>
    );
}