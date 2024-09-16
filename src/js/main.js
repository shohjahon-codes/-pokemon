import { fetchCatalog, fetchAllData } from "./data.js";

const cardsContainer = document.querySelector(".cards");

// Barcha kartalarni olish va render qilish
const render = async () => {
    try {
        const data = await fetchCatalog(); // Ma'lumotlarni olish
        cardsContainer.innerHTML = data.slice(0, 6).map( // Faqqat birinchi 6 ta kartani ko'rsatamiz
            (item) => `
            <div class="card" data-name="${item.name}">
                <img src="${item.img}" alt="${item.name}">
                <h2>${item.name}</h2>
                <button>Details</button>
            </div>
            `
        ).join('');
    } catch (error) {
        console.error('Error fetching catalog:', error);
    }
};

render(); // Dastlabki kartalarni render qilish

// Kartaga bosilganda filtrlash
const filterCards = async (name) => {
    try {
        const allData = await fetchAllData(); // Boshqa endpointlardan ma'lumotlarni olish
        const filteredItems = allData.filter(item => item.name === name); // Nom bo'yicha filtrlash
        
        // Filtrlangan kartalarni HTML stringga aylantirib, .cards konteyneriga joylaymiz
        cardsContainer.innerHTML = filteredItems.map(
            (item) => `
            <div class="card" data-name="${item.name}">
                <img src="${item.img}" alt="${item.name}">
                <h2>${item.name}</h2>
                <button>Details</button>
            </div>
            `
        ).join('');
    } catch (error) {
        console.error('Error fetching all data:', error);
    }
};

// Event listener qo'shish
cardsContainer.addEventListener('click', function(e) {
    const card = e.target.closest('.card'); // Bosilgan elementdan eng yaqin .card elementini olish
    
    if (card) {
        const name = card.getAttribute('data-name'); // Data atributdan nomni olish
        filterCards(name); // Nom bo'yicha filtrlash
    }
});
