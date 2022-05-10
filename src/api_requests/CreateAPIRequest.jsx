const CreateAPIRequest = async(currentUserInput, handleAIResponse) => {

    const data = {
        prompt: currentUserInput,
        temperature: 0.5,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["You:"]
    };

    const AIResponse = await fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`,
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => handleAIResponse(data.choices[0].text))
    
}


export default CreateAPIRequest;