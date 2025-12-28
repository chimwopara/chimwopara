// netlify/functions/askClaude.js
exports.handler = async function(event, context) {
    // 1. Check if the method is POST
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    // 2. Get the user's message from the incoming request
    const body = JSON.parse(event.body);
    const userPrompt = body.prompt;
    const systemPrompt = body.system;

    // 3. Call Anthropic (Here is where we use the secret key!)
    try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.ANTHROPIC_API_KEY, // This variable lives on the server
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: 'claude-3-sonnet-20240229', // Update model as needed
                max_tokens: 4096,
                system: systemPrompt,
                messages: [{ role: 'user', content: userPrompt }]
            })
        });

        const data = await response.json();

        // 4. Send the answer back to the frontend
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to talk to Claude" })
        };
    }
};