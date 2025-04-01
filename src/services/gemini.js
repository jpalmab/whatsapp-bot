const { GoogleGenerativeAI } = require("@google/generative-ai");

//apikey de gemini
const genAI = new GoogleGenerativeAI("");
//gemini-1.5-flash o al final en vez de flash pro
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });


async function getMessageGemini(prompt) {
    const result = await model.generateContent(prompt);
    console.log(result.response.text());

    return result.response.text();
}


module.exports = {
    getMessageGemini
}