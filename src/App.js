import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import CustomContext from './component/hooks/useContext';
import NotFound from './pages/NotFound';
import Details from './pages/Details';
import EditUser from './pages/EditUser';


function App() {
  return (
    <CustomContext>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<Details/>} />
        <Route path="/edit/:id" element={<EditUser/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </CustomContext>
  );
}

export default App;
