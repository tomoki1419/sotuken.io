const SERVICE_ID = "sotsuken-news"; 
const API_KEY = "qDzFzutvTNfd9mXqkWzAqoBUq1HrkkZBb2cc";

// microCMSからお知らせを取得する関数
async function fetchNews() {
  const url = `https://${SERVICE_ID}.microcms.io/api/v1/news`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'X-API-KEY': API_KEY
      }
    });
    const data = await response.json();
    
    const newsList = document.getElementById('news-list');
    data.contents.forEach(item => {
      const li = document.createElement('li');
      const date = new Date(item.createdAt).toLocaleDateString('ja-JP');
      li.innerHTML = `<strong>${date}</strong>: ${item.content}`;
      newsList.appendChild(li);
    });
  } catch (error) {
    console.error('お知らせの取得に失敗しました:', error);
    document.getElementById('news-list').innerHTML = '<li>お知らせの取得に失敗しました。</li>';
  }
}

// ページが読み込まれたらお知らせを取得
fetchNews();