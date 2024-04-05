let handler = async (m, { conn, usedPrefix: _p }) => {

  let capt = `
===================
Kode Aktivasi Group
===================
1. free [gratis]\nBot aktif trial selama 3 hari https://wa.me/${conn.user.jid.split('@')[0]}?text=.claim+kode
2. SONE
Harga:\nRp. 10.000 1 Minggu\nPremium 14 Hari\n
3. STWO
Harga:\nRp. 20.000 1 Bulan\nPremium 30 Hari\n
4. STHREE
Harga:\nRp. 40.000 2 bulan\nPremium 60 Hari\n

Fitur Bot Untuk Group:
• Hidetag, mentionAll member
• Welcome, Bye, antidelete [on/off]
• Group [open/close]
• Fitur game [on/off]
  
===================

Apa yang kamu dapatkan jika premium?
• Fitur Limit tanpa batas
• Klaim lebih banyak XP Harian
• Dapatkan hingga 5 kode redeem group
• Fitur JadiBot`.trim()

  let msg = await m.reply(capt)
  setTimeout(() => {
    conn.reply(m.chat, `Bagaimana? sudah menentukan pilihan kamu?? kalau udah yuk gass joinn\n${_p}owner\n${_p}payment`, msg)


  }, 50000)
}
handler.help = ['sewabot', 'premium']
handler.tags = ['main', 'group']
handler.command = /^(sewa(bot)?|premium)$/i

module.exports = handler