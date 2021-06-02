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
      gap: 1.3rem;

      border: 1px solid ${(props) => props.theme.colors.primaryTransparent};  
      border-radius: 5px;

      padding: 1.5rem;
      height: 100%;

      background: ${(props) => props.theme.colors.backgroundConfigs};

      transition: all 0.3s;
    }

    button {
        border-radius: 5px;

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
  
  padding: 0.6rem;

  transition: all 0.3s;
  
  input {
    background: transparent;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.text};
    outline: none;
    
    width: 100%;
    font-size: 1.2rem;

    padding: 0.4rem;

    transition: all 0.3s;

    &:focus {
      border-bottom: 1px solid ${(props) => props.theme.colors.primary};
    }
  }
`;
