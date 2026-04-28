import { useState } from 'react'
import { Button, Offcanvas, Badge } from 'react-bootstrap'
import Chatbot from './Chatbot'

export default function FloatingChat() {
    const [show, setShow] = useState(false)
    const [hasUnread, setHasUnread] = useState(false)

    const toggleShow = () => setShow((s) => !s)
    const handleClose = () => setShow(false)

    return (
        <>
            <Button
                variant="primary"
                onClick={toggleShow}
                className="position-fixed bottom-0 end-0 m-3 rounded-circle shadow"
                style={{ width: '56px', height: '56px', zIndex: 1050 }}
                aria-label="Apri chat"
            >
                💬
                {hasUnread && (
                    <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle p-1 rounded-circle">
                        {/* badge vuoto */}
                    </Badge>
                )}
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Chatbot</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Chatbot />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
