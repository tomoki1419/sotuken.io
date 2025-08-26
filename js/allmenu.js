const featuredMenuItems = [
  {
    image: '../images/パスタ.jpg',
    name: '季節の彩りパスタ',
    description: '旬の野菜をたっぷり使った、彩り豊かなパスタ。',
    price: '¥1,500'
  },
  {
    image: '../images/ハンバーグ.jpg',
    name: 'ジューシー国産ハンバーグ', // 料理名を分かりやすく変更
    description: '厳選された国産豚肉を使った、ジューシーなハンバーグです。',
    price: '¥1,200'
  },
  {
    image: '../images/ラーメン.jpg',
    name: '特製だし醤油ラーメン', // 料理名を分かりやすく変更
    description: '自家製だしのおいしいラーメン',
    price: '¥1,200'
  },
  {
    image: '../images/パスタ.jpg',
    name: '季節の彩りパスタ',
    description: '旬の野菜をたっぷり使った、彩り豊かなパスタ。',
    price: '¥1,500'
  },
  {
    image: '../images/ハンバーグ.jpg',
    name: 'ジューシー国産ハンバーグ', // 料理名を分かりやすく変更
    description: '厳選された国産豚肉を使った、ジューシーなハンバーグです。',
    price: '¥1,200'
  },
  {
    image: '../images/ラーメン.jpg',
    name: '特製だし醤油ラーメン', // 料理名を分かりやすく変更
    description: '自家製だしのおいしいラーメン',
    price: '¥1,200'
  }
];

const menuContainer = document.getElementById('featured-menu-container');

featuredMenuItems.forEach(item => {
  const menuItemDiv = document.createElement('div');
  menuItemDiv.classList.add('menu-item'); // CSSでスタイルを当てるための既存のクラスを追加

  menuItemDiv.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <h4>${item.name}</h4>
    <p>${item.description}</p>
    <p class="price">${item.price}</p>
  `;

  menuContainer.appendChild(menuItemDiv);
});