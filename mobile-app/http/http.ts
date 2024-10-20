const url = 'https://iqdb-be.vercel.app';

export const endpoints = {
  sources: url + '/sources',
  questions: url + '/questions',
  difficulties: url + '/difficulties',
};

export const httpGet = async (endpoint: string, query?: string) => {
  try {
    const response = await fetch(query ? `${endpoint}?${query}` : endpoint);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};