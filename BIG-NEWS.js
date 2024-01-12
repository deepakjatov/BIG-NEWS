// script.js
console.log("start")
  

    // Replace 'YOUR_API_KEY' with your actual News API key
    console.log("key")
    const apiKey = '6586839dd07e412f837cee5325ce67be';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  
    async function fetchNews() {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log("data")
  
        // Update the DOM with news articles and images
        const newsSection = document.getElementById('newsSection');
        data.articles.forEach(article => {
          const articleElement = document.createElement('article');
          articleElement.innerHTML = `
            <h2>${article.title}</h2>
            <img src="${article.urlToImage}" alt="${article.title}" style="max-width: 100%;">
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
          `;
          newsSection.appendChild(articleElement);
        });
      } catch (error) {
        console.error('Error fetching news:', error.message);
      }
    }
  
    // Fetch news when the page loads
 fetchNews();
  


  