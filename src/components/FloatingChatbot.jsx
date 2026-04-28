import { useState } from 'react'
import { FaComments } from "react-icons/fa";
import { Button, Offcanvas } from 'react-bootstrap';
import Chatbot from './Chatbot';

export default function FloatingChatbot() {
    const [show, setShow] = useState(false);
    
    return <>
        <Button 
            className="position-fixed bottom-0 end-0 m-3 rounded-circle p-3 fs-4"
            size="lg"
            onClick={() => {
                setShow(true)
            }}
        >
            <FaComments />
        </Button>

        <Offcanvas 
            show={show}
            placement="end"
            name="floatingChatbot" 
            onHide={() =>
                setShow(false)
            }
        >
            <Offcanvas.Header closeButton className="border-bottom">
                <Offcanvas.Title>Chatta con noi</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="p-0">
                <Chatbot />
            </Offcanvas.Body>
        </Offcanvas>
    </>
}