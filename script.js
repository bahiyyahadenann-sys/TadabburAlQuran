// Data 43 Ayat Al-Quran (8 Kategori)
const quranData = [
  // 1. Allah sentiasa bersama kita
  { id: 1, categoryId: 1, arabic: "وَهُوَ مَعَكُمْ أَيْنَ مَا كُنْتُمْ", translation: "Dan Dia bersama kamu di mana sahaja kamu berada.", surah: "Al-Hadid: 4" },
  { id: 2, categoryId: 1, arabic: "إِنَّ رَبِّي قَرِيبٌ مُجِيبٌ", translation: "Sesungguhnya Tuhanku Maha Dekat lagi Maha Memperkenankan doa.", surah: "Hud: 61" },
  { id: 3, categoryId: 1, arabic: "إِنَّ رَبِّي لَسَمِيعُ الدُّعَاءِ", translation: "Sesungguhnya Tuhanku Maha Mendengar doa.", surah: "Ibrahim: 39" },
  { id: 4, categoryId: 1, arabic: "إِنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ", translation: "Sesungguhnya Allah Maha Berkuasa atas segala sesuatu.", surah: "Al-Baqarah: 20" },
  { id: 5, categoryId: 1, arabic: "وَكَفَىٰ بِاللَّهِ وَكِيلًا", translation: "Cukuplah Allah sebagai Pelindung.", surah: "An-Nisa': 81" },
  { id: 6, categoryId: 1, arabic: "وَهُوَ أَرْحَمُ الرَّاحِمِينَ", translation: "Dan Dialah Yang Maha Penyayang antara para penyayang.", surah: "Yusuf: 64" },

  // 2. Tentang doa dan pengharapan
  { id: 7, categoryId: 2, arabic: "ادْعُونِي أَسْتَجِبْ لَكُمْ", translation: "Berdoalah kepada-Ku, nescaya Aku perkenankan untuk kamu.", surah: "Ghafir: 60" },
  { id: 8, categoryId: 2, arabic: "وَلَمْ أَكُن بِدُعَائِكَ رَبِّ شَقِيًّا", translation: "Dan aku tidak pernah kecewa dalam berdoa kepada-Mu, wahai Tuhanku.", surah: "Maryam: 4" },
  { id: 9, categoryId: 2, arabic: "رَبِّ زِدْنِي عِلْمًا", translation: "Wahai Tuhanku, tambahkanlah ilmuku.", surah: "Taha: 114" },
  { id: 10, categoryId: 2, arabic: "رَبَّنَا تَقَبَّلْ مِنَّا", translation: "Wahai Tuhan kami, terimalah amalan daripada kami.", surah: "Al-Baqarah: 127" },
  { id: 11, categoryId: 2, arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ", translation: "Cukuplah Allah bagi kami dan Dia sebaik-baik Pelindung.", surah: "Ali 'Imran: 173" },
  { id: 12, categoryId: 2, arabic: "رَبِّ اشْرَحْ لِي صَدْرِي", translation: "Wahai Tuhanku, lapangkanlah dadaku.", surah: "Taha: 25" },

  // 3. Tentang kesabaran dan kekuatan
  { id: 13, categoryId: 3, arabic: "وَبَشِّرِ الصَّابِرِينَ", translation: "Dan sampaikanlah berita gembira kepada orang-orang yang sabar.", surah: "Al-Baqarah: 155" },
  { id: 14, categoryId: 3, arabic: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ", translation: "Sesungguhnya Allah bersama orang-orang yang sabar.", surah: "Al-Baqarah: 153" },
  { id: 15, categoryId: 3, arabic: "وَاصْبِرْ وَمَا صَبْرُكَ إِلَّا بِاللَّهِ", translation: "Bersabarlah, dan kesabaranmu itu hanyalah dengan pertolongan Allah.", surah: "An-Nahl: 127" },
  { id: 16, categoryId: 3, arabic: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا", translation: "Allah tidak membebani seseorang melainkan sesuai dengan kemampuannya.", surah: "Al-Baqarah: 286" },
  { id: 17, categoryId: 3, arabic: "وَاللَّهُ يُحِبُّ الصَّابِرِينَ", translation: "Dan Allah mengasihi orang-orang yang sabar.", surah: "Ali 'Imran: 146" },
  { id: 18, categoryId: 3, arabic: "فَصَبْرٌ جَمِيلٌ", translation: "Maka kesabaran yang baik itulah kesabaranku.", surah: "Yusuf: 18" },

  // 4. Tentang taubat dan keampunan
  { id: 19, categoryId: 4, arabic: "إِنَّ اللَّهَ غَفُورٌ رَحِيمٌ", translation: "Sesungguhnya Allah Maha Pengampun lagi Maha Penyayang.", surah: "Al-Baqarah: 173" },
  { id: 20, categoryId: 4, arabic: "وَهُوَ الْغَفُورُ الْوَدُودُ", translation: "Dan Dialah Yang Maha Pengampun lagi Maha Mengasihi.", surah: "Al-Buruj: 14" },
  { id: 21, categoryId: 4, arabic: "إِنَّهُ هُوَ التَّوَّابُ الرَّحِيمُ", translation: "Sesungguhnya Dialah Yang Maha Penerima Taubat lagi Maha Penyayang.", surah: "Al-Baqarah: 37" },
  { id: 22, categoryId: 4, arabic: "وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ", translation: "Dan rahmat-Ku meliputi segala sesuatu.", surah: "Al-A'raf: 156" },
  { id: 23, categoryId: 4, arabic: "إِنَّ اللَّهَ يُحِبُّ الْمُحْسِنِينَ", translation: "Sesungguhnya Allah mengasihi orang-orang yang berbuat kebaikan.", surah: "Al-Baqarah: 195" },

  // 5. Tentang kehidupan dan perjalanan manusia
  { id: 24, categoryId: 5, arabic: "وَإِلَى اللَّهِ الْمَصِيرُ", translation: "Dan kepada Allah tempat kembali.", surah: "Ali 'Imran: 28" },
  { id: 25, categoryId: 5, arabic: "كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ", translation: "Setiap yang bernyawa pasti akan merasai mati.", surah: "Ali 'Imran: 185" },
  { id: 26, categoryId: 5, arabic: "وَاللَّهُ خَيْرٌ وَأَبْقَىٰ", translation: "Padahal Allah lebih baik dan lebih kekal.", surah: "Taha: 73" },
  { id: 27, categoryId: 5, arabic: "وَمَا عِندَ اللَّهِ خَيْرٌ وَأَبْقَىٰ", translation: "Apa yang ada di sisi Allah lebih baik dan lebih kekal.", surah: "Al-Qasas: 60" },
  { id: 28, categoryId: 5, arabic: "إِنَّ اللَّهَ يُحِبُّ الْمُتَوَكِّلِينَ", translation: "Sesungguhnya Allah mengasihi orang-orang yang bertawakal.", surah: "Ali 'Imran: 159" },
  { id: 29, categoryId: 5, arabic: "فَفِرُّوا إِلَى اللَّهِ", translation: "Maka larilah kamu kembali kepada Allah.", surah: "Az-Zariyat: 50" },
  { id: 30, categoryId: 5, arabic: "وَالْعَاقِبَةُ لِلْمُتَّقِينَ", translation: "Dan kesudahan yang baik adalah bagi orang-orang yang bertakwa.", surah: "Al-A me'raf: 128" },

  // 6. Tentang syukur dan nikmat
  { id: 31, categoryId: 6, arabic: "لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ", translation: "Jika kamu bersyukur, pasti Aku akan menambah nikmat kepadamu.", surah: "Ibrahim: 7" },
  { id: 32, categoryId: 6, arabic: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ", translation: "Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?", surah: "Ar-Rahman: 13" },
  { id: 33, categoryId: 6, arabic: "وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ", translation: "Bersyukurlah kepada-Ku dan janganlah kamu mengingkari nikmat-Ku.", surah: "Al-Baqarah: 152" },
  { id: 34, categoryId: 6, arabic: "إِنَّ اللَّهَ لَذُو فَضْلٍ عَلَى النَّاسِ", translation: "Sesungguhnya Allah mempunyai limpah kurnia kepada manusia.", surah: "Al-Baqarah: 243" },

  // 7. Tentang ilmu dan petunjuk
  { id: 35, categoryId: 7, arabic: "إِنَّ هَٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ", translation: "Sesungguhnya Al-Quran ini memberi petunjuk ke jalan yang paling lurus.", surah: "Al-Isra': 9" },
  { id: 36, categoryId: 7, arabic: "وَقُل رَّبِّ زِدْنِي عِلْمًا", translation: "Dan katakanlah: Wahai Tuhanku, tambahkanlah ilmuku.", surah: "Taha: 114" },
  { id: 37, categoryId: 7, arabic: "يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ", translation: "Allah mengangkat darjat orang-orang yang beriman antara kamu.", surah: "Al-Mujadilah: 11" },
  { id: 38, categoryId: 7, arabic: "وَمَن يُؤْتَ الْحِكْمَةَ فَقَدْ أُوتِيَ خَيْرًا كَثِيرًا", translation: "Sesiapa yang diberikan hikmah, sesungguhnya dia telah diberikan kebaikan yang banyak.", surah: "Al-Baqarah: 269" },

  // 8. Tentang hati dan jiwa
  { id: 39, categoryId: 8, arabic: "قَدْ أَفْلَحَ مَن زَكَّاهَا", translation: "Sesungguhnya berjayalah orang yang menyucikan jiwanya.", surah: "Asy-Syams: 9" },
  { id: 40, categoryId: 8, arabic: "وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ", translation: "Dan janganlah kamu berputus asa daripada rahmat dan pertolongan Allah.", surah: "Yusuf: 87" },
  { id: 41, categoryId: 8, arabic: "إِنَّ النَّفْسَ لَأَمَّارَةٌ بِالسُّوءِ", translation: "Sesungguhnya nafsu itu sentiasa menyuruh kepada kejahatan.", surah: "Yusuf: 53" },
  { id: 42, categoryId: 8, arabic: "يَوْمَ لَا يَنفَعُ مَالٌ وَلَا بَنُونَ", translation: "Pada hari yang harta dan anak-anak tidak memberikan manfaat.", surah: "Asy-Syu'ara': 88" },
  { id: 43, categoryId: 8, arabic: "إِلَّا مَنْ أَتَى اللَّهَ بِقَلْبٍ سَلِيمٍ", translation: "Kecuali orang yang datang menghadap Allah dengan hati yang sejahtera.", surah: "Asy-Syu'ara': 89" }
];

// Senarai Kategori
const categories = [
  { id: 'all', name: 'Semua Ayat', icon: 'fa-list' },
  { id: 1, name: 'Allah Sentiasa Bersama', icon: 'fa-hand-holding-heart' },
  { id: 2, name: 'Doa & Pengharapan', icon: 'fa-hands-praying' },
  { id: 3, name: 'Kesabaran & Kekuatan', icon: 'fa-shield-halved' },
  { id: 4, name: 'Taubat & Keampunan', icon: 'fa-water' },
  { id: 5, name: 'Kehidupan & Perjalanan', icon: 'fa-compass' },
  { id: 6, name: 'Syukur & Nikmat', icon: 'fa-sun' },
  { id: 7, name: 'Ilmu & Petunjuk', icon: 'fa-book-open' },
  { id: 8, name: 'Hati & Jiwa', icon: 'fa-heart' }
];

// State Aplikasi
let activeCategory = 'all';
let searchQuery = '';

// DOM Elements
const categoryTabsContainer = document.getElementById('category-tabs');
const versesContainer = document.getElementById('verses-container');
const verseCountEl = document.getElementById('verse-count');
const currentCategoryTitleEl = document.getElementById('current-category-title');
const searchInput = document.getElementById('search-input');
const emptyState = document.getElementById('empty-state');
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const randomBtn = document.getElementById('random-btn');
const randomModal = document.getElementById('random-modal');
const closeModal = document.getElementById('close-modal');
const modalContent = document.getElementById('modal-content');

// Inisialisasi
document.addEventListener('DOMContentLoaded', () => {
  renderCategoryTabs();
  renderVerses();

  // Event Listeners
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderVerses();
  });

  themeToggleBtn.addEventListener('click', toggleTheme);
  randomBtn.addEventListener('click', showRandomVerse);
  closeModal.addEventListener('click', () => randomModal.classList.add('hidden'));

  randomModal.addEventListener('click', (e) => {
    if (e.target === randomModal) randomModal.classList.add('hidden');
  });
});

// Render Tabs Kategori
function renderCategoryTabs() {
  categoryTabsContainer.innerHTML = categories.map(cat => {
    const isActive = activeCategory === cat.id;
    const activeClass = isActive 
      ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20' 
      : 'bg-white text-slate-600 hover:bg-emerald-50 border border-emerald-100';
    
    return `
      <button 
        onclick="switchCategory('${cat.id}')"
        class="flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${activeClass}">
        <i class="fa-solid ${cat.icon}"></i>
        <span>${cat.name}</span>
      </button>
    `;
  }).join('');
}

// Tukar Kategori
function switchCategory(catId) {
  activeCategory = catId === 'all' ? 'all' : parseInt(catId);
  const catObj = categories.find(c => c.id === activeCategory || c.id === catId);
  currentCategoryTitleEl.textContent = catObj ? catObj.name : 'Semua Ayat';
  
  renderCategoryTabs();
  renderVerses();
}

// Render Senarai Ayat
function renderVerses() {
  let filtered = quranData.filter(verse => {
    const matchCategory = activeCategory === 'all' || verse.categoryId === activeCategory;
    const matchSearch = verse.arabic.includes(searchQuery) ||
                        verse.translation.toLowerCase().includes(searchQuery) ||
                        verse.surah.toLowerCase().includes(searchQuery);
    return matchCategory && matchSearch;
  });

  verseCountEl.textContent = `${filtered.length} ayat`;

  if (filtered.length === 0) {
    versesContainer.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  versesContainer.innerHTML = filtered.map(verse => createVerseCardHTML(verse)).join('');
}

// Bina Kad HTML Ayat
function createVerseCardHTML(verse) {
  const catObj = categories.find(c => c.id === verse.categoryId);

  return `
    <div class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-emerald-100/80 flex flex-col justify-between transition-all duration-300 animate-fade-in group">
      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-100">
            ${catObj ? catObj.name : 'Tadabbur'}
          </span>
          <span class="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
            ${verse.surah}
          </span>
        </div>

        <!-- Teks Arab -->
        <div class="text-right my-4">
          <p class="font-arabic text-2xl sm:text-3xl text-slate-800 tracking-wide leading-loose">
            ${verse.arabic}
          </p>
        </div>

        <!-- Terjemahan -->
        <p class="text-sm text-slate-600 leading-relaxed font-normal mt-3">
          "${verse.translation}"
        </p>
      </div>

      <!-- Action Footer -->
      <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
        <span class="text-[11px] font-medium text-slate-400">Ayat #${verse.id}</span>
        <button onclick="copyToClipboard('${verse.arabic.replace(/'/g, "\\'")} - ${verse.translation.replace(/'/g, "\\'")} (${verse.surah})', this)" 
          class="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-emerald-700 hover:bg-emerald-50 transition-colors">
          <i class="fa-regular fa-copy"></i>
          <span>Salin</span>
        </button>
      </div>
    </div>
  `;
}

// Salin Teks
function copyToClipboard(text, btnElement) {
  navigator.clipboard.writeText(text).then(() => {
    const originalText = btnElement.innerHTML;
    btnElement.innerHTML = `<i class="fa-solid fa-check text-emerald-600"></i><span class="text-emerald-600">Disalin!</span>`;
    setTimeout(() => {
      btnElement.innerHTML = originalText;
    }, 2000);
  });
}

// Tukar Tema Gelap/Terang
function toggleTheme() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  themeIcon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
}

// Papar Ayat Rawak dalam Modal
function showRandomVerse() {
  const randomIndex = Math.floor(Math.random() * quranData.length);
  const verse = quranData[randomIndex];
  const catObj = categories.find(c => c.id === verse.categoryId);

  modalContent.innerHTML = `
    <div class="text-center">
      <span class="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
        ${catObj ? catObj.name : ''} • ${verse.surah}
      </span>
      <p class="font-arabic text-3xl text-slate-800 my-6 leading-loose">
        ${verse.arabic}
      </p>
      <p class="text-sm text-slate-600 italic mb-6">
        "${verse.translation}"
      </p>
      <button onclick="copyToClipboard('${verse.arabic.replace(/'/g, "\\'")} - ${verse.translation.replace(/'/g, "\\'")} (${verse.surah})', this)"
        class="w-full py-2.5 bg-emerald-700 text-white rounded-xl text-xs font-semibold hover:bg-emerald-800 transition-colors flex items-center justify-center space-x-2">
        <i class="fa-regular fa-copy"></i>
        <span>Salin Ayat Ini</span>
      </button>
    </div>
  `;

  randomModal.classList.remove('hidden');
}