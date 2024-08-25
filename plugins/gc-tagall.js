let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `*🛍️https://chat.whatsapp.com/Hk5iEubNN581Rv2rH4vSm0 ${pesan}`
  let teks = `Deseas Adquirir un Bot? , Hablame🛍
    wa.me/+573009684519*
   ${oi}\n\n🛍️ *@ussxr_quesitx:*\n`
  for (let mem of participants) {
  teks += `⭐ @${mem.id.split('@')[0]}\n`}
  teks += `𝐐𝐮𝐞𝐬𝐨 𝐁𝐎𝐓`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
  handler.admin = true
  handler.group = true
  export default handler