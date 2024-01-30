// NewsService.js

const apiKey = '3cdb509afdb2460391031d768d55bdb5';
const baseUrl = 'https://newsapi.org/v2';

export const getNewsByCategory = async (category) => {
  try {
    const response = await fetch(`${baseUrl}/top-headlines?country=in&category=${category}&apiKey=${apiKey}`);
    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }

    const result = await response.json();
    return result.articles;
  } catch (error) {
    console.error('Error fetching news:', error.message);
    throw error;
  }
};
