import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  place-content: center;
  min-height: 100vh;
`;

export const ButtonAndAnchorSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > a {
    text-align: center;
  }
`;

export const FormTitle = styled.h1`
  text-align: center;
  margin-top: calc(48px - 32px);
`;

export const InputDiv = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 24px;
  margin-bottom: 24px;
  & > div {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export const ProfilePicture = styled.div`
  height: 251px;
  width: 251px;
  border-radius: 100%;
  background-color: grey;
`;

export const ProfilePictureSection = styled.section`
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;