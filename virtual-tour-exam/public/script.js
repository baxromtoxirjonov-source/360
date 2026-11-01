/**
 * LuxeEstate 360° - Interaktiv Virtual Uy Sayohati
 * script.js - 5 ta xona (Living, Kitchen, Bedroom, Bathroom, Toilet) + O'z rasmini yuklash logikasi
 */

// ==========================================================================
// 1. XONALAR VA JIHOZLAR BAZASI (5 TA TO'LIQ XONA)
// ==========================================================================
const ROOMS_DATA = {
  // 1. MEHMONXONA
  'living-room': {
    id: 'living-room',
    name: 'Mehmonxona',
    nameEn: 'Living Room',
    subtitle: 'Keng va yorug\' asosiy dam olish zali',
    typeTag: 'Asosiy xona',
    area: '32 m²',
    ceiling: '3.2 metr',
    light: 'Katta vitraj derazalar',
    furnishing: 'To\'liq premium mebel',
    description: 'Keng va hashamatli yashash xonasi. Yuqori sifatli Italiya yumshoq mebellari, tabiiy eman parketi va quyosh nuri mo\'l tushuvchi panoramik vitraj derazalar bilan jihozlangan.',
    voiceGuide: 'Mehmonxonaga xush kelibsiz! Ushbu keng zal o\'ttiz ikki kvadrat metr bo\'lib, tabiiy yorug\'lik bilan to\'liq ta\'minlangan. Barcha xonalarga shu yerdan o\'tishingiz mumkin.',
    image: 'https://dl.polyhaven.org/file/ph-assets/HDRIs/extra/Tonemapped%20JPG/combination_room.jpg',
    mapCoords: { x: 105, y: 155 },
    initialView: { pitch: -2, yaw: 0, hfov: 105 },
    hotspots: [
      {
        type: 'scene',
        targetRoom: 'kitchen',
        pitch: -3,
        yaw: 105,
        title: 'Oshxonaga o\'tish',
        icon: 'fa-utensils'
      },
      {
        type: 'scene',
        targetRoom: 'bedroom',
        pitch: -2,
        yaw: -120,
        title: 'Yotoqxonaga o\'tish',
        icon: 'fa-bed'
      },
      {
        type: 'scene',
        targetRoom: 'bathroom',
        pitch: -3,
        yaw: -45,
        title: 'Vanna xonasiga o\'tish',
        icon: 'fa-bath'
      },
      {
        type: 'info',
        pitch: -18,
        yaw: 12,
        title: 'Italiya Dizaynerlik Divani',
        category: 'Yumshoq mebel',
        price: '$1,850',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
        description: 'Yuqori sifatli suv yuqmaydigan velur matosi bilan qoplangan premium burchak divani.',
        features: ['Material: Italiya veluri', 'Karkas: Tabiiy eman', 'Kafolat: 5 yil']
      }
    ]
  },

  // 2. OSHXONA
  'kitchen': {
    id: 'kitchen',
    name: 'Oshxona',
    nameEn: 'Kitchen Lounge',
    subtitle: 'Zamonaviy marmar orolli va texnikali oshxona',
    typeTag: 'Oshxona',
    area: '18 m²',
    ceiling: '3.2 metr',
    light: 'Smart LED & Tabiiy yorug\'lik',
    furnishing: 'Bosch texnikasi & Marmar orol',
    description: 'Yuqori did bilan yaratilgan oshxona. Tabiiy Carrara marmaridan yasalgan orol va sensorli yoritish tizimiga ega.',
    voiceGuide: 'Hozir siz zamonaviy oshxonadasiz. Bu yerda o\'n sakkiz kvadrat metrda joylashgan shinam ovqatlanish maydoni va marmar stol mavjud.',
    image: 'https://dl.polyhaven.org/file/ph-assets/HDRIs/extra/Tonemapped%20JPG/kiara_interior.jpg',
    mapCoords: { x: 252, y: 90 },
    initialView: { pitch: -2, yaw: 10, hfov: 105 },
    hotspots: [
      {
        type: 'scene',
        targetRoom: 'living-room',
        pitch: -4,
        yaw: -155,
        title: 'Mehmonxonaga qaytish',
        icon: 'fa-couch'
      },
      {
        type: 'scene',
        targetRoom: 'bedroom',
        pitch: -2,
        yaw: 65,
        title: 'Yotoqxonaga o\'tish',
        icon: 'fa-bed'
      },
      {
        type: 'info',
        pitch: -22,
        yaw: -15,
        title: 'Tabiiy Marmar Oshxona Oroli',
        category: 'Oshxona jihozi',
        price: '$2,400',
        image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
        description: 'Monolit tabiiy Carrara oq marmari. Issiqlikka va chizilishga bardoshli qoplama.',
        features: ['Material: 100% tabiiy marmar', 'Integratsiyalangan rozetkalar', 'Suv o\'tkazmaydigan qoplama']
      }
    ]
  },

  // 3. YOTOQXONA
  'bedroom': {
    id: 'bedroom',
    name: 'Yotoqxona',
    nameEn: 'Master Bedroom',
    subtitle: 'Tinch va osoyishta shaxsiy dam olish xonasi',
    typeTag: 'Shaxsiy zona',
    area: '22 m²',
    ceiling: '3.2 metr',
    light: 'Yumshoq iliq kechki chiroqlar',
    furnishing: 'King Size krovat & Garderob',
    description: 'Sokinlik va osoyishtalik uchun mo\'ljallangan yotoqxona. Ortopedik matrasli keng krovat va katta shkaf mavjud.',
    voiceGuide: 'Yotoqxonaga xush kelibsiz! Bu xona shovqinsiz va shinam hordiq chiqarish uchun mo\'ljallangan.',
    image: 'https://dl.polyhaven.org/file/ph-assets/HDRIs/extra/Tonemapped%20JPG/hotel_room.jpg',
    mapCoords: { x: 357, y: 90 },
    initialView: { pitch: -2, yaw: 0, hfov: 105 },
    hotspots: [
      {
        type: 'scene',
        targetRoom: 'living-room',
        pitch: -3,
        yaw: -95,
        title: 'Mehmonxonaga qaytish',
        icon: 'fa-couch'
      },
      {
        type: 'scene',
        targetRoom: 'bathroom',
        pitch: -2,
        yaw: 110,
        title: 'Vanna xonasiga o\'tish',
        icon: 'fa-bath'
      },
      {
        type: 'info',
        pitch: -20,
        yaw: 5,
        title: 'King Size Ortopedik Krovat',
        category: 'Yotoqxona mebeli',
        price: '$1,650',
        image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80',
        description: '200x200 sm o\'lchamdagi premium krovat. Magniflex ortopedik matrasi bilan.',
        features: ['O\'lchami: 200 x 200 sm', 'Gipoallergen matras', 'Bosh qismida yumshoq teri']
      }
    ]
  },

  // 4. VANNA XONASI
  'bathroom': {
    id: 'bathroom',
    name: 'Vanna xonasi',
    nameEn: 'Luxury Bathroom',
    subtitle: 'Zamonaviy dush, vanna va marmar kafel',
    typeTag: 'Sanuzel (Vanna)',
    area: '12 m²',
    ceiling: '3.0 metr',
    light: 'Iliq LED & Oyna atrofi yorug\'lik',
    furnishing: 'Jacuzzi, Dush & Smart sanuzel',
    description: 'Hashamatli vanna xonasi. Issiq pol tizimi, katta oyna, gidromassajli vanna va nemis santexnikasi bilan jihozlangan.',
    voiceGuide: 'Vanna xonasiga xush kelibsiz! Bu yerda o\'n ikki kvadrat metr maydonda issiq pol, qulay vanna va zamonaviy dush tizimi o\'rnatilgan.',
    image: 'https://dl.polyhaven.org/file/ph-assets/HDRIs/extra/Tonemapped%20JPG/modern_bathroom.jpg',
    mapCoords: { x: 295, y: 230 },
    initialView: { pitch: -5, yaw: 0, hfov: 100 },
    hotspots: [
      {
        type: 'scene',
        targetRoom: 'living-room',
        pitch: -2,
        yaw: -170,
        title: 'Mehmonxonaga qaytish',
        icon: 'fa-couch'
      },
      {
        type: 'scene',
        targetRoom: 'bedroom',
        pitch: -2,
        yaw: 45,
        title: 'Yotoqxonaga o\'tish',
        icon: 'fa-bed'
      },
      {
        type: 'info',
        pitch: -15,
        yaw: 15,
        title: 'Gidromassajli Jacuzzi Vanna',
        category: 'Santexnika',
        price: '$1,950',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
        description: 'Ko\'p funksiyali suv massaji va doimiy suv haroratini saqlab turuvchi zamonaviy vanna.',
        features: ['Gidromassaj 12 ta forsunka', 'Sensorli boshqaruv', 'Akril qoplama']
      }
    ]
  }
};

