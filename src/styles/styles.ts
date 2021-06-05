import styled from 'styled-components';

const DivChangePage = styled.div`
    position: absolute;
    left: 0;
    z-index: 1;
    
    font-size: 1.3rem;
    color: ${(props) => props.theme.colors.primary};
    
    padding: 0.8rem;

    transition: all 0.3s;

    &:hover {
        color: ${((props) => props.theme.colors.secundary)};
    }

    @media(min-width: 768px) {
        & {
            font-size: 1.7rem;
        }
    }
    
    @media(max-height: 660px) {
        & {
            font-size: 1.9rem;
        }
    }
`;

export default DivChangePage;
