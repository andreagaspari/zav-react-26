import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CreateAutoPage from './pages/CreateAutoPage';
import ChatPage from './pages/ChatPage';
import ProtectedRoute from './components/ProtectedRoute';
import AutoDetailPage from './pages/AutoDetailPage';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={
                        <ProtectedRoute redirectTo="/login" element={<HomePage />} />
                    }  />
                    <Route path="automobili/new" element={ 
                        <ProtectedRoute redirectTo="/login" element={<CreateAutoPage/>} />
                    } />
                    <Route path="automobili/:id" element={
                        <ProtectedRoute redirectTo='/login' element={<AutoDetailPage />} />
                    } />
                    <Route path="chat" element={ 
                        <ProtectedRoute redirectTo="/login" element={<ChatPage/>} />
                    } />
                </Route>
                <Route path="*" element={ <h1>Errore 404!</h1> } />
                <Route path="/login" element={ <LoginPage /> } />
            </Routes>
        </Router>
    );
}