// src/pages/api/downloads.js

// A chave de API é lida aqui, no servidor do Netlify, de forma segura
const apiKey = import.meta.env.CURSEFORGE_API_KEY;
const modId = 1183923;

export async function GET() {
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'API key não configurada' }), { status: 500 });
  }

  try {
    const response = await fetch(`https://api.curseforge.com/v1/mods/${modId}`, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
      }
    });

    if (!response.ok) {
      throw new Error(`Falha no fetch do CurseForge`);
    }

    const data = await response.json();
    const downloadCount = data.data.downloadCount;
    
    // Formata o número e retorna
    const formattedCount = `+${downloadCount.toLocaleString('pt-BR')}`;

    return new Response(JSON.stringify({
      count: formattedCount
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error("Erro na API Route:", error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
