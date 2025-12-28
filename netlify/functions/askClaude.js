exports.handler = async function(event, context) {
  
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }

  // Check if API key is configured
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('ANTHROPIC_API_KEY environment variable is not set');
    return { 
      statusCode: 500, 
      headers, 
      body: JSON.stringify({ 
        error: { 
          type: 'configuration_error',
          message: 'API key not configured. Please set ANTHROPIC_API_KEY in Netlify environment variables.' 
        }
      }) 
    };
  }

  try {
    const { prompt, system } = JSON.parse(event.body);

    if (!prompt) {
      return { 
        statusCode: 400, 
        headers, 
        body: JSON.stringify({ error: { message: 'Missing prompt in request body' } }) 
      };
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 4096,
        system: system || 'You are a helpful assistant.',
        messages: [{ role: 'user', content: prompt }]
      })
    });

    const data = await response.json();

    // Check if Anthropic API returned an error
    if (!response.ok) {
      console.error('Anthropic API error:', data);
      return { 
        statusCode: response.status, 
        headers, 
        body: JSON.stringify({ 
          error: { 
            type: data.error?.type || 'api_error',
            message: data.error?.message || `Anthropic API error: ${response.status}` 
          }
        }) 
      };
    }

    // Validate the response has expected structure
    if (!data.content || !Array.isArray(data.content)) {
      console.error('Unexpected response structure:', data);
      return { 
        statusCode: 500, 
        headers, 
        body: JSON.stringify({ 
          error: { 
            type: 'invalid_response',
            message: 'Unexpected response structure from Anthropic API' 
          }
        }) 
      };
    }

    return { statusCode: 200, headers, body: JSON.stringify(data) };

  } catch (error) {
    console.error('Function error:', error);
    return { 
      statusCode: 500, 
      headers, 
      body: JSON.stringify({ 
        error: { 
          type: 'server_error',
          message: error.message 
        }
      }) 
    };
  }
};
