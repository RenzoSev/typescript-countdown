import styled from 'styled-components';

const DivSwitch = styled.div`
    position: absolute;
    right: 0;
    z-index: 1;

    padding: 0.8rem;

    & {
        padding: 1rem;
    }

    @media(min-width: 1800px) {
        & {
            padding: 1.3rem;
        }
    }
`;

export default DivSwitch;
