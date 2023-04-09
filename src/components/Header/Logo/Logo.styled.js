import styled from '@emotion/styled';
import { device } from "utils/mediaQueries";

export const Link = styled.a`
    font-weight: 700;
    text-transform: uppercase;
    ${device.mobile} {
        width: 20px;
    font-size: 10px;
    text-align: center;
  }

`;