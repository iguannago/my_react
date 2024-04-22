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
      <img
        src="./assets/get-in-the-cloud.jpg"
        className="img-fluid rounded mx-auto d-block w-100"
        alt="get in the cloud"
      />
      <HelloWorld1 alertMessage={'This is an important message.'} />
    </>
  );
};

const David = () => {
  return <div>David</div>;
};

export default App;
