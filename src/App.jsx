import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CreateAutoPage from './pages/CreateAutoPage';
import ChatPage from './pages/ChatPage';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/"  element={
                    <ProtectedRoute redirectTo="/login" element={<HomePage />} />
                }  />
                <Route path="/automobili/new" element={ 
                    <ProtectedRoute redirectTo="/login" element={<CreateAutoPage/>} />
                } />
                <Route path="/chat" element={ 
                    <ProtectedRoute redirectTo="/login" element={<ChatPage/>} />
                } />
                <Route path="/login" element={ <LoginPage /> } />
                <Route path="*" element={ <h1>Errore 404!</h1> } />
            </Routes>
        </Router>
    );
}