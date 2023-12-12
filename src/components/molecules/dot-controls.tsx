import { Dot, FlexWrapper } from '~/components/atoms/atoms.ts';

const DotControls: React.FC = () => (
  <FlexWrapper gap="8">
    <Dot selected={true} color="--white" />
    <Dot selected={false} color="--white" />
    <Dot selected={false} color="--white" />
  </FlexWrapper>
);

export { DotControls };
