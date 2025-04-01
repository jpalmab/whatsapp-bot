const { OpenAI } = require('openai');

// Configura la clave API
const openai = new OpenAI({
  //apikey de openai
  apiKey: '',
});

async function askQuestion() {
  try {
    // Realiza la pregunta
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // O el modelo que prefieras usar
      messages: [{ role: 'user', content: '¿Cuál es la capital de Francia?' }],
    });

    // Muestra la respuesta
    console.log('Respuesta:', response.choices[0].message.content);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

askQuestion();
