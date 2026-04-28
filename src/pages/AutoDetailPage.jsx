import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getById as getAutomobile } from '../services/automobili';
import CardAutomobile from '../components/CardAutomobile';
import { FaArrowLeft } from 'react-icons/fa';
import { Button } from 'react-bootstrap'

export default function AutoDetailPage() {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [automobile, setAutomobile] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAutomobile = async function() {
            let tempAuto = await getAutomobile(id);
            setAutomobile(tempAuto);
            setLoading(false);
        }
        fetchAutomobile();
    }, []);

    if (loading) 
        return <Loading />

    return <div className="m-2">
        <Button variant="outline-secondary" onClick={() => {
            navigate("/");
        }} >
            <FaArrowLeft />
        </Button>
        <CardAutomobile automobile={automobile} />
    </div>;
}