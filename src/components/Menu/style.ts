import styled from 'styled-components';
import colorBrand from 'src/color';
const { Primary, Secundary } = colorBrand;
export const Container = styled.div`
  background: ${Primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    cursor: pointer;
  }

  .logo > svg {
    fill: #fff;
    margin-left: 48px;
  }

  menu {
    margin: 18px 0;
    margin-right: 48px;
    display: flex;
    gap: 32px;
    a {
      color: #fff;
      font-size: 32px;
      font-family: 'Poppins', sans-serif;
      position: relative;

      &::before{
        content: "";
        position: absolute;
        height: 4px;
        width: 0;
        background: ${Secundary};
        bottom: 0;
        transition: all .45s;
      }

      &:hover::before{
        width: 100%;
      }
    }
  }
`;
