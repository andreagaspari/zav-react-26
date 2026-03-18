import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CardAutomobile from './CardAutomobile'
import Loading from './Loading'
import { get as getAutomobili } from '../services/automobili'

export default function GridAutomobili() {
    const [listaAuto, setListaAuto] = useState([]);
    const [isLoading, setLoading] = useState(true);

    console.log("prima dell'effetto: ", listaAuto);

    useEffect(() => {
        const fetchAuto = async function() {
            let tempAuto = await getAutomobili();
            setListaAuto(tempAuto);
            setLoading(false);
            console.log("Fetch ha tornato i risultati")
        }
        console.log("Chiamo fetchAuto");
        fetchAuto();
    }, []);

    console.log("dopo l'effetto: ", listaAuto);

    if (isLoading) return <Loading/>

    return <Container>
        <Row xs="1" md="2" xl="4">
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
    </Container>;
}