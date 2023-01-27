import { Route, Routes } from "react-router-dom"

import Home from './pages/Home.js'
import PageNotFound from './pages/PageNotFound.js'

import './App.css';

export default function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </ >
  );
}