import { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import CardAutomobile from './CardAutomobile'
import SelectMarca from './SelectMarca'
import SelectColore from './SelectColore'
import SelectAnno from './SelectAnno'
import Loading from './Loading'
import { get as getAutomobili } from '../services/automobili'

export default function GridAutomobili() {
    const [isLoading, setLoading] = useState(true);
    const [listaAuto, setListaAuto] = useState([]);

    const [filtriAuto, setFiltriAuto] = useState({
        anno: '',
        marca: '',
        colore: ''
    });

    const handleFiltriAutoChange = (key, value) => {
        setFiltriAuto((prevFiltriAuto) => { return {
            ...prevFiltriAuto,
            [key]: value
        }});
    }

    useEffect(() => {
        const fetchAuto = async function() {
            let tempAuto = await getAutomobili(filtriAuto);
            setListaAuto(tempAuto);
            setLoading(false);
        }
        fetchAuto();
    }, [filtriAuto]);
    
    if (isLoading) return <Loading/>

    return <>
        <Row className="mb-3">
            <Col>
                <SelectMarca onChange={(e) => {
                    handleFiltriAutoChange('marca', e.target.value)
                }} />
            </Col>
            <Col>
                <SelectColore onChange={(e) => {
                    handleFiltriAutoChange('colore', e.target.value)
                }} />
            </Col>
            <Col>
                <SelectAnno onChange={(e) => {
                    handleFiltriAutoChange('anno', e.target.value)
                }} />
            </Col>
        </Row>
    
        <Row xs="1" md="2" xl="4" className="g-3">
            {
                (listaAuto.length > 0) ?
                listaAuto.map((automobile) => {
                    return <Col key={automobile.id}>
                            <CardAutomobile automobile={automobile} />
                        </Col>
                    })
                    : <p>Nessuna auto disponibile</p>
            }
        </Row>
    </>;
}