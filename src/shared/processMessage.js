const whatsappModel = require("../shared/whatsappModels");
const whatsappService = require("../services/whatsappService"); //la api la importo
const chatgptService = require("../services/chatgpt-service");
const gemini = require("../services/gemini");

async function Process(textUser, number) {
    textUser = textUser.toLowerCase();

    //array de modelos para responder varios mensajes
     var models = [];

    //REGI[O]N SIN CHATGPT 
    // //cuando la frase tenga alg[u]n hola
    // if (textUser.includes("hola")) {
    //     //saludar
    //     var model = whatsappModel.MessageText("Hola, un gusto saludarte 😎", number);
    //     //inserto ese dato en mi arreglo
    //     models.push(model);

    //     //saludar
    //     var modelList = whatsappModel.MessageList(number);
    //     //inserto ese dato en mi arreglo
    //     models.push(modelList);        
    // }
    // else if (textUser.includes("gracias")) {
    //     //saludar
    //     var model = whatsappModel.MessageText("Gracias a ti por escribirme 😊", number);
    //     //inserto ese dato en mi arreglo
    //     models.push(model);
    // }
    // else if (textUser.includes("adios") || textUser.includes("bye") || textUser.includes("me voy")) {
    //     //saludar
    //     var model = whatsappModel.MessageText("Ve con cuidado!!! 😉", number);
    //     //inserto ese dato en mi arreglo
    //     models.push(model);
    // }    
    // else if (textUser.includes("comprar")) {
    //     //saludar
    //     var model = whatsappModel.MessageComprar(number);
    //     //inserto ese dato en mi arreglo
    //     models.push(model);
    // }
    // else if (textUser.includes("vender")) {
    //     //saludar
    //     var model = whatsappModel.MessageText("Registrate en el siguiente formulario: https://www.johanpalmab.com/contact.html", number);
    //     //inserto ese dato en mi arreglo
    //     models.push(model);
    // }        
    // else if (textUser.includes("agencia")) {
    //     //saludar
    //     var model = whatsappModel.MessageLocation(number);
    //     //inserto ese dato en mi arreglo
    //     models.push(model);
    // }  
    // else if (textUser.includes("contacto")) {
    //     //saludar
    //     var model = whatsappModel.MessageText("*Centro de contacto:*\n3133108710", number);
    //     //inserto ese dato en mi arreglo
    //     models.push(model);
    // }  

    // else{
    //     //No entiende
    //     var model = whatsappModel.MessageText("No te entiendo!!! 😒", number);
    //     //inserto ese dato en mi arreglo
    //     models.push(model);
    // }        
    
    //el model es de la nomenclatura del for, es como la iteracion i
    //END REGION

    //REGI[O]N CON CHATGPT
    const resultGemini = await gemini.getMessageGemini(textUser);
    if(resultGemini != null)
    {
        var model = whatsappModel.MessageText(resultGemini, number);
        models.push(model);
    }
    else{
        var model = whatsappModel.MessageText("Lo siento, algo salió mal, intentalo más tarde", number);
        models.push(model);
    }

    models.forEach(model => {
        whatsappService.SendMessageWhatsapp(model);
    });

    //END REGION
}

module.exports = {
    Process
}