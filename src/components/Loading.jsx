import { Stack, Spinner } from 'react-bootstrap'

/**
 * Componente per il caricamento (Spinner + Testo)
 * 
 * @param {*} props Attributi
 *  @param {string} props.label Etichetta del loading
 *  @param {string} props.variant Bootstrap Variant
 * 
 * @example <Loading variant="Primary" label="Caricamento..." />
 */
export default function Loading(props) {
    const {
        label = '',
        variant = undefined
    } = props;

    return (
        <>
            { /* Commento in JSX */ }
            <Stack {...props} direction="horizontal" gap="2">
                <Spinner animation="border" variant={variant} />
                { 
                    // Se esiste l'etichetta, stampala in uno span
                    (label) ? <span>{label}</span> : <></> 
                }
            </Stack>
        </>
    );

    /*return (
        <div className="d-flex gap-2">
            <Spinner animation="border" />
            { (label) ? <span>{label}</span> : <></> }
        </div>
    );*/
}