import { create } from "apisauce";

const api = create({
  baseURL: 'https://newsapi.org/v2',
});

const apiKey = '?country=in&apiKey=3cdb509afdb2460391031d768d55bdb5';

const getTopicHeadline = async () => {
  try {
    const response = await api.get('/top-headlines' + apiKey);
    return response.data;
  } catch (error) {
    console.error('Error fetching headlines:', error);
    throw error;
  }
};

const getByCategory = async (category) => {
  try {
    const response = await api.get('/everything?q=' + category + '&apiKey=3cdb509afdb2460391031d768d55bdb5');
    return response.data;
  } catch (error) {
    console.error('Error fetching category:', error);
    throw error;
  }
};

export default {
  getTopicHeadline,
  getByCategory,
};
