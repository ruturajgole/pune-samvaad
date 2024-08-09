export const getData = async () => {
  try {
    const host = getApiUrl();

    const response = await fetch(
      `${host}/data`,
      {headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
        "Access-Control-Allow-Origin": "*"
      })}
    );

    return await response.json();
  } catch (e) {
    throw e;  
  }
}

export const getMedia = async () => {
  try {
    const host = getApiUrl();

    const response = await fetch(
      `${host}/photos`,
      {headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
        "Access-Control-Allow-Origin": "*"
      })}
    );

    return await response.json();

  } catch (error) {
    throw error
  }
}

const getApiUrl = () => {
  if (process.env.REACT_APP_ENV === 'production') {
    return process.env.REACT_APP_API_URL_PRODUCTION;
  } else if (process.env.REACT_APP_ENV === 'network') {
    return window.location.hostname === "localhost"
    ? process.env.REACT_APP_API_URL_LOCAL
    : process.env.REACT_APP_API_URL_NETWORK;
  }
};