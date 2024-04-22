import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from 'react-router-dom';
import Home from 'src/components/Home/Home';
import Menu from 'src/components/Menu/Menu';
import './app.module.scss';

export function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hello-world" element={<div>Hello World</div>} />
        <Route path="/list" element={<div>List</div>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
