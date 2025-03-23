// Sample list of assets
const assets = [
    { name: 'Bitcoin' },
    { name: 'Ethereum' },
    { name: 'Apple' },
    { name: 'Amazon' },
    { name: 'Tesla' }
  ];
  
  // Sentiment Types and Icons
  const sentimentTypes = {
    Positive: '👍',
    Neutral: '😐',
    Negative: '👎'
  };
  
  const assetsListEl = document.getElementById('assets-list');
  const refreshBtn = document.getElementById('refresh-btn');
  
  // Function to generate random sentiment
  function getRandomSentiment() {
    const keys = Object.keys(sentimentTypes);
    const index = Math.floor(Math.random() * keys.length);
    return keys[index];
  }
  
  // Function to update sentiment for each asset
  function updateSentiments() {
    assets.forEach(asset => {
      // Select element linked to asset
      const assetEl = document.querySelector(`[data-asset="${asset.name}"]`);
      const sentimentEl = assetEl.querySelector('.sentiment');
      const timestampEl = assetEl.querySelector('.timestamp');
  
      // Generate random sentiment
      const sentiment = getRandomSentiment();
  
      // Update sentiment text and icon
      sentimentEl.innerHTML = `${sentimentTypes[sentiment]} ${sentiment}`;
      sentimentEl.className = `sentiment ${sentiment.toLowerCase()}`;
  
      // Update timestamp
      timestampEl.textContent = `Updated: ${new Date().toLocaleTimeString()}`;
    });
  }
  
  // Function to create assets dynamically
  function createAssets() {
    assets.forEach(asset => {
      const assetEl = document.createElement('div');
      assetEl.classList.add('asset');
      assetEl.setAttribute('data-asset', asset.name);
  
      // Initial sentiment
      const sentiment = getRandomSentiment();
  
      // Create asset element
      assetEl.innerHTML = `
        <div>
          <span>${asset.name}</span>
          <div class="timestamp">Updated: ${new Date().toLocaleTimeString()}</div>
        </div>
        <span class="sentiment ${sentiment.toLowerCase()}">
          ${sentimentTypes[sentiment]} ${sentiment}
        </span>
      `;
  
      // Add to list
      assetsListEl.appendChild(assetEl);
    });
  }
  
  // Handle manual refresh
  refreshBtn.addEventListener('click', () => {
    updateSentiments();
  });
  
  // Initialize
  createAssets();
  setInterval(updateSentiments, 2000);
  
