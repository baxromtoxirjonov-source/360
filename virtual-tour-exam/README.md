# 🏡 LuxeEstate 360° - Interaktiv Virtual Uy Sayohati (Virtual Tour)

> **3-oy Imtihon Loyihasi:** Masofadan turib uyni 360° tomosha qilish, xonalar bo'ylab interaktiv sayohat qilish va xaridor Telegram orqali uy egasi bilan to'g'ridan-to'g'ri bog'lanishi mumkin bo'lgan zamonaviy veb-platforma.

---

## 📌 Asosiy Imkoniyatlar va Funksiyalar

1. **360° Virtual Panorama (WebGL):**
   - **Pannellum.js** texnologiyasi yordamida brauzerda silliq 360° aylanma ko'rinish.
   - 3 ta to'liq jihozlangan xona: **Mehmonxona (Living Room)**, **Oshxona (Kitchen)**, **Yotoqxona (Bedroom)**.
   - Xonalar orasida o'tish eshiklari va navigatsion nishonlar (**Hotspots**).

2. **Interaktiv 2D Mini-Xarita (Floor Plan):**
   - SVG arxitektura rejasi asosidagi xonadon xaritasi.
   - Foydalanuvchi qaysi xonada turganini ko'rsatib turuvchi jonli **Radar Pulse** ko'rsatkichi.
   - Xaritadagi xona ustiga bosganda panoramani avtomatik o'sha xonaga o'tkazish.

3. **Audio Gid & Fon Musiqasi:**
   - **Audio Gid (Web Speech API):** Xonaga kirganda o'zbek tilida xonaning o'lchami va xususiyatlarini ovozli tushuntirib berish.
   - **Lofi Ambient Fon Musiqasi (Web Audio API):** Tashqi audio fayllarsiz, brauzer ichida toza va mayin sintizator foni.

4. **Mebel va Jihozlar Hotspotlari (Smart Info Modals):**
   - Xonadagi mebellar (divan, oshxona oroli, plita, krovat) ustiga bosganda parametrlar, materiallar va narxlar aks etuvchi pop-up modal oynalar.
   - "Shu jihoz haqida so'rash" tugmasi orqali to'g'ridan-to'g'ri aloqa formasiga o'tish.

5. **Telegram Bot Integratsiyasi (Backend - Node.js & Express):**
   - Xaridor qoldirgan aloqa arizalari (Ism, telefon, xona, izoh) server orqali real vaqtda **Telegram Bot API** yordamida uy egasining Telegramiga yetkaziladi.
   - Bot sozlanmagan taqdirda ham avtomatik **Demo rejim** ishlab, konsolga to'liq log chiqaradi.

6. **Glassmorphism & Fully Responsive UI:**
   - Dark Luxury Real Estate dizayni.
   - Telefon, planshet va kompyuter ekranlariga 100% moslashuvchan (Mobile-First).

---

## 📂 Papkalar Strukturasi

```
virtual-tour-exam/
│
├── server.js           # Node.js Express backend server (Telegram API integratsiyasi)
├── package.json        # Loyiha sozlamalari va bog'liqliklar
├── .env.example        # Telegram BOT_TOKEN va CHAT_ID namunasi
├── .env                # Shaxsiy tokenlar fayli
├── README.md           # To'liq hujjatlashtirish va qo'llanma
│
└── public/             # Frontend statik fayllari
    ├── index.html      # Asosiy HTML tuzilmasi
    ├── style.css       # Glassmorphism, animatsiyalar va responsive dizayn
    ├── script.js       # Panorama, 2D reja, audio va shakl logikasi
    └── images/         # 360° panorama rasmlari
```

---

## 🚀 Loyihani Ishga Tushirish

### 1-qadam: Kerakli modullarni o'rnatish
Terminalda loyiha papkasiga kiring va quyidagi buyruqni bajaring:
```bash
npm install
```

### 2-qadam: Telegram Bot sozlamalarini kiritish (Ixtiyoriy)
1. Telegramda `@BotFather` orqali yangi bot yarating (`/newbot`) va `API TOKEN` oling.
2. Telegramda `@userinfobot` orqali o'zingizning `Chat ID` raqamingizni bilib oling.
3. `.env` faylini ochib, ma'lumotlarni kiriting:
```env
PORT=3000
TELEGRAM_BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrSTUvwxYZ
TELEGRAM_CHAT_ID=123456789
```
*(Eslatma: Agar bot tokenini kiritmasangiz ham server avtomatik ravishda **Demo rejim**da ishlayveradi va arizalarni konsolga chiqaradi)*.

### 3-qadam: Serverni yurgizish
```bash
npm start
```
Brauzeringizda quyidagi manzilni oching:
👉 **`http://localhost:3000`**

---

## 🌐 Internetga Joylash (Deployment)

### Render.com orqali:
1. Loyihani GitHub repozitoriyasiga yuklang (`git push origin main`).
2. [Render.com](https://render.com) ga kiring va **New Web Service** tanlang.
3. GitHub repozitoriyangizni ulang:
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
4. **Environment Variables** bo'limida:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
   qiymatlarini qo'shing.
5. **Deploy Web Service** tugmasini bosing. Sizga bepul doimiy HTTPS havola beriladi!
