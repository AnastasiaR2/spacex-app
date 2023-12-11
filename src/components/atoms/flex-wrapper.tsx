import styled from 'styled-components';

type Props = {
  gap?: string;
};

const FlexWrapper = styled.div.attrs<Props>(({ gap }) => ({
  gap: gap + 'px',
}))`
  gap: ${({ gap }) => gap};
  display: flex;
`;

export { FlexWrapper };
