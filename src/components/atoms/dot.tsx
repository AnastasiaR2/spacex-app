import styled from 'styled-components';

type Props = {
  color?: string;
  selected: boolean;
};

const Dot = styled.div.attrs<Props>(({ color = '--dark-gray' }) => ({
  color: `var(${color})`,
}))`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid ${({ color }) => `${color}`};
  position: relative;
  cursor: pointer;

  &::after {
    display: ${({ selected }) => (selected ? 'block' : 'none')};
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    top: 5px;
    left: 5px;
    border-radius: 50%;
    background-color: ${({ color }) => `${color}`};
  }
`;

export { Dot };
