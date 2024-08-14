import { Form } from "services/models";

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

export const getPhotos = async (folderName: string) => {
  try {
    const host = getApiUrl();

    const response = await fetch(
      `${host}/media`,
      {
        body: JSON.stringify({
          folderName: folderName.replaceAll("'", "\\'")
        }),
        method: "post",
        headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      })}
    );

    return await response.json();

  } catch (error) {
    throw error
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

export const getPhoto = async (folderName: string) => {
  try {
    const host = getApiUrl();

    const response = await fetch(
      `${host}/photo`,
      {
        body: JSON.stringify({
          folderName: folderName.replaceAll("'", "\\'")
        }),
        method: "post",
        headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      })}
    );

    const data = await response.json();
    
    return data;
  } catch (error) {
    throw error
  }
}

export const getBanner = async (folderName: string) => {
  try {
    const host = getApiUrl();
    const formattedFolderName = folderName.replaceAll("'", "\\'");

    const response = await fetch(
      `${host}/banner`,
      {
        body: JSON.stringify({
          folderName: formattedFolderName
        }),
        method: "post",
        headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      })}
    );
    
    const buffer = await response.arrayBuffer();

    return getImageFromBuffer(buffer);
  } catch (error) {
    throw error
  }
}

export const register = async (form: Form) => {
  try {
    const host = getApiUrl();

    const response = await fetch(
      `${host}/register`,
      {
        body: JSON.stringify({
          form
        }),
        method: "post",
        headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      })}
    );

    return response.status;
  } catch (error) {
    return error;
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

const getImageFromBuffer = (buffer: ArrayBuffer) => {
  const arrayBufferView = new Uint8Array(buffer);
  const blob = new Blob( [ arrayBufferView ], { type: "image/jpeg" } );
  const urlCreator = window.URL || window.webkitURL;
  return urlCreator.createObjectURL( blob );
}