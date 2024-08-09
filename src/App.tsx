import React, { Suspense, useEffect, useMemo, useState } from 'react';
import {
  About,
  EventsView,
  GalleryView,
  Homepage,
  Suggestions
} from "view/pages";

import {
  Header,
  Loader,
  Modal,
  ModalProps,
  Error,
  animate,
} from "view/lib";
import { getData } from './services/api';
import { Events, Gallery, Page, Pages } from './services/models';


const App: React.FC = () => {
  const [data, setData] = useState<Record<string, any>>({});
  const [currentPage, setPage] = useState<Page>({page: Pages.Homepage});
  const [modalProps, setModalProps] = useState<ModalProps | null>(null);

  useEffect(() => {
    getData()
    .then((data) => setData(data))
    .catch((error) => {
      console.log(error, "ERROR");
      setPage(page => ({page: Pages.Error}));
      setData(data => ({error}));
    });
  }, []);

  const { page, subPage } = currentPage;
  
  const pages = useMemo(() =>
    <div className={"App"}>
      <Suspense fallback={<Loader />}>
      {data && 
      ((page === Pages.Homepage &&
        animate(<Homepage data={data} setModalProps={setModalProps} />)) ||
      (page === Pages.Events &&
        animate(<EventsView
            events={data.Events}
            page={(subPage as Events)}/>)) ||
      (page === Pages.About &&
        animate(<About text={data.AboutUs}/>)) ||
      (page === Pages.Gallery &&
        animate(<GalleryView
          setSubPage={setPage}
          page={(subPage as Gallery)} />)) || 
      (page === Pages.Suggestions &&
        animate(<Suggestions text={data.Suggestions}/>)) ||
      (page === Pages.Error &&
        animate(<Error error={data.error}/>)))}
    </Suspense>
  </div>, [data, currentPage]
  );

  return (
    <div>
      <Header currentPage={currentPage} setPage={setPage}/>
      {pages}
      {modalProps && 
        <Modal 
          onClose={modalProps.onClose}
          title={modalProps.title} 
          children={modalProps.children} />}
    </div>
  );
};

const styles = {

} as const;
 
export default App;
