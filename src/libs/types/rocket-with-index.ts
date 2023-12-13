import { type Rocket } from '~/libs/types/rocket.type.ts';

type RocketWithIndex = Rocket & {
  index: number;
};

export { type RocketWithIndex };
