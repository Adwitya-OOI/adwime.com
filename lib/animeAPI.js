// Anime API helper placeholder 
const API_URL = 'https://api.jikan.moe/v4';

export const fetchTrendingAnime = async () => {
  const response = await fetch(`${API_URL}/top/anime`);
  if (!response.ok) {
    throw new Error('Failed to fetch trending anime');
  }
  return response.json();
};

export const fetchAnimeDetails = async (id) => {
  const response = await fetch(`${API_URL}/anime/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch anime details');
  }
  return response.json();
};