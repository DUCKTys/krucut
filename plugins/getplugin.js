let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)

let handler = async (m, { conn, isROwner, usedPrefix, command, text }) => {
    if (!isROwner) return
    let ar = Object.keys(plugins)
    let ar1 = ar.map(v => v.replace('.js', ''))
    if (!text) throw `uhm.. where the text?\n\nexample:\n${usedPrefix + command} i-info`
    if (!ar1.includes(text)) return m.reply(`not found!\n\n${ar1.map(v => ' ' + v).join`\n`}`)
    let o
    try {
        o = await exec('cd plugins && type ' + text + '.js')
    } catch (e) {
        o = e
    } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
    }
}
handler.help = ['getplugin'].map(v => v + ' <text>')
handler.tags = ['owner']
handler.command = /^(getplugin|gp)$/i

module.exports = handler