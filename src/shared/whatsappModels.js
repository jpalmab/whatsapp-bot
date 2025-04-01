function MessageText(textResponse, number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "preview_url": true,
        "to": number,
        "type": "text",
        "text": {
            "body": textResponse
        }
    });

    return data;
}


function MessageList(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "preview_url": false,
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "header": {
                "type": "text",
                "text": "Nuestro Menú"
            },            
            "body": {
                "text": "Tengo estas opciones 🍔"
            },
            "footer": {
                "text": "Selecciona una de las opciones para poder atenderte..."
            },
            "action": {
                "button": "<BUTTON_TEXT>",
                "sections": [
                    {
                        "title": "Compra y vende productos",
                        "rows": [
                            {
                                "id": "1",
                                "title": "Comprar",
                                "description": "Compra los mejores productos para tu hogar"
                            },
                            {
                                "id": "2",
                                "title": "Vender",
                                "description": "Vende tus productos"
                            }
                        ]
                    },
                    {
                        "title": "CENTRO DE ATENCIÓN 🕓",
                        "rows": [
                            {
                                "id": "3",
                                "title": "Agencia",
                                "description": "Puedes visitar nuestra agencia"
                            },
                            {
                                "id": "4",
                                "title": "Centro de contacto",
                                "description": "Te atenderá unos de nuestros agentes"
                            }
                        ]
                    }
                ]
            }
        }

    });

    return data;
}


function MessageComprar(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "preview_url": false,
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": "Selecciona uno de los productos"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-laptop",
                            "title": "Laptop"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-computadora",
                            "title": "Computadora"
                        }
                    }
                ]
            }
        }
    });

    return data;
}


function MessageLocation(number) {
    const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": number,
            "context": {
                "message_id": "<MSGID_OF_PREV_MSG>"
            },
            "type": "location",
            "location": {
                "latitude": "0.666188658194723",
                "longitude": "-76.87031723270148",
                "name": "Desarrollo de Software",
                "address": "Orito, Putumayo"
            }
        
    });

    return data;
}

module.exports = {
    MessageText,
    MessageList,
    MessageComprar,
    MessageLocation
}