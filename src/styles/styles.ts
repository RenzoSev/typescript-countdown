import styled from 'styled-components';

const DivChangePage = styled.div`
    position: absolute;
    left: 0;
    
    font-size: 1.3rem;
    color: ${(props) => props.theme.colors.primary};
    
    padding: 0.6rem;
`;

export default DivChangePage;
