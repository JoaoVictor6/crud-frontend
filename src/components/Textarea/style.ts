import styled from 'styled-components';
import colorBrand from 'src/color';
export const Container = styled.section`
`;

export const TextAreaDiv = styled.div`
  width: 405.008px;
  height: 254px;
  & > textarea {
    border: none;
    outline: none;
    
    border-radius: 8px;
    border: 1px solid ${colorBrand.GreySaturated};
    
    padding: .5rem .25rem;

    resize: none;
    width: 100%;
    height: 100%;
  }
`;

export const TextAreaHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  label {
    font-size: 1.333rem;
    font-family: 'Poppins', sans-serif;
  }

  span {
    color: ${colorBrand.Grey};
    font-size: 1rem;
  }
`;