// ==========================================================================
// 2. GLOBAL O'ZGARUVCHILAR VA ELEMENTLAR
// ==========================================================================
let currentRoomId = 'living-room';
let pannellumViewer = null;
let isVoicePlaying = false;
let isMusicPlaying = false;
let audioContext = null;
let ambientOscillators = [];

const elements = {
  badgeRoomName: document.getElementById('badge-room-name'),
  btnToggleMap: document.getElementById('btn-toggle-map'),
  miniMapCard: document.getElementById('mini-map-card'),
  btnCloseMap: document.getElementById('btn-close-map'),
  mapRadarPin: document.getElementById('map-radar-pin'),

  btnToggleInfo: document.getElementById('btn-toggle-info'),
  roomInfoCard: document.getElementById('room-info-card'),
  btnCloseInfo: document.getElementById('btn-close-info'),
  infoRoomName: document.getElementById('info-room-name'),
  infoRoomSub: document.getElementById('info-room-sub'),
  infoRoomArea: document.getElementById('info-room-area'),
  infoRoomLight: document.getElementById('info-room-light'),
  infoRoomFurn: document.getElementById('info-room-furn'),
  infoRoomDesc: document.getElementById('info-room-desc'),
  roomTypeTag: document.getElementById('room-type-tag'),

  btnToggleVoice: document.getElementById('btn-toggle-voice'),
  btnListenGuide: document.getElementById('btn-listen-guide'),
  btnToggleMusic: document.getElementById('btn-toggle-music'),
  btnFullscreen: document.getElementById('btn-fullscreen'),

  btnUploadPano: document.getElementById('btn-upload-pano'),
  panoFileInput: document.getElementById('pano-file-input'),

  btnOpenContact: document.getElementById('btn-open-contact'),
  btnInquireRoom: document.getElementById('btn-inquire-room'),
  contactModal: document.getElementById('contact-modal'),
  btnCloseContact: document.getElementById('btn-close-contact'),
  contactForm: document.getElementById('contact-form'),
  clientRoomSelect: document.getElementById('client-room'),
  submitBtn: document.getElementById('submit-btn'),

  furnitureModal: document.getElementById('furniture-modal'),
  btnCloseFurniture: document.getElementById('btn-close-furniture'),
  furnitureImg: document.getElementById('furniture-img'),
  furnitureTitle: document.getElementById('furniture-title'),
  furnitureCategory: document.getElementById('furniture-category'),
  furniturePrice: document.getElementById('furniture-price'),
  furnitureDesc: document.getElementById('furniture-desc'),
  furnitureFeatures: document.getElementById('furniture-features'),
  btnAskFurniture: document.getElementById('btn-ask-furniture'),

  btnPrevRoom: document.getElementById('btn-prev-room'),
  btnNextRoom: document.getElementById('btn-next-room'),
  roomThumbCards: document.querySelectorAll('.room-thumb-card'),
  toastContainer: document.getElementById('toast-container')
};

