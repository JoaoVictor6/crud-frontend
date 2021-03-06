import styled from 'styled-components';
import colorBrand from 'src/color';
const { Primary, PrimarySaturated } = colorBrand;

export const Container = styled.label`
  display: inline-flex;
  font-size: 1rem;
  padding: .5rem .5rem .5rem .25rem;
  border-radius: 4px;
  gap: 8;
  align-items: center;
  cursor: pointer;

  color: ${Primary};
  border: 2px solid ${Primary};
  &, svg {transition: all .2s;}
  
  & > svg {
    fill: ${Primary};
    height: 1.25rem;
    width: 1.25rem;
  }

  &:hover {
    & > svg {
      fill: ${PrimarySaturated};
    }
    color: ${PrimarySaturated};
    border-color: ${PrimarySaturated};
  }

  input {
    display: none;
  }
`;
