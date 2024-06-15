export const getData = async () => {
  try {
    const response = await fetch(
      "https://6f76-2405-201-1007-9df-34b7-9443-7e47-d3e7.ngrok-free.app/data",
      {headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      })}
    );
    
    return await response.json();
  } catch (e) {
    console.log(e);
  }
}