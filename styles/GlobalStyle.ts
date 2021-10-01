import { createGlobalStyle } from 'styled-components';
import colorBrand from 'src/color';
const { PrimarySaturated, Primary, PrimaryBrightness } = colorBrand;

export default createGlobalStyle`
  :root {
    font-size: 14px;
  }

  body {
    background: #f2f2f2;
  }

  * {
    font-family: 'Lato', sans-serif;
    color: #04071A;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1 {
    font-family: 'Poppins', sans-serif;
    
    &.title-section {
      font-size: 3.157rem;
    }

    &.title-menu {
      font-size: 2.369rem;
    }

    &.title-cards {
      font-size: 1.777rem;
    }
  }

  h2 {
    font-family: 'Poppins', sans-serif;

    &.subtitle-cards{
      font-size: 1333rem;
    }
  }
  p{
    font-size: 1rem;  
  }
  span {
    font-size: 0.875rem;
  }

  a {
    color: ${PrimarySaturated};
    font-size: 1rem;
    text-decoration: none;

    &:hover {
      color: ${Primary};
    }

    &:active {
      color: ${PrimaryBrightness};
    }
  }
`;