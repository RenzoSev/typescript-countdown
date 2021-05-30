import styled from 'styled-components';

const Section = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    height: 100vh;
    
    color: ${(props) => props.theme.colors.primary};
    font-size: 3rem;
    font-family: 'Montserrat', sans-serif;

    span {
        font-weight: 600;
        font-size: 5rem;
    }
`;

export default Section;
