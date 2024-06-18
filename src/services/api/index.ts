export const getData = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_PATH}/data`,
      {headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      })}
    );
    
    return await response.json();
  } catch (e) {
    console.log(e);
  }
}