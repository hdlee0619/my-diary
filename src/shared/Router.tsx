import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/Write';
import Login from '../pages/Login';

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="write/" element={<About />} />
        <Route path="login/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
