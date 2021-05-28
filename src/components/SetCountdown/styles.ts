import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  gap: 0.45rem;

  p {
      opacity: 80%;
      align-self: center;
  }

  div {
    display: flex;
    div {
      display: flex;
      flex-flow: column nowrap;

      button {
        background: transparent;
        border: none;
        outline: none;

        font-size: 1.2rem;

        opacity: 48%;

        &:hover {
          opacity: 35% !important;
        }

        &:active {
          transform: scale(0.93);
          opacity: 20% !important;
        }
      }
    }
  }
`;

export default Section;