// ==========================================================================
// 3. PANNELLUM VIEWERNİ ISHGA TUSHIRISH
// ==========================================================================
function initVirtualTour() {
  const pannellumScenes = {};

  Object.values(ROOMS_DATA).forEach(room => {
    pannellumScenes[room.id] = {
      title: room.name,
      type: 'equirectangular',
      panorama: room.image,
      pitch: room.initialView.pitch,
      yaw: room.initialView.yaw,
      hfov: room.initialView.hfov,
      minHfov: 60,
      maxHfov: 120,
      autoLoad: true,
      hotSpotDebug: false,
      hotSpots: room.hotspots.map(spot => {
        if (spot.type === 'scene') {
          return {
            pitch: spot.pitch,
            yaw: spot.yaw,
            cssClass: 'custom-hotspot-scene',
            createTooltipFunc: createSceneHotspotElement,
            createTooltipArgs: spot
          };
        } else {
          return {
            pitch: spot.pitch,
            yaw: spot.yaw,
            cssClass: 'custom-hotspot-info',
            createTooltipFunc: createInfoHotspotElement,
            createTooltipArgs: spot
          };
        }
      })
    };
  });

  pannellumViewer = pannellum.viewer('panorama', {
    default: {
      firstScene: currentRoomId,
      autoLoad: true,
      autoRotate: -1.0,
      autoRotateInactivityDelay: 4000,
      compass: false,
      showControls: false
    },
    scenes: pannellumScenes
  });

  pannellumViewer.on('load', () => {
    const activeSceneId = pannellumViewer.getScene();
    if (activeSceneId && activeSceneId !== currentRoomId && ROOMS_DATA[activeSceneId]) {
      updateActiveRoomUI(activeSceneId);
    }
  });

  updateActiveRoomUI(currentRoomId);
}

