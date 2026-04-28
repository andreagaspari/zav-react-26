import { useState, useEffect, useRef } from 'react'
import { Form, Stack, Button } from 'react-bootstrap'
import Loading from './Loading'
import { sendMessage } from '../services/chatbot';
import styles from './Chatbot.module.css';
import { FaPaperPlane } from 'react-icons/fa';

export default function Chatbot({stream = true}) {
    const [loading, setLoading] = useState(false);
    const [inputMessage, setInputMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const loadingRef = useRef(loading);

    useEffect(() => {
        loadingRef.current = loading
    }, [loading]);
    
    const handleSubmit = async function(e) {
        e.preventDefault();
        
        if (loading) 
            return;
    
        const userMessage = {
            role: "user",
            content: inputMessage
        }
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInputMessage("");
        
        setLoading(true);

        const preparedReplyMessage = {
            role: "assistant",
            content: <Loading />
        }
        const newReplyMessages = [...newMessages, preparedReplyMessage];
        setMessages(newReplyMessages);

        try {
            const reply = await sendMessage({stream, messages: newMessages, onChunk: (chunk) => {
                setMessages((prev) => {
                    const updated = [...prev];
                    if (loadingRef.current) {
                        updated[updated.length - 1].content = chunk;
                        setLoading(false);
                    } else {
                        updated[updated.length - 1].content += chunk;
                    }
                    return updated;
                });
            }});

            if (!stream && reply) {
                setMessages((prev) => {
                    setLoading(false);
                    const updated = [...prev];
                    updated[updated.length - 1].content = reply.content;
                    return updated;
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    return <div className={styles.chatbotContainer}>
        <div className={styles.messagesScroller}>
            <div className={styles.messagesContainer}>
                {messages.map((message, index) => {
                    return <div key={index} className={`${styles[message.role]} ${styles.message}`}>
                        {message.content}
                    </div>
                })}
            </div>
        </div>
        <div className={styles.formContainer}>
            <Form onSubmit={handleSubmit} className="m-0">
                <Stack direction="horizontal" gap={3}>
                    <Form.Control 
                        name="message" 
                        type="text"
                        placeholder="Scrivi il tuo messaggio..." 
                        onChange={(e) => {
                            setInputMessage(e.target.value);
                        }}
                        value={inputMessage}
                        required
                        disabled = {loading}
                    />
                    <Button variant="primary" size="lg" type="submit" disabled = {loading}>
                        <FaPaperPlane />    
                    </Button>
                </Stack>
            </Form>
        </div>
    </div>
}