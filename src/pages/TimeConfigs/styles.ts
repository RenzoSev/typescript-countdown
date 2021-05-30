import styled from 'styled-components';

export const Section = styled.section`
    width: 100%;
    height: 100vh;

    & > div {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    }
`;

export const DivPresets = styled.div`
    display: flex;
`;
