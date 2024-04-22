import HelloWorld1 from 'src/components/HelloWorld/HelloWorld1/HelloWorld1';
import { Route, Navigate, Routes } from 'react-router-dom';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/david" element={<David />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

const Home = () => {
  return (
    <>
      <div>Welcome to my Reactjs playground.</div>
      <HelloWorld1 alertMessage={'This is an important message.'} />
    </>
  );
};

const David = () => {
  return <div>David</div>;
};

export default App;
