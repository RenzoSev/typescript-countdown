import styled from 'styled-components';

const Section = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;

    height: 100vh;
    
    color: ${(props) => props.theme.colors.primary};
    font-size: 3rem;
    font-family: 'Montserrat', sans-serif;

    & > button {
        border: 1px solid ${(props) => props.theme.colors.primary};
        border-radius: 8px;

        font-size: 1.2rem;

        padding: 0.8rem;
    }

    span {
        font-weight: 600;
        font-size: 6rem;
    }
`;

export default Section;