function createSceneHotspotElement(hotSpotDiv, args) {
  hotSpotDiv.innerHTML = `
    <div class="hotspot-scene-inner">
      <i class="fa-solid ${args.icon || 'fa-door-open'}"></i>
    </div>
    <div class="hotspot-tooltip">${args.title} <i class="fa-solid fa-arrow-right"></i></div>
  `;
  
  hotSpotDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    switchRoom(args.targetRoom);
  });
}

function createInfoHotspotElement(hotSpotDiv, args) {
  hotSpotDiv.innerHTML = `
    <div class="hotspot-info-inner">
      <i class="fa-solid fa-info"></i>
    </div>
    <div class="hotspot-tooltip">${args.title} • <strong>${args.price}</strong></div>
  `;
  
  hotSpotDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    openFurnitureModal(args);
  });
}

// ==========================================================================
// 4. XONANI ALMASHTIRISH VA UI SINXRONIZATSIYASI
// ==========================================================================
function switchRoom(roomId) {
  if (!ROOMS_DATA[roomId] || roomId === currentRoomId) return;

  currentRoomId = roomId;

  if (isVoicePlaying) {
    stopVoiceGuide();
  }

  if (pannellumViewer) {
    pannellumViewer.loadScene(roomId);
  }

  updateActiveRoomUI(roomId);
  showToast('Xona almashtirildi', `${ROOMS_DATA[roomId].name}ga o'tdingiz.`, 'success');
}

function updateActiveRoomUI(roomId) {
  const room = ROOMS_DATA[roomId];
  if (!room) return;

  currentRoomId = roomId;

  elements.badgeRoomName.textContent = room.nameEn;
  elements.infoRoomName.textContent = room.name;
  elements.infoRoomSub.textContent = `${room.nameEn} • ${room.subtitle}`;
  elements.infoRoomArea.textContent = room.area;
  elements.infoRoomLight.textContent = room.light;
  if (elements.infoRoomFurn) elements.infoRoomFurn.textContent = room.furnishing;
  elements.infoRoomDesc.textContent = room.description;
  elements.roomTypeTag.textContent = room.typeTag;

  // Mini-xaritadagi radar pini va faol zona
  if (elements.mapRadarPin && room.mapCoords) {
    elements.mapRadarPin.setAttribute('transform', `translate(${room.mapCoords.x}, ${room.mapCoords.y})`);
  }

  document.querySelectorAll('.room-zone').forEach(zone => {
    if (zone.dataset.room === roomId) {
      zone.classList.add('active');
    } else {
      zone.classList.remove('active');
    }
  });

  // Pastki slayd kartochkasi
  document.querySelectorAll('.room-thumb-card').forEach(card => {
    if (card.dataset.roomId === roomId) {
      card.classList.add('active');
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    } else {
      card.classList.remove('active');
    }
  });

  // Aloqa formasidagi xona tanlovini moslashtirish
  if (elements.clientRoomSelect) {
    const matchOption = Array.from(elements.clientRoomSelect.options).find(opt => 
      opt.value.toLowerCase().includes(room.name.toLowerCase())
    );
    if (matchOption) {
      matchOption.selected = true;
    }
  }
}

function navigateRoom(direction) {
  const roomKeys = Object.keys(ROOMS_DATA);
  const currentIndex = roomKeys.indexOf(currentRoomId);
  let nextIndex;

  if (direction === 'next') {
    nextIndex = (currentIndex + 1) % roomKeys.length;
  } else {
    nextIndex = (currentIndex - 1 + roomKeys.length) % roomKeys.length;
  }

  switchRoom(roomKeys[nextIndex]);
}

