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

export const httpPost = async (
  endpoint: string,
  payload?: Record<string, unknown>
) => {
  try {
    console.log('payload: ', payload);
    fetch(endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    console.log('hello');
    // console.log('🚀  resp:', resp);
  } catch (error) {
    console.error(error);
    console.log('err: ', error);
  }
};
