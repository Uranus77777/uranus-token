async function askUranus() {
    const userInput = document.getElementById('userInput').value.trim();
    const responseBox = document.getElementById('response');

    if (!userInput) {
        responseBox.innerText = "Please ask something!";
        return;
    }

    responseBox.innerText = "Thinking...";

    try {
        const response = await fetch('https://api-inference.huggingface.co/models/microsoft/DialoGPT-small', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer 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', // вставь сюда свой токен
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ inputs: userInput })
        });

        const data = await response.json();

        if (data.generated_text) {
            responseBox.innerText = data.generated_text;
        } else {
            responseBox.innerText = "Uranus is confused... Try again!";
        }
    } catch (error) {
        console.error(error);
        responseBox.innerText = "Error contacting Uranus AI.";
    }
}
