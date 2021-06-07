/* eslint-disable no-confusing-arrow */
import styled from 'styled-components';

interface playerProps {
  readonly isActive: boolean;
  readonly isDesktop: boolean;
}

const Section = styled.section<playerProps>`
  display:  ${(props) => props.isActive ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  background: ${(props) => props.theme.colors.backgroundRevert};
  border-radius: 4px;

  padding: 1.5rem;

  label {
    display: ${(props) => props.isDesktop ? 'flex' : 'none'};
    
    gap: 0.2rem;
    align-items: center;
    
    font-size: 1rem;

    input {
      border-radius: 4px;
      height: 0.8rem;
    }
  }

  input {
    background: ${(props) => props.theme.colors.primary};
    border: 1px solid ${(props) => props.theme.colors.background};
    border-radius: 4px;
    outline: none;

    padding: 0.8rem;
  }

  button {
    width: 50%;

    border-radius: 6px;

    padding: 0.6rem;
  }
`;

export default Section;
