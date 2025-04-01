function sampleText(textResponse, number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "preview_url": false,
        "to": number,
        "type": "text",
        "text": {
            "body": textResponse
        }
    });

    return data;
}

function sampleImage(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "preview_url": false,
        "to": number,
        "type": "image",
        "image": {
            "link": "https://wallpapers.com/images/hd/dragon-ball-goku-ultra-instinct-vgete03dp3wzycoi.jpg"
        }
    });

    return data;
}

function sampleAudio(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "preview_url": false,
        "to": number,
        "type": "audio",
        "audio": {
            "link": "https://johanpalmab.com/subir/uploads/sf.mp3"
        }
    });

    return data;
}

function sampleVideo(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "preview_url": false,
        "to": number,
        "type": "video",
        "video": {
            "link": "https://johanpalmab.com/subir/uploads/sf.mp4"
        }
    });

    return data;
}

function sampleDocument(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "preview_url": false,
        "to": number,
        "type": "document",
        "document": {
            "link": "https://finis.cl/images/futuros_alumnos/profesores_orientadores/material-pedagogico/Guia_3_Enlaces_quimicos.pdf"
        }
    });

    return data;
}


function sampleButtons(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "preview_url": false,
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": "Confirmas tu registro?"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "001",
                            "title": "Si"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "002",
                            "title": "No"
                        }
                    }
                ]
            }
        }
    });

    return data;
}



function sampleList(number) {
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
                "text": "<HEADER_TEXT>"
            },
            "body": {
                "text": "<BODY_TEXT>"
            },
            "footer": {
                "text": "<FOOTER_TEXT>"
            },
            "action": {
                "button": "<BUTTON_TEXT>",
                "sections": [
                    {
                        "title": "COMPRA Y VENDE PRODUCTOS 😉",
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


function sampleLocation(number) {
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
    sampleText,
    sampleImage,
    sampleAudio,
    sampleVideo,
    sampleDocument,
    sampleButtons,
    sampleList,
    sampleLocation
}