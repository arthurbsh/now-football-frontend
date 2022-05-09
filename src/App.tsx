import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Test from './screens/test/Test';
import Frontpage from './screens/frontpage/Frontpage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Frontpage />}></Route>
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
