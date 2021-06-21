/* eslint-disable no-confusing-arrow */

import styled from 'styled-components';

interface DivInframeProps {
    isActivePlayer: boolean;
}

export const Section = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 3.8rem;

  height: 100vh;
  padding-top: 5.5rem;

  color: ${(props) => props.theme.colors.primary};
  font-size: 3rem;
  font-family: 'Montserrat', sans-serif;

  & > button {
    border: none;
    border-radius: 5px;
    box-shadow: var(--shadow);

    font-size: 1.4rem;

    width: 45%;
    padding: 1rem;
  }

  span {
    font-weight: 600;
    font-size: 7rem;
    line-height: 7.5rem;

    transition: all 0.3s;
  }

  @media (min-width: 768px) {
    & {
      gap: 2.5rem;

      span {
        font-size: 10rem;
        line-height: 7.8rem;
      }

      & > main {
        margin-bottom: 2rem;
      }
    }

    & > button {
      width: 25%;
      font-size: 1.2rem;
      padding: 0.8rem;
    }
  }

  @media (min-width: 1400px) {
    & {
      span {
        line-height: 8.5rem;
      }
    }
  }

  @media (min-width: 1800px) {
    & {
      span {
        line-height: 12rem;
        font-size: 14rem;
      }
    }

    & > button {
      width: 25%;
      font-size: 1.4rem;
      padding: 1rem;
    }
  }
`;

export const DivLottie = styled.div`
    position: absolute;
    margin: 0 auto;
    top: -2rem;
    left: 0;
    right: 0;
    z-index: 0;

    @media(min-width: 768px) {
        & {
            top: -4.5rem;
        }
    }

    @media(min-width: 1400px) {
        & {
            top: -5.6rem;
        }
    }
    
    @media (max-height: 660px) {
        & {
            top: -4rem;
        }
    }
`;

export const DivIframe = styled.div<DivInframeProps>`
    display: flex;
    flex-direction: column;
    
    position: absolute;
    bottom: 7px;
    z-index: 0;

    font-size: 1.8rem;

    & > button {  
        background: transparent;
        border: none;

        cursor: pointer;
        transition: all 0.3s;

        font-size: 2rem;
        color: ${((props) => props.isActivePlayer ? '#FF0000' : props.theme.colors.primary)} !important;

        &:hover {
            background: transparent;
            color: ${((props) => props.theme.colors.secundary)};
        }

        &:disabled {
            opacity: 40%;

            &:hover {
                background: transparent;
                color: inherit;
            }
        }
    }
`;
