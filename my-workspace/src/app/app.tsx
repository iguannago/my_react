import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from 'react-router-dom';
import Home from 'src/components/Home/Home';
import Menu from 'src/components/Menu/Menu';
import './app.module.scss';
import Footer from 'src/components/Footer/Footer';
import HelloWorld2 from 'src/components/HelloWorld/HelloWorld2/HelloWorld2';

export function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="main-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/hello-world"
              element={
                <HelloWorld2 alertMessage={'This is an important message.'} />
              }
            />
            <Route path="/list" element={<div>List</div>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
