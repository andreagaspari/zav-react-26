import { Form } from 'react-bootstrap'

export default function SelectMarca ({onChange = () => {}}) {
    return <Form.Select aria-label="Seleziona marca" onChange={onChange}>
        <option value="">Tutte le marche</option>
        <option value="Audi">Audi</option>
        <option value="Fiat">Fiat</option>
        <option value="Ford">Ford</option>
        <option value="Mercedes">Mercedes</option>
        <option value="Toyota">Toyota</option>
        <option value="Volkswagen">Volkswagen</option>
    </Form.Select>
}