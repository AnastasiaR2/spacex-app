import { Button, HeartIcon } from '~/components/components.ts';
import GlobalStyle from '~/global-style.ts';

function App() {
  return (
    <>
      <GlobalStyle />
      <Button>Sign in</Button>
      <Button>
        <HeartIcon />
      </Button>
    </>
  );
}

export { App };
