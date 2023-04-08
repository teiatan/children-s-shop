import styled from '@emotion/styled';
import { device } from "utils/mediaQueries";

export const HeaderTag = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  //background-color: ${props => (props.theme.header.backgroundColor)};
  z-index: 10;
  //background: linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red);
  background: #C6FFDD;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #f7797d, #FBD786, #C6FFDD);  /* Chrome 10-25, Safari 5.1-6 */
  background: ${props => (props.theme.header.background)}; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  ${device.mobile} {
    position: static;
  }

`;

export const CoverDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 50px;
  color: ${props => (props.theme.header.textColor)};

  ${device.mobile} {
    flex-direction: column;
  }

`;
