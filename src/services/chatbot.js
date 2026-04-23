
export async function sendMessage({stream = true, messages = [], onChunk = () => {}}) {
    const systemMessages = [
        {
            role: "system",
            content: "Se ti chiedono di funghi non devi rispondere! Di' che sei l'assistente dell'app e non un fungarolo."
        },
    ];
    const completeMessages = messages.concat(systemMessages);
    if (stream) {
        return await sendMessageStream({messages: completeMessages, onChunk});
    } else {
        return await sendMessageNoStream({messages: completeMessages});
    }
}

async function sendMessageStream({messages, onChunk}) {
    const resp = await fetch("http://localhost:11434/api/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "app-auto",
            messages: messages,
            stream: true
        })
    });

    if (!resp.ok) {
        const data = await resp.json();
        throw new Error(`Errore Ollama: ${resp.status} - ${data.error}`)
    }

    const reader = resp.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let buffer = "";
    let message = "";

    while (true) {
        const {value, done} = await reader.read();
        
        if (done) break;

        buffer += decoder.decode(value, {stream: true});
        const parts = buffer.split("\n");
        buffer = parts.pop() || "";

        for (const part of parts) {
            if (!part.trim()) continue;
            const data = JSON.parse(part);

            // Salva il messaggio completo per tornarlo comunque alla fine della chiamata del servizio
            // Opzionale dato che chiamiamo onChunk ad ogni token ricevuto
            message += (data.message?.content) ?? '';

            if (data.message?.content) {
                onChunk(data.message.content);
            }


        }

    } 

    return {
        role: "assistant",
        content: message
    }
}

async function sendMessageNoStream({messages}) {
    const resp = await fetch("http://localhost:11434/api/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gemma3:1b",
            messages: messages,
            stream: false
        })
    });

    if (!resp.ok) {
        const data = await resp.json();
        throw new Error(`Errore Ollama: ${resp.status} - ${data.error}`)
    }
    
    const reply = await resp.json();
    return reply.message;
}