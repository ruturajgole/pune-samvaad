import React, { useEffect, useState } from 'react';
import {
  About,
  Events,
  Gallery,
  Homepage,
  Suggestions
} from "./pages";

import {
  Header,
  Modal,
  ModalProps,
  UnderConstruction,
} from "./components";
import { getData } from './services/api';
import { Page } from './services/models';


const App: React.FC = () => {
  const [data, setData] = useState<Record<string, any>>({});
  const [page, setPage] = useState<Page>(Page.Homepage);
  const [modalProps, setModalProps] = useState<ModalProps | null>(null);

  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

  return (
    <div>
      <Header setPage={setPage}/>
      <div style={styles.page}>
        {page === Page.Homepage &&
          (!!data && <Homepage setModalProps={setModalProps} events={data.Events} testimonials={data.Testimonials} />)}
        {page === Page.Events &&
          <Events events={data.Events}/>}
        {page === Page.About &&
          <About text={data.AboutUs}/>}
        {page === Page.Gallery &&
          <Gallery />}
        {page === Page.Suggestions &&
          <Suggestions text={data.Suggestions}/>}
        {page === Page.UnderConstruction &&
          <UnderConstruction />}  
      </div>
      {modalProps && 
        <Modal 
          onClose={modalProps.onClose}
          title={modalProps.title} 
          children={modalProps.children} />}
    </div>
  );
};

const styles = {
  page: {
    display: "flex",
    flexDirection: "column",
    height: "75vh"
  }
} as Record<string, React.CSSProperties>;

export default App;
