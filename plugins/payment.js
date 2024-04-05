let handler = async (m, { conn }) => {
    conn.sendFile(m.chat, 'https://telegra.ph/file/60ee2273e7e571239a1ad.jpg', 'img.jpg', `
╔══「 *Pembayaran* 」
╟
╟ Dana:
╟ 087765570421
╟ go-pay/ovo:
╟ 087765570421
╟ Pulsa XL:
╟ 087765570421
╟ 
╚════════════════ 
_Jika sudah melakukan pembayaran harap hubungi Owner_

*QRIS belum di buat*
Cara scan QRIS
${conn.readmore}
1. Download gambar di atas
2. Buka aplikasi E-Waalet kamu(Ovo, Shopeepay dll)
3. Pilih tab *Bayar*, maka akan di arahkan ke opsi kamera
4. Pilih icon galery di pojok, lalu pilih kode yg sudah didownload
5. Masukkan nominal
6. Pembayaran berhasil`, m)
}
handler.command = /^payment$/i

module.exports = handler