const featuredMenuItems = [
  {
    image: '../html/images/パスタ.jpg', // js/ から見て一つ上のimages/ を参照
    name: '季節の彩りパスタ',
    description: '旬の野菜をたっぷり使った、彩り豊かなパスタ。',
    price: '¥1,500'
  },
  {
    image: '../html/images/ハンバーグ.jpg', // js/ から見て一つ上のimages/ を参照
    name: 'ジューシー国産ハンバーグ',
    description: '厳選された国産豚肉を使った、ジューシーなハンバーグです。',
    price: '¥1,200'
  },
  {
    image: '../html/images/ラーメン.jpg', // js/ から見て一つ上のimages/ を参照
    name: '特製だし醤油ラーメン',
    description: '自家製だしのおいしいラーメン',
    price: '¥1,200'
  },
];

const menuContainer = document.getElementById('featured-menu-container');

featuredMenuItems.forEach(item => {
  const menuItemDiv = document.createElement('div');
  menuItemDiv.classList.add('menu-item');

  menuItemDiv.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <div class="menu-info"> <h4>${item.name}</h4>
        <p class="description">${item.description}</p> <p class="price">${item.price}</p>
    </div>
  `;

  menuContainer.appendChild(menuItemDiv);
});