import styled from 'styled-components';
import colorBrand from 'src/color';
const { Primary, PrimarySaturated, PrimaryBrightness } = colorBrand
export const Container = styled.button`
  border: none;
  background: ${Primary};
  border-radius: 8px;

  font-size: 1.333rem;
  color: #fff;

  width: 276px;
  padding: 16px;
  cursor: pointer;

  box-shadow: 0 4px 4px 0 rgba(0,0,0, 0.41);
  transition: all .2s;
  &:hover {
    box-shadow: 0 4px 4px 0 rgba(0,0,0, 0.51);
    background: ${PrimaryBrightness};
  }
  &:active {
    box-shadow: 0 1px 4px 0 rgba(0,0,0, 0.51);;
  }

  .full-width {
    width: 100%;
  }
`;
