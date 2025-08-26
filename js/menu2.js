
const featuredMenuItems = [
  { image: '../html/images/パスタ.jpg', name: '季節の彩りパスタ', price: '¥1,500' },
  { image: '../html/images/ハンバーグ.jpg', name: 'ジューシー国産ハンバーグ', price: '¥1,200' },
  { image: '../html/images/ラーメン.jpg', name: '特製だし醤油ラーメン', price: '¥1,200' },
  { image: '../html/images/天丼.jpg', name: 'タレたっぷり天丼', price: '¥1,000' },
  { image: '../html/images/かき氷.jpg', name: 'いちごのかき氷', price: '¥800' },
  { image: '../html/images/オレンジジュース.jpg', name: 'オレンジジュース', price: '¥200' },
  { image: '../html/images/ジンジャエール.jpg', name: 'ジンジャエール', price: '¥200' },
  { image: '../html/images/オレンジジュース.jpg', name: 'オレンジジュース', price: '¥200' },
];

const menuContainer = document.getElementById('featured-menu-container');

featuredMenuItems.forEach(item => {
  const menuItemDiv = document.createElement('div');
  menuItemDiv.classList.add('menu-item');


menuItemDiv.innerHTML = `
  <img src="${item.image}" alt="料理画像">
  <div class="menu-info">
    <h4>${item.name}</h4>
    <p class="price">${item.price}</p>
  </div>
`;
  menuContainer.appendChild(menuItemDiv);
});
