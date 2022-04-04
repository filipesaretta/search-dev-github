import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 500px;
  margin: 2rem 1rem;

  @media (min-width: 500px) {
    margin: 2rem auto;
  }

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

export const CardContainer = styled.div`
  color: ${(props) => props.theme.text};
  max-width: 500px;
  margin: 2rem 1rem;
  @media (min-width: 500px) {
    margin: 2rem auto;
  }

  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 2rem;
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.secondary};

  --shadow-color: 223deg 27% 62%;
  box-shadow: ${(props) => props.theme.shadow};
`;

export const CardUserImage = styled.div`
  img {
    border-radius: 100%;
  }
`;

export const Card = styled.div`
  grid-column: 1 / -1;
`;

export const CardMain = styled.div`
  display: grid;
  align-content: start;

  a {
    color: ${(props) => props.theme.highlight};
    text-decoration: none;
  }
`;

export const CardLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
  margin-left: 1rem;
  .main-link {
    grid-column: 1;
    grid-row: 2;
  }

  .location {
    grid-column: 1;
    grid-row: 1;
  }

  p,
  a {
    display: flex;
    align-items: center;
    span {
      margin-right: 0.3rem;
    }
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.text};
  }
`;

export const CardDetails = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${(props) => props.theme.primary};

  border-radius: 0.5rem;
  padding: 0.5rem;
  margin-top: 1rem;
  grid-column: 1 / -1;

  div {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    p.card-numbers {
      font-weight: 900;
    }
    p {
      font-weight: 300;
    }
  }
`;
