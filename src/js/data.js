// data.js
export const fetchCatalog = async () => {
    const response = await fetch('http://localhost:3600/catalog');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
};

export const fetchAllData = async () => {
    const response = await fetch('http://localhost:3600/all-data');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
};
