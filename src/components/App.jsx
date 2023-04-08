
import { goods } from "data/goods";
import { Header } from "./Header/Header";
import { GalleryProducts } from "./GalleryProducts/GalleryProducts";
import { Main } from "./Main/Main";
import { Footer } from "./Footer/Footer";
import { PageContainer } from "./pageContainer/pageContainer";
import { Theme } from "providers/themeContextProvider";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import { Pagination } from "./pagination/Pagination";

export const App = () => {

const theme = Theme();
const perPage = 5;

const [search, setSearch] = useState('');
const filteredGoods = goods.filter(goodsItem => goodsItem.name.toLowerCase().includes(search));
const [shownGoods, setShownGoods] = useState(goods.slice(0, perPage));

const handleSearchSubmit = (inputValue) => {
  setSearch(inputValue.toLowerCase());
};

const onPageButtonClick = (array) => {
  setShownGoods(array);
};

const onNextButtonClick = (array) => {
  setShownGoods(array);
};

const onPrevButtonClick = (array) => {
  setShownGoods(array);
};

  return (<>
  <ThemeProvider theme={theme}>
    <Header handleSearchSubmit={handleSearchSubmit}/>

    <Main>
      <PageContainer>
        <GalleryProducts shownGoods={shownGoods}/>
        <Pagination
          perPage={perPage}
          array={filteredGoods}
          onPageButtonClick={onPageButtonClick} 
          onNextButtonClick={onNextButtonClick} 
          onPrevButtonClick={onPrevButtonClick} 
        />
      </PageContainer>
    </Main>
  
    <Footer />
  </ThemeProvider>
    
  </>);
};
