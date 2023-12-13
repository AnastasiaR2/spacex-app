import styled from 'styled-components';

type Props = {
  gap?: string;
};

const FlexWrapper = styled.div.attrs<Props>(({ gap }) => ({
  gap: gap + 'px',
}))`
  display: flex;
  gap: ${({ gap }) => gap};
`;

export { FlexWrapper };
