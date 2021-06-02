import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            primary: string;
            secundary: string;
            primaryTransparent: string,

            background: string;
            backgroundConfigs: string;
            text: string;
        },
    }
}
