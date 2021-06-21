import styled from 'styled-components';

const ButtonChangePage = styled.button`
  background: transparent;
  border: none;

  position: absolute;
  left: 0;
  z-index: 1;

  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.primary};

  padding: 0.8rem;

  transition: all 0.3s;

  &:hover {
    background: inherit;
    color: ${(props) => props.theme.colors.secundary};
  }

  &:disabled {
    opacity: 40%;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  @media (min-width: 768px) {
    & {
      font-size: 1.7rem;
    }
  }

  @media (min-width: 1800px) {
    & {
      font-size: 2rem;
      padding: 1rem;
    }
  }

  @media (max-height: 660px) {
    & {
      font-size: 1.9rem;
    }
  }
`;

export default ButtonChangePage;
