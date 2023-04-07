//import { device } from '../../utils/mediaQueries';

const { default: styled } = require('@emotion/styled');
export const ProductCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 8px;
  background-color: cadetblue;
  height: 340px;
  margin: 4px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  width: calc((100% - 192px) / 4);

  &:hover {
    transform: translate(0, -5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    background-color: #fff593;
  }
  @media (max-width: 1200px) {
    width: calc((100% - 96px) / 2);
  }
  @media (max-width: 992px) {
    width: calc((100% - 96px) / 2);
  }
  @media (max-width: 768px) {
    width: 480px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  object-fit: contain;
`;
export const ImageThumb = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 80%;
  overflow: hidden;
  border-radius: 10px;
`;
export const ButtonThumb = styled.div`
  position: absolute;
  top: 1px;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > button {
    height: 30px;
  }
  &:hover {
    opacity: 1;
  }
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 24%;
  width: 100%;
`;
