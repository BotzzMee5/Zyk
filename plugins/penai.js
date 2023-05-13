// BY ZYKO MD 
let fetch = require('node-fetch')
let handler = async (m, { text,  usedPrefix,  command }) => {
    if (!text) throw `Hay adakah yang bisa saya bantu??`
await m.reply('Searching...')
let zykomd = await fetch(`https://xznsenpai.xyz/api/openai?text=${text}&user=user-unique-id`)
let hasil = await zykomd.json()
 m.reply(`${hasil.result}`.trim())
    }  
handler.help = ['ai', 'openai']
handler.tags = ['fun']
handler.command = /^(ai|openai)$/i
export default handler