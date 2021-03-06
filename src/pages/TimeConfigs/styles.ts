import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 100vh;

  p {
      color: ${(props) => props.theme.colors.text};
      font-size: 1.1rem;

      transition: all 0.3s;
  }

  select {
      border: 1px solid #0000001f;
      border-radius: 2px;
      background: ${(props) => props.theme.colors.background};
      outline: none;

      color: ${(props) => props.theme.colors.text};
      font-size: 1.5rem;
      
      padding: 0.5rem;

      cursor: pointer;

      transition: all 0.3s;
  }

  & > main {
    padding: 3.5rem 2rem;
    height: 100%;

    & > div {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
      gap: 1.3rem;

      border: 1px solid ${(props) => props.theme.colors.primaryTransparent};
      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 3%);
      border-radius: 5px;

      padding: 1.5rem;
      height: 100%;

      background: ${(props) => props.theme.colors.backgroundConfigs};

      transition: all 0.3s;
    }

    button {
        border-radius: 5px;
        box-shadow: var(--shadow);

        font-size: 1.1rem;
        padding: 0.6rem 3.9rem;
        margin: 1.5rem 0;

    }
  }
`;

export const DivPresets = styled.div`
  display: flex;
  gap: 1rem;

  span {
      font-size: 1.3rem;
      align-self: center;
  }
`;

export const DivInputs = styled.div`
  background: ${(props) => props.theme.colors.background};
  border-radius: 5px;
  width: 70%;
  max-width: 400px;
  
  padding: 0.6rem;

  transition: all 0.3s;
  
  input {
    background: transparent;
    border: none;
    outline: none;
    
    width: 100%;
    
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.text};

    padding: 0.4rem;

    transition: all 0.3s;

    &:focus {
      border-bottom: 1px solid ${(props) => props.theme.colors.primary} !important;
    }

    &::placeholder {
      opacity: 45%;
    }
  }

  @media(min-width: 768px) {
        & {
          width: 40%;
        }
        
        & input {
            width: 100%;
        }
    }
`;
