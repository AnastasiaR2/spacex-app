import styled from 'styled-components';

type Props = {
  color?: string;
  selected: boolean;
};

const Dot = styled.div.attrs<Props>(({ color = '--dark-gray' }) => ({
  color: `var(${color})`,
}))`
  position: relative;
  width: 24px;
  height: 24px;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid ${({ color }) => `${color}`};
  border-radius: 50%;

  &::after {
    position: absolute;
    top: 5px;
    left: 5px;
    display: ${({ selected }) => (selected ? 'block' : 'none')};
    width: 12px;
    height: 12px;
    content: '';
    background-color: ${({ color }) => `${color}`};
    border-radius: 50%;
  }
`;

export { Dot };
