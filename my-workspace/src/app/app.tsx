// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <NxWelcome title="my-workspace" />
      {/* todo: add my hello world component */}
    </div>
  );
}

export default App;