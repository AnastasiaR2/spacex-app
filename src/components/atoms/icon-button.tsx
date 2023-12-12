import styled from 'styled-components';

import { Button } from '~/components/atoms/atoms.ts';

const IconButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 53px;
  height: 53px;
  background-color: var(--light-gray);
`;

export { IconButton };
