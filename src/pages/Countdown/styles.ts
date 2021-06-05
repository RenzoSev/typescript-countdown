import styled from 'styled-components';

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

        font-size: 1.5rem;

        width: 45%;
        padding: 1rem;
    }

    span {
        font-weight: 600;
        font-size: 7rem;

        transition: all 0.3s;
    }
`;

export const DivLottie = styled.div`
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    z-index: 0;
`;

export const DivSpotify = styled.div`
    position: absolute;
    bottom: 7px;
    z-index: 0;

    font-size: 1.5rem;
`;
