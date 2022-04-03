import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 500px;
  margin: 2rem auto;
  color: ${(props) => props.theme.text};
  h1 {
    font-size: 1rem;

    font-weight: 700;
  }
`;

export const Button = styled.button`
  color: ${(props) => props.theme.text};
  display: flex;
  background-color: transparent;
  border: none;
  text-transform: uppercase;
  font-weight: 300;

  img {
    padding-left: 1rem;
  }
`;
