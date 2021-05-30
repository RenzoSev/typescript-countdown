import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme.colors.background};
    }

    button {
        cursor: pointer;

        transition: all 0.3s;
    }

    a {
        color: inherit;
        
        text-decoration: none;
    }
`;
