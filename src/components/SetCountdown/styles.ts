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
    letter-spacing: 1.5px;
    div {
      display: flex;
      flex-flow: column nowrap;

      button {
        background: transparent;
        border: 0;
        outline: none;

        font-size: 1.25rem;

        opacity: 48%;

        color: ${(props) => props.theme.colors.secundary};

        &:hover {
          opacity: 35% !important;
        }

        &:active {
          transform: scale(0.93);
          opacity: 20% !important;
        }

        &:disabled {
          opacity: 15%;
        }
      }
    }
  }

  @media(min-width: 768px) {
    div {
      div {
        button {
          font-size: 1.4rem;
        }
      }
    }
  }
`;

export default Section;
