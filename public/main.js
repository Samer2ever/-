fetch('https://your-backend-url.com/ads')
  .then(res => res.json())
  .then(ads => {
    const container = document.getElementById("ads-container");
    ads.forEach(ad => {
      const adBox = document.createElement("div");
      adBox.id = "ad";
      adBox.innerHTML = `
        <h3>${ad.title}</h3>
        <img src="${ad.image}" alt="${ad.title}">
        <p>${ad.description}</p>
        <strong>${ad.price}</strong>
      `;
      container.appendChild(adBox);
    });
  });