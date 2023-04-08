
import { goods } from "data/goods";
import { Header } from "./Header/Header";
import { GalleryProducts } from "./GalleryProducts/GalleryProducts";
import { Main } from "./Main/Main";
import { Footer } from "./Footer/Footer";
import { PageContainer } from "./pageContainer/pageContainer";
import { Theme } from "providers/themeContextProvider";
import { ThemeProvider } from "@emotion/react";

export const App = () => {

const theme = Theme();

const handleSearchSubmit = (inputValue) => {
  console.log(`You are looking for ${inputValue}`);
};

  return (<>
  <ThemeProvider theme={theme}>
    <Header handleSearchSubmit={handleSearchSubmit}/>

    <Main>
      <PageContainer>
        <GalleryProducts goodsItem={goods} />
      </PageContainer>
    </Main>
  
    <Footer />
  </ThemeProvider>
    
  </>);
};
