let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'Nggk'
  if (isAdmin) throw 'Padahal udah jadi admin'
  await conn.groupParticipantsUpdate(
    m.chat,
    [m.sender],
    "promote" // replace this parameter with "remove", "demote" or "promote"
  )
}
handler.command = /^admin.$/i
handler.rowner = true
handler.botAdmin = true

module.exports = handler