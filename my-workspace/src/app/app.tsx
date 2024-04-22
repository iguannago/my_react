import HelloWorld1 from 'src/components/HelloWorld/HelloWorld1/HelloWorld1';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/kumar"
          element={
            // <HelloWorld1 alertMessage={'This is an important message.'} />
            <div>hello</div>
          }
        />
        <Route
          path="/david"
          element={
            <HelloWorld1 alertMessage={'This is an important message.'} />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
