import styled from 'styled-components';
import colorBrand from 'src/color';
const { Black, Grey, GreySaturated, ErrorColor } = colorBrand;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 405px;
  & > * {font-size: 1.333rem;}
  
  & > label {
    margin-bottom: 8px;
    color: ${Black};
  }
  & > input {
    border: none;
    outline: none;

    border-radius: 8px;
    border: 1px solid ${GreySaturated};
    
    padding: 16px 8px;

    &::placeholder {
      color: ${Grey}
    }
  }

  & > span {
    font-size: 16px;
    color: ${ErrorColor};
  }
`;
