import styled from 'styled-components';

const DivPresets = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;

    width: 50%;

    & > button {
        flex-basis: 40%;

        font-size: 0.9rem;

        border: 1px solid ${(props) => props.theme.colors.primary};
        border-radius: 8px;

        margin: 0.4rem;
        padding: 0.6rem;
    }
`;

export default DivPresets;
