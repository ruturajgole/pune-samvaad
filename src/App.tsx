import React, { useEffect, useState } from 'react';
import Carousel from './components/carousel';

const App: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://17d0-2405-201-1007-143-d842-2ea9-9974-b53f.ngrok-free.app/data");
      const data = await response.json();

      setData(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div style={styles.header}>
        <img src={"logo.jpeg"} style={styles.logo}/>
      </div>
      {data.length && <Carousel events={data} interval={5000} />}
    </div>
  );
};

const styles = {
  header: {
    padding: "0.5% 1%",
    borderBottom: "outset"
  },
  logo: {
    height: "10%",
    width: "10%",
    cursor: "pointer"
  }
};

export default App;
