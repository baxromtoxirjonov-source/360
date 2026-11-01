/**
 * Virtual Tour - Backend Server (Node.js & Express)
 * Imtihon topshirig'i uchun to'liq integratsiya
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware sozlamalari
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Frontend statik fayllarini ulash (public papkasi)
app.use(express.static(path.join(__dirname, 'public')));

// Server holatini tekshirish endpointi
app.get('/api/health', (req, res) => {
  const telegramConfigured = Boolean(
    process.env.TELEGRAM_BOT_TOKEN && 
    process.env.TELEGRAM_CHAT_ID && 
    !process.env.TELEGRAM_BOT_TOKEN.includes('example')
  );

  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    telegramConfigured: telegramConfigured,
    message: telegramConfigured 
      ? 'Telegram Bot sozlangan va faol.' 
      : 'Diqqat: Telegram BOT_TOKEN yoki CHAT_ID .env faylida belgilanmagan (Demo rejim faol).'
  });
});

/**
 * Uy egasi bilan bog'lanish formasi uchun POST endpoint
 * Mijoz ma'lumotlarini qabul qiladi va Telegram bot orqali uy egasiga yuboradi
 */
app.post('/api/contact', async (req, res) => {
  try {
    const { name, phone, room, message } = req.body;

    // Majburiy maydonlarni tekshirish
    if (!name || !phone) {
      return res.status(400).json({
        success: false,
        message: "Iltimos, ismingiz va telefon raqamingizni to'liq kiriting!"
      });
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    const now = new Date();
    const formattedDate = now.toLocaleString('uz-UZ', { 
      timeZone: 'Asia/Tashkent',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });

    // Konsolga arizani chiqarish
    console.log('\n========================================');
    console.log('📩 YANGI BUYURTMA KELIB TUSHDI:');
    console.log(`👤 Mijoz: ${name}`);
    console.log(`📞 Telefon: ${phone}`);
    console.log(`📍 Qiziqqan joyi: ${room || 'Umumiy uy'}`);
    console.log(`💬 Xabar: ${message || 'Izoh qoldirilmagan'}`);
    console.log(`⏰ Vaqt: ${formattedDate}`);
    console.log('========================================\n');

    // Agar Telegram Bot Token va Chat ID kiritilmagan bo'lsa (Demo rejim)
    const isTelegramConfigured = botToken && chatId && !botToken.includes('example');
    
    if (!isTelegramConfigured) {
      console.warn('⚠️  [DEMO REJIM]: .env faylida TELEGRAM_BOT_TOKEN yoki TELEGRAM_CHAT_ID belgilanmagan.');
      console.warn('ℹ️  Arizalar konsolga muvaffaqiyatli yozildi. Telegramga yuborish uchun .env faylini to\'ldiring.');
      
      return res.json({
        success: true,
        demo: true,
        message: "Arizangiz qabul qilindi! (Demo rejim: server konsoliga yozildi. Telegram bot sozlangach botga ham yuboriladi)."
      });
    }

    // Telegram uchun xabar matnini chiroyli HTML formatida shakllantirish
    const textMessage = `
🏡 <b>YANGI ARIZA / VIRTUAL SAYOHAT</b>
━━━━━━━━━━━━━━━━━━━━
👤 <b>Ism:</b> ${escapeHtml(name)}
📞 <b>Telefon:</b> ${escapeHtml(phone)}
📍 <b>Ko'rilayotgan xona:</b> ${escapeHtml(room || "Umumiy bino")}
💬 <b>Xabar:</b> ${escapeHtml(message || "Izohsiz")}
⏰ <b>Vaqt:</b> ${formattedDate}
━━━━━━━━━━━━━━━━━━━━
🔔 <i>Virtual Tour tizimidan avtomatik xabar</i>
    `.trim();

    // Telegram Bot API orqali xabar yuborish
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: textMessage,
        parse_mode: 'HTML'
      })
    });

    const result = await response.json();

    if (!response.ok || !result.ok) {
      console.error('❌ Telegram API xatosi:', result);
      return res.status(502).json({
        success: false,
        message: `Telegramga xabar yuborishda xatolik yuz berdi: ${result.description || 'Noma\'lum xatolik'}`
      });
    }

    console.log('✅ Telegram botga xabar muvaffaqiyatli yuborildi!');
    return res.json({
      success: true,
      demo: false,
      message: "Arizangiz muvaffaqiyatli yuborildi! Tez orada uy egasi siz bilan bog'lanadi."
    });

  } catch (error) {
    console.error('Serverda xatolik yuz berdi:', error);
    return res.status(500).json({
      success: false,
      message: "Serverda kutilmagan xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring."
    });
  }
});

// HTML belgilarni xavfsiz qilish uchun yordamchi funksiya
function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Barcha boshqa yo'nalishlar uchun frontend sahifasini qaytarish
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serverni tinglashni boshlash (Lokal muhitda)
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`\n🚀 ==========================================`);
    console.log(`   VIRTUAL TOUR SERVERI ISHGA TUSHDI!`);
    console.log(`   Sayt manzili: http://localhost:${PORT}`);
    console.log(`   Telegram holati: ${process.env.TELEGRAM_BOT_TOKEN ? 'Sozlangan' : 'Demo rejim (.env ni to\'ldiring)'}`);
    console.log(`==========================================\n`);
  });
}

// Vercel Serverless muhiti uchun eksport qilish
module.exports = app;

