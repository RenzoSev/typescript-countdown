import styled from 'styled-components';

const DivChangePage = styled.div`
    position: absolute;
    left: 0;
    
    font-size: 1.3rem;
    color: ${(props) => props.theme.colors.primary};
    
    padding: 0.6rem;

    transition: all 0.3s;

    &:hover {
        color: ${((props) => props.theme.colors.secundary)};
    }
`;

export default DivChangePage;
