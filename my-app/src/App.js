import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Counter from './pages/Counter';
import Input from './pages/Input';
import Input2 from './pages/Input2';
import List from './pages/List';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> ㅣ<Link to="/about">About</Link> ㅣ
        <Link to="/login">Login</Link> ㅣ<Link to="/logout">Logout</Link> ㅣ
        <Link to="/counter">Counter</Link> ㅣ <Link to="/input">Input</Link>
        <Link to="/input2">Input2</Link> ㅣ <Link to="/list">List</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/input" element={<Input />} />
        <Route path="/input2" element={<Input2 />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
