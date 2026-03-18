import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="*" element={
                    <h1>Errore 404!</h1>
                } />
            </Routes>
        </Router>
    );
}