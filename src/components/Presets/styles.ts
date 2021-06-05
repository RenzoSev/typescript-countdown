import styled from 'styled-components';

const DivPresets = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;

    width: 50%;

    & > button {
        flex-basis: 40%;

        font-size: 1.2rem;

        border: none;
        border-radius: 5px;
        box-shadow: var(--shadow);

        margin: 0.4rem;
        padding: 0.8rem;

        &:disabled {
            opacity: 40%;
        }

        transition: all 0.5s;
    }
`;

export default DivPresets;
