// eslint-disable-next-line @typescript-eslint/no-unused-vars
import HelloWorld1 from 'src/components/HelloWorld/HelloWorld1/HelloWorld1';
import styles from './app.module.scss';

export function App() {
  return (
    <div>
      <HelloWorld1 alertMessage={'This is an important message.'} />
    </div>
  );
}

export default App;
