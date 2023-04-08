
import { goods } from "data/goods";
import { Header } from "./Header/Header";
import { GalleryProducts } from "./GalleryProducts/GalleryProducts";
import { Main } from "./Main/Main";
import { Footer } from "./Footer/Footer";
import { PageContainer } from "./pageContainer/pageContainer";
import { Theme } from "providers/themeContextProvider";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";

export const App = () => {

const [search, setSearch] = useState('');
const theme = Theme();

const handleSearchSubmit = (inputValue) => {
  setSearch(inputValue.toLowerCase());
};

  return (<>
  <ThemeProvider theme={theme}>
    <Header handleSearchSubmit={handleSearchSubmit}/>

    <Main>
      <PageContainer>
        <GalleryProducts allGoods={goods} search={search}/>
      </PageContainer>
    </Main>
  
    <Footer />
  </ThemeProvider>
    
  </>);
};
