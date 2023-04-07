import styled from '@emotion/styled';
import { device } from "utils/mediaQueries";

export const Tag = styled.div`
border-radius: 80%;
//border-color: ${props => (props.theme.header.formBorder)};
border-color: blue;
border-width: 10px;
  ${device.mobile} {
    position: static;
  }

`;
  
export const Form = styled.form`
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 20px;
    overflow: hidden;
`;
  
export const Button = styled.button`
    display: inline-block;
    border: 0;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    &:hover {
        opacity: 1;
    }

`;
  
export const Label = styled.label`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
`;
  
export const Input = styled.input`
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;

    &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
