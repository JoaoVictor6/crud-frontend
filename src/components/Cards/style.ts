import colorBrand from 'src/color';
import styled from 'styled-components';
import hexToRgb from 'src/utils/hexToRgb';
const { White, Black } = colorBrand

export const Container = styled.div`
  background: ${White};
  border-radius: 12px;
  box-shadow: 0px 1px 10px rgba(${hexToRgb(Black)}, .27);

  display: inline-block;
  padding: 40px;
`;
