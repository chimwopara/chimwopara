/**
 * Cloudflare Worker - Claude API Proxy
 * Replaces Netlify function for secure API key storage
 * 
 * Deploy to: https://workers.cloudflare.com
 */

export default {
  async fetch(request, env) {
    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Content-Type': 'application/json'
    };

    // Handle preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: { message: 'Method Not Allowed' } }),
        { status: 405, headers: corsHeaders }
      );
    }

    // Check if API key is configured
    if (!env.ANTHROPIC_API_KEY) {
      return new Response(
        JSON.stringify({ 
          error: { 
            type: 'configuration_error',
            message: 'API key not configured' 
          }
        }),
        { status: 500, headers: corsHeaders }
      );
    }

    try {
      const { prompt, system } = await request.json();

      if (!prompt) {
        return new Response(
          JSON.stringify({ error: { message: 'Missing prompt' } }),
          { status: 400, headers: corsHeaders }
        );
      }

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': env.ANTHROPIC_API_KEY,
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

      if (!response.ok) {
        return new Response(
          JSON.stringify({ 
            error: { 
              type: data.error?.type || 'api_error',
              message: data.error?.message || `API error: ${response.status}` 
            }
          }),
          { status: response.status, headers: corsHeaders }
        );
      }

      return new Response(JSON.stringify(data), { headers: corsHeaders });

    } catch (error) {
      return new Response(
        JSON.stringify({ 
          error: { 
            type: 'server_error',
            message: error.message 
          }
        }),
        { status: 500, headers: corsHeaders }
      );
    }
  }
};
