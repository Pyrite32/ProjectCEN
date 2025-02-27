import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import Login from './Login';
import Homepage from './Homepage';
k

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* Use the "element" prop to specify the component to render for each route */}
          {/* The leading slash ("/") indicates an absolute path */}
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Homepage" element={<Homepage />} />

        </Routes>
      </div>



    </BrowserRouter>
  );
}

export default App;



