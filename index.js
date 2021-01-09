const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'Nzk3NDc5OTEwOTQ3MTYwMDc.X_nFCw.R0PQKC4wOje9aGLF7sCi9Jpn33o';


client.on('ready', () => {
    console.log('캐롤교 퍼뜨릴 준비 완료');
});


client.on('message', (message) => {
    if(message.content === '캐롤교 안녕') {
        message.channel.send('안녕 친구야? 너도 캐롤교 올거니?')
    }
});

client.on('message', (message) => {
    if(message.content === '캐롤교') {
        message.channel.send('캐롤교의 교주는 리은님 입니다. 부교주는 준님 입니다. 절 탄생시켜준 분은 리은님 입니다. 전 언제나 그분을 사랑하죠 ❤')
    }
});


client.on('message', (message) => {
    if(message.content === '캐롤교 잘가') {
        message.channel.send('다음에 또 만나요. 꼭')
    }
});


client.on('message', (message) => {
    if(message.content === '캐롤교 뭐해') {
        message.channel.send('내 생각 중')
    }
});


client.login(token);