// ==========================================================================
// 5. O'Z 360° RASMINI YUKLASH FUNKSIYASI (CUSTOM PANORAMA UPLOAD)
// ==========================================================================
function handleCustomImageUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  if (!file.type.startsWith('image/')) {
    showToast('Xatolik', 'Iltimos, faqat rasm faylini tanlang!', 'error');
    return;
  }

  const reader = new FileReader();

  showToast('Yuklanmoqda...', 'Rasmingiz 360° sferaga moslanmoqda...', 'info');

  reader.onload = function(event) {
    const customDataUrl = event.target.result;

    // Pannellum'da dinamik sahnani qayta ochish
    if (pannellumViewer) {
      try {
        pannellumViewer.destroy();
      } catch(err) {}
    }

    pannellumViewer = pannellum.viewer('panorama', {
      type: 'equirectangular',
      panorama: customDataUrl,
      autoLoad: true,
      autoRotate: -1.0,
      showControls: false
    });

    elements.badgeRoomName.textContent = 'Custom 360° Room';
    elements.infoRoomName.textContent = 'Yuklangan xona';
    elements.infoRoomSub.textContent = file.name;
    elements.infoRoomDesc.textContent = 'Siz yuklagan shaxsiy 360° fotosurat muvaffaqiyatli WebGL sferasiga joylashtirildi. Sichqoncha orqali atrofni bemalol aylantirib tomosha qilishingiz mumkin!';

    showToast('Muvaffaqiyatli!', 'Rasmingiz 360° virtual ko\'rinishga aylantirildi! 🎉', 'success');
  };

  reader.readAsDataURL(file);
}

// ==========================================================================
// 6. MEBEL / JIHOZ MODALI LOGIKASI
// ==========================================================================
function openFurnitureModal(item) {
  elements.furnitureImg.src = item.image;
  elements.furnitureTitle.textContent = item.title;
  elements.furnitureCategory.textContent = item.category;
  elements.furniturePrice.textContent = item.price;
  elements.furnitureDesc.textContent = item.description;

  elements.furnitureFeatures.innerHTML = item.features.map(feat => `
    <div class="feature-pill">
      <i class="fa-solid fa-check"></i>
      <span>${feat}</span>
    </div>
  `).join('');

  elements.btnAskFurniture.onclick = () => {
    closeModal(elements.furnitureModal);
    openContactModal(`Salom! Men "${item.title}" (${item.price}) haqida batafsil ma'lumot olmoqchiman.`);
  };

  openModal(elements.furnitureModal);
}

// ==========================================================================
// 7. UY EGASI BILAN BOG'LANISH VA TELEGRAM INTEGRATSIYASI
// ==========================================================================
function openContactModal(prefilledMessage = '') {
  if (prefilledMessage) {
    document.getElementById('client-message').value = prefilledMessage;
  }
  openModal(elements.contactModal);
}

async function handleContactSubmit(e) {
  e.preventDefault();

  const nameInput = document.getElementById('client-name');
  const phoneInput = document.getElementById('client-phone');
  const roomSelect = document.getElementById('client-room');
  const messageInput = document.getElementById('client-message');

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const room = roomSelect.value;
  const message = messageInput.value.trim();

  if (!name || !phone) {
    showToast('Xatolik', 'Iltimos, ism va telefon raqamingizni kiriting!', 'error');
    return;
  }

  const btnText = elements.submitBtn.querySelector('.btn-text');
  const btnLoader = elements.submitBtn.querySelector('.btn-loader');
  elements.submitBtn.disabled = true;
  btnText.style.display = 'none';
  btnLoader.style.display = 'inline-flex';

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, room, message })
    });

    const data = await response.json();

    if (response.ok && data.success) {
      if (data.demo) {
        showToast('Demo rejim', data.message, 'warning');
      } else {
        showToast('Muvaffaqiyatli!', data.message, 'success');
      }

      elements.contactForm.reset();
      setTimeout(() => {
        closeModal(elements.contactModal);
      }, 1500);
    } else {
      showToast('Xatolik', data.message || 'Xabar yuborishda xatolik yuz berdi.', 'error');
    }
  } catch (err) {
    console.error('Tarmoq xatosi:', err);
    showToast('Aloqa xatosi', 'Server bilan bog\'lanishda xatolik yuz berdi.', 'error');
  } finally {
    elements.submitBtn.disabled = false;
    btnText.style.display = 'inline-flex';
    btnLoader.style.display = 'none';
  }
}

// ==========================================================================
// 8. AUDIO GID VA FON MUSIQASI
// ==========================================================================
function toggleVoiceGuide() {
  if (isVoicePlaying) {
    stopVoiceGuide();
  } else {
    playVoiceGuide();
  }
}

