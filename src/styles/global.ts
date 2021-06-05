import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    color: ${(props) => props.theme.colors.text};
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    :root {
        --shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 18%);
    }

    body {
        background: ${(props) => props.theme.colors.background};
    }

    button {
        background: ${(props) => props.theme.colors.primary};
        border:  none;

        color: ${(props) => props.theme.colors.text};
        
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
            background: ${(props) => props.theme.colors.secundary};
        }
    }

    a {
        color: inherit;
        
        text-decoration: none;
    }

    @media(min-width: 768px) {
        html {
            font-size: 18px;
        }
    }
`;
