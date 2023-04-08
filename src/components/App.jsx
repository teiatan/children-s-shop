
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
const perPage = 6;

const [filteredGoods, setFilteredGoods] = useState(goods);
const [shownGoods, setShownGoods] = useState(filteredGoods.slice(0, perPage));

const handleSearchSubmit = (inputValue) => {
  const search = inputValue.toLowerCase();
  const filteredGoodsArray = goods.filter(goodsItem => goodsItem.name.toLowerCase().includes(search));
  setFilteredGoods(filteredGoodsArray);
  setShownGoods(filteredGoodsArray.slice(0, perPage));
};

const giveCuttedArray = (array) => {
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
          giveCuttedArray={giveCuttedArray}
        />
      </PageContainer>
    </Main>
  
    <Footer />
  </ThemeProvider>
    
  </>);
};
