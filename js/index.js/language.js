function setLanguage(lang) {
  document.querySelectorAll('[data-translate-key]').forEach(element => {
    const key = element.dataset.translateKey; // 要素からキーを取得

    if (translations[lang] && translations[lang][key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translations[lang][key];
      } else if (element.tagName === 'IMG' && element.hasAttribute('alt')) {
        element.alt = translations[lang][key];
      } else {
        element.innerText = translations[lang][key];
      }
    }
  });

  document.documentElement.lang = lang;

  document.querySelectorAll('.lang-button').forEach(button => {
    button.classList.remove('active');
  });

  const selectedButton = document.querySelector(`.lang-button[onclick*="setLanguage('${lang}')"]`);
  if (selectedButton) {
      selectedButton.classList.add('active');
  } else {
      console.warn(`Warning: Could not find language button for: ${lang}`);
  }

  localStorage.setItem('selectedLanguage', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('selectedLanguage');
  if (savedLang) {
    setLanguage(savedLang);
  } else {
    setLanguage('ja'); 
  }
});