import { useState } from 'react'
import { Form, Stack, Button } from 'react-bootstrap'
import Loading from './Loading'
import { sendMessage } from '../services/chatbot';

export default function Chatbot({stream = true}) {
    const [inputMessage, setInputMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const handleSubmit = async function(e) {
        e.preventDefault();
        const userMessage = {
            role: "user",
            content: inputMessage
        }
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInputMessage("");

        const preparedReplyMessage = {
            role: "assistant",
            content: (stream) ? "" : "Sto pensando..."
        }
        const newReplyMessages = [...newMessages, preparedReplyMessage];
        setMessages(newReplyMessages);

        try {
            const reply = await sendMessage({stream, messages: newMessages, onChunk: (chunk) => {
                setMessages((prev) => {
                    const updated = [...prev];
                    updated[updated.length - 1].content += chunk;
                    return updated;
                });
            }});

            if (!stream && reply) {
                setMessages((prev) => {
                    const updated = [...prev];
                    updated[updated.length - 1].content = reply.content;
                    return updated;
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    return <div>
        <div className="messages">
            {messages.map((message, index) => {
                return <div key={index} className={message.role}>
                    {message.role}: 
                    {message.content}
                </div>
            })}
        </div>
        <Form onSubmit={handleSubmit}>
            <Stack direction="horizontal" gap={3}>
                <Form.Control 
                    name="message" 
                    type="text"
                    placeholder="Scrivi il tuo messaggio..." 
                    onChange={(e) => {
                        setInputMessage(e.target.value);
                    }}
                    value={inputMessage}
                />
                <Button variant="secondary" type="submit">Submit</Button>
            </Stack>
        </Form>
    </div>
}