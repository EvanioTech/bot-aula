const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});


client.on('message', async (message) => {
    let stopIf = false
	if ( !stopIf && message.body !== '1' && message.body !== '2'&& message.body !== '3' && message.body !== '4' && message.body !== '5'&& message.body !== '6'|| message.body == 0) {
		await client.sendMessage(message.from, 'Ola sou o assistente virtual');
        await client.sendMessage(message.from, 'Qual pizza vc deseja comprar?');
        await client.sendMessage(message.from, 'Digite o numero da opção desejada');
        await client.sendMessage(message.from, '1. Calabresa 25,00');
        await client.sendMessage(message.from, '2. Mussarela 25,00');
        await client.sendMessage(message.from, '3. Mista 25,00');
        stopIf = true
        
    }  
    if (message.body == '1' || message.body == '2' ||message.body == '3') {
		await client.sendMessage(message.from, 'Deseja refrigerante?');
        await client.sendMessage(message.from, '4. Pepsi 10,00');
        await client.sendMessage(message.from, '5. Guaraná 10,00');
        await client.sendMessage(message.from, '6. Não ');
    }
});




 



client.initialize();


