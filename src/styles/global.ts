import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #f6f6f6;
    }

    button {
        cursor: pointer;

        transition: all 0.3s;
    }
`;
