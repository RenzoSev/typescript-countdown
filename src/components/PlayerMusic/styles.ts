/* eslint-disable no-confusing-arrow */

import styled from 'styled-components';

interface playerProps {
  readonly isActive: boolean;
}

const Section = styled.section<playerProps>`
  display:  ${(props) => props.isActive ? 'block' : 'none'};
`;

export default Section;
