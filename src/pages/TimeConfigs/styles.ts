import styled from 'styled-components';

const Section = styled.section`
    width: 100%;
    height: 100vh;

    div {
        div {
            div {
                display: flex;
                gap: 0.5rem;

                div {
                    display: flex;
                    flex-flow: column nowrap;
                }
            }
        }
    }
`;

export default Section;
