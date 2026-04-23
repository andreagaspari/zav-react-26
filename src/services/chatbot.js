export async function sendMessageNoStream(messages) {
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
    
    return await resp.json();
}