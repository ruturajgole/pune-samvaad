import React, { Suspense, useEffect, useMemo, useState } from 'react';
import {
  About,
  Contact,
  GalleryView,
  Homepage,
  Suggestions
} from "view/pages";

import {
  Footer, 
  Header,
  Loader,
  Modal,
  ModalProps,
  Error,
  animate,
} from "view/lib";
import { getData } from './services/api';
import { Gallery, Page, Pages } from './services/models';
import { Div } from 'view/lib/components';

const App: React.FC = () => {
  const [data, setData] = useState<Record<string, any>>({});
  const [currentPage, setPage] = useState<Page>({page: Pages.Homepage});
  const [modalProps, setModalProps] = useState<ModalProps | null>(null);

  useEffect(() => {
    getData()
    .then((data) => setData(data))
    .catch((error) => {
      setPage(page => ({page: Pages.Error}));
      setData(data => ({error}));
    });
  }, []);

  const { page, subPage } = currentPage;
  
  const pages = useMemo(() =>
    <Div style={styles.page}>
      <Suspense fallback={<Loader />}>
      {data && 
      ((page === Pages.Homepage &&
        animate(<Homepage data={data} setModalProps={setModalProps} />)) ||
      (page === Pages.About &&
        animate(<About text={data.AboutUs}/>)) ||
      (page === Pages.Gallery &&
        animate(<GalleryView
          setSubPage={setPage}
          page={(subPage as Gallery)} />)) || 
      (page === Pages.Suggestions &&
        animate(<Suggestions text={data.Suggestions}/>)) || 
      (page === Pages.Contact &&
        animate(<Contact />)) ||
      (page === Pages.Error &&
        animate(<Error error={data.error}/>)))}
    </Suspense>
  </Div>, [data, currentPage]
  );

  return (
    <Div style={styles.container}>
      <Header currentPage={currentPage} setPage={setPage}/>
      {pages}
      <Footer />
      {modalProps && 
        <Modal 
          onClose={modalProps.onClose}
          title={modalProps.title} 
          children={modalProps.children} />}
    </Div>
  );
};

const styles = {
  container: {
    flex: 1
  },
  page: {
    height: ["75vh", "75vh", "70vh"],
    overflowY: "auto",
    overflowX: "hidden"
  }
} as const;
 
export default App;
