import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/Write';
import Login from '../pages/Login';

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login/" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="write/" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
