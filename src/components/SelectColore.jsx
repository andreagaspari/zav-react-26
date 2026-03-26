import { Form } from 'react-bootstrap'

export default function SelectColore ({onChange = () => {}}) {
    return <Form.Select aria-label="Seleziona colore" onChange={onChange}>
        <option value="">Tutti i colori</option>
        <option value="Azzurro">Azzurro</option>
        <option value="Bianco">Bianco</option>
        <option value="Blu">Blu</option>
        <option value="Grigio">Grigio</option>
        <option value="Nero">Nero</option>
        <option value="Rosso">Rosso</option>
        <option value="Verde">Verde</option>
    </Form.Select>
}