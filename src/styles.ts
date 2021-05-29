import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    height: 100vh;
    
    color: #525252;
    font-size: 3rem;
    font-family: 'Montserrat', sans-serif;

    span {
        font-weight: 600;
        font-size: 5rem;
    }
`;

export const DivConfig = styled.div`
    position: absolute;
    left: 0;
    
    font-size: 1.3rem;
    color: #525252;
    
    padding: 0.6rem;
`;
