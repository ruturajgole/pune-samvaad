export const getData = async () => {
  try {
    const response = await fetch(
      `http://localhost:3001/data`,
      {headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      })}
    );

    return await response.json();
  } catch (e) {
    throw e;
  }
}