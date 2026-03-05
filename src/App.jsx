import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Loading from './components/Loading'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <>
                        <h1>Hello World!</h1>
                        <Loading label="Caricamento..." className="hello"/>
                    </>
                } />
                <Route path="*" element={
                    <h1>Errore 404!</h1>
                } />
            </Routes>
        </Router>
    );
}