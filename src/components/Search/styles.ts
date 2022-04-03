import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 0.5rem;
  height: 4rem;
  padding: 0 1rem;
  --shadow-color: 223deg 27% 62%;

  box-shadow: ${(props) => props.theme.shadow};

  input {
    background-color: ${(props) => props.theme.secondary};
    outline: none;
    flex-grow: 2;
    padding-right: 0.5rem;
    height: 100%;
    border: none;
    color: ${(props) => props.theme.text};
    &::placeholder {
      color: ${(props) => props.theme.text};
    }
  }

  button {
    border: 1px solid blue;
    background: ${(props) => props.theme.highlight};
    color: white;
    height: 3rem;
    border-radius: 0.5rem;

    padding: 0 1rem;
  }
  img {
    padding: 0.5rem;
  }
`;

export const Card = styled.div`
  color: ${(props) => props.theme.text};
  max-width: 500px;
  margin: 2rem auto;
`;

export const CardDetails = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${(props) => props.theme.secondary};
  --shadow-color: 223deg 27% 62%;
  box-shadow: ${(props) => props.theme.shadow};
  border-radius: 0.5rem;
  div {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }
`;