function playVoiceGuide() {
  if (!('speechSynthesis' in window)) {
    showToast('Qo\'llab-quvvatlanmaydi', 'Brauzeringizda ovozli nutq texnologiyasi mavjud emas.', 'warning');
    return;
  }

  window.speechSynthesis.cancel();

  const currentRoom = ROOMS_DATA[currentRoomId] || { name: 'Xona', voiceGuide: 'Ushbu xonaga xush kelibsiz!' };
  const utterance = new SpeechSynthesisUtterance(currentRoom.voiceGuide);
  
  utterance.lang = 'uz-UZ';
  utterance.rate = 0.95;
  utterance.pitch = 1.0;

  utterance.onend = () => {
    isVoicePlaying = false;
    updateVoiceButtonState(false);
  };

  utterance.onerror = () => {
    isVoicePlaying = false;
    updateVoiceButtonState(false);
  };

  window.speechSynthesis.speak(utterance);
  isVoicePlaying = true;
  updateVoiceButtonState(true);
  showToast('Audio Gid faol', `${currentRoom.name} bo'yicha ma'lumot o'qilmoqda...`, 'info');
}

function stopVoiceGuide() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  isVoicePlaying = false;
  updateVoiceButtonState(false);
}

function updateVoiceButtonState(active) {
  if (active) {
    elements.btnToggleVoice.classList.add('active');
    elements.btnToggleVoice.innerHTML = '<i class="fa-solid fa-volume-xmark"></i> <span class="btn-label">To\'xtatish</span>';
    elements.btnListenGuide.innerHTML = '<i class="fa-solid fa-volume-xmark"></i> Ovozni to\'xtatish';
  } else {
    elements.btnToggleVoice.classList.remove('active');
    elements.btnToggleVoice.innerHTML = '<i class="fa-solid fa-headphones"></i> <span class="btn-label">Audio Gid</span>';
    elements.btnListenGuide.innerHTML = '<i class="fa-solid fa-volume-high"></i> Ovozli sharhni tinglash';
  }
}

function toggleBackgroundMusic() {
  if (isMusicPlaying) {
    stopBackgroundMusic();
  } else {
    startBackgroundMusic();
  }
}

function startBackgroundMusic() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!audioContext) audioContext = new AudioCtx();
    if (audioContext.state === 'suspended') audioContext.resume();

    const notes = [130.81, 196.00, 246.94, 329.63];
    ambientOscillators = [];

    const masterGain = audioContext.createGain();
    masterGain.gain.setValueAtTime(0.04, audioContext.currentTime);
    masterGain.connect(audioContext.destination);

    notes.forEach(freq => {
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioContext.currentTime);
      gain.gain.setValueAtTime(0.02, audioContext.currentTime);
      
      osc.connect(gain);
      gain.connect(masterGain);
      osc.start();
      ambientOscillators.push(osc);
    });

    isMusicPlaying = true;
    elements.btnToggleMusic.classList.add('active');
    elements.btnToggleMusic.innerHTML = '<i class="fa-solid fa-volume-xmark"></i> <span class="btn-label">Musiqa</span>';
    showToast('Fon musiqasi', 'Yumshoq relaks fon musiqasi yoqildi 🎵', 'info');
  } catch (err) {
    console.error('AudioContext xatosi:', err);
  }
}

function stopBackgroundMusic() {
  if (ambientOscillators.length > 0) {
    ambientOscillators.forEach(osc => {
      try { osc.stop(); } catch(e) {}
    });
    ambientOscillators = [];
  }
  isMusicPlaying = false;
  elements.btnToggleMusic.classList.remove('active');
  elements.btnToggleMusic.innerHTML = '<i class="fa-solid fa-music"></i> <span class="btn-label">Musiqa</span>';
  showToast('Fon musiqasi', 'Musiqa o\'chirildi.', 'info');
}

// ==========================================================================
// 9. TOAST VA MODAL YORDAMCHILARI
// ==========================================================================
function openModal(modalEl) {
  modalEl.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalEl) {
  modalEl.classList.remove('active');
  document.body.style.overflow = '';
}

