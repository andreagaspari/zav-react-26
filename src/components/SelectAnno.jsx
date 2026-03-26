import { Form } from 'react-bootstrap'

export default function SelectAnno ({onChange = () => {}}) {

    const listaAnni = [2019,2020,2021,2022,2023,2024,2025];
    return <Form.Select aria-label="Seleziona anno" onChange={onChange}>
        <option value="">Tutti</option>
        {
            listaAnni.map((anno) => {
                return <option value={anno}>{anno}</option>
            })
        }
    </Form.Select>
}