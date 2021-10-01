import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  place-content: center;
  min-height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
`;

export const FormTitle = styled.h1`
  text-align: center;
`;

export const ButtonAndAnchorSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > a {
    text-align: center;
  }
`;