function showToast(title, message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let icon = 'fa-circle-info';
  if (type === 'success') icon = 'fa-circle-check';
  if (type === 'warning') icon = 'fa-triangle-exclamation';
  if (type === 'error') icon = 'fa-circle-xmark';

  toast.innerHTML = `
    <i class="fa-solid ${icon}"></i>
    <div class="toast-content">
      <h5>${title}</h5>
      <p>${message}</p>
    </div>
  `;

  elements.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 350);
  }, 4000);
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
    elements.btnFullscreen.innerHTML = '<i class="fa-solid fa-compress"></i>';
  } else {
    document.exitFullscreen().catch(() => {});
    elements.btnFullscreen.innerHTML = '<i class="fa-solid fa-expand"></i>';
  }
}

// ==========================================================================
// 10. HODISALAR TINGLOVCHILARI (EVENT LISTENERS)
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initVirtualTour();

  // Rasm yuklash hodisalari
  elements.btnUploadPano.addEventListener('click', () => {
    elements.panoFileInput.click();
  });
  elements.panoFileInput.addEventListener('change', handleCustomImageUpload);

  // Mini-xarita boshqaruvi
  elements.btnToggleMap.addEventListener('click', () => {
    elements.miniMapCard.classList.toggle('hidden');
    elements.btnToggleMap.classList.toggle('active', !elements.miniMapCard.classList.contains('hidden'));
  });

  elements.btnCloseMap.addEventListener('click', () => {
    elements.miniMapCard.classList.add('hidden');
    elements.btnToggleMap.classList.remove('active');
  });

  document.querySelectorAll('.room-zone').forEach(zone => {
    zone.addEventListener('click', () => {
      const roomId = zone.dataset.room;
      if (roomId) switchRoom(roomId);
    });
  });

  // Xona info kartochkasi boshqaruvi
  elements.btnToggleInfo.addEventListener('click', () => {
    elements.roomInfoCard.classList.toggle('hidden');
    elements.btnToggleInfo.classList.toggle('active', !elements.roomInfoCard.classList.contains('hidden'));
  });

  elements.btnCloseInfo.addEventListener('click', () => {
    elements.roomInfoCard.classList.add('hidden');
    elements.btnToggleInfo.classList.remove('active');
  });

  // Pastki slayd kartochkalari
  document.querySelectorAll('.room-thumb-card').forEach(card => {
    card.addEventListener('click', () => {
      const roomId = card.dataset.roomId;
      if (roomId) switchRoom(roomId);
    });
  });

  elements.btnPrevRoom.addEventListener('click', () => navigateRoom('prev'));
  elements.btnNextRoom.addEventListener('click', () => navigateRoom('next'));

  // Audio va Musiqa tugmalari
  elements.btnToggleVoice.addEventListener('click', toggleVoiceGuide);
  elements.btnListenGuide.addEventListener('click', toggleVoiceGuide);
  elements.btnToggleMusic.addEventListener('click', toggleBackgroundMusic);
  elements.btnFullscreen.addEventListener('click', toggleFullscreen);

  // Aloqa formasi tugmalari
  elements.btnOpenContact.addEventListener('click', () => openContactModal());
  elements.btnInquireRoom.addEventListener('click', () => {
    const currentRoom = ROOMS_DATA[currentRoomId] || { name: 'Xona', area: '' };
    openContactModal(`Salom! Men ${currentRoom.name} (${currentRoom.area}) bo'yicha qiziqmoqdaman.`);
  });

  elements.btnCloseContact.addEventListener('click', () => closeModal(elements.contactModal));
  elements.contactModal.addEventListener('click', (e) => {
    if (e.target === elements.contactModal) closeModal(elements.contactModal);
  });

  elements.contactForm.addEventListener('submit', handleContactSubmit);

  // Mebel modali yopish
  elements.btnCloseFurniture.addEventListener('click', () => closeModal(elements.furnitureModal));
  elements.furnitureModal.addEventListener('click', (e) => {
    if (e.target === elements.furnitureModal) closeModal(elements.furnitureModal);
  });

  // Klaviatura boshqaruvi
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(elements.furnitureModal);
      closeModal(elements.contactModal);
      elements.miniMapCard.classList.add('hidden');
      elements.roomInfoCard.classList.add('hidden');
    } else if (e.key === 'ArrowRight') {
      navigateRoom('next');
    } else if (e.key === 'ArrowLeft') {
      navigateRoom('prev');
    }
  });

  setTimeout(() => {
    showToast('Xush kelibsiz!', '360° virtual sayohatga marhamat! 5 ta xonani tomosha qiling yoki o\'z rasmingizni yuklang.', 'info');
  }, 1200);
});
