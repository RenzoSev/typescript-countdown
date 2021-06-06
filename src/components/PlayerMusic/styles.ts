/* eslint-disable no-confusing-arrow */
import styled from 'styled-components';

interface playerProps {
  readonly isActive: boolean;
}

const Section = styled.section<playerProps>`
  display:  ${(props) => props.isActive ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  background: ${(props) => props.theme.colors.backgroundRevert};
  border-radius: 4px;

  padding: 1.5rem;

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
