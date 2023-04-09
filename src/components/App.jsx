import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/layout";

export const App = () => {

  return (<>
  {/* <ThemeProvider theme={theme}>
    <Header handleSearchSubmit={handleSearchSubmit}/>

    <Main>
      <PageContainer>
        <GalleryProducts shownGoods={shownGoods}/>
        <Pagination
          perPage={perPage}
          array={filteredGoods}
          giveCuttedArray={giveCuttedArray}
        />
      </PageContainer>
    </Main>
  
    <Footer />
  </ThemeProvider> */}
  <Routes>
    <Route path="/" element={<Layout />}>
        
    </Route>
  </Routes>
    
  </>);
};
