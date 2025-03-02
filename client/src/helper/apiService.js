// apiService.js
// export const BASE_URL = 'http://localhost/my-profile/server'; 
export const BASE_URL = 'http://ngogiaquyen.id.vn/server'; 
// const BASE_URL = process.env.REACT_APP_BASE_API_URL;
console.log(BASE_URL)

export const getData = async (endpoint, params = {}) => {
  // Tạo query string nếu có params
  const queryString = new URLSearchParams(params).toString();
  const url = `${BASE_URL}${endpoint}${queryString ? '?' + queryString : ''}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
export const postData = async (endpoint, payload) => {
  const url = `${BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'include',
      body: payload,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
