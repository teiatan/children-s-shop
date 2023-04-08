import PropTypes from 'prop-types';
import { ProductCard } from 'components/ProductCard/ProductCard';
import { GalleryStyle } from './GalleryProducts.styled';
//import { goods } from 'data/goods';

export function GalleryProducts({ allGoods, search }) {
  console.log(allGoods[0].name);
  
  const shownGoods = allGoods.filter(goodsItem => goodsItem.name.toLowerCase().includes(search));
  console.log(shownGoods);
  return (
    <GalleryStyle>
          {shownGoods.map((data) => (
          <ProductCard data={data} key={data.id} />
      ))}
    </GalleryStyle>
  );
}

GalleryProducts.propTypes = {
  allGoods: PropTypes.array.isRequired,
};