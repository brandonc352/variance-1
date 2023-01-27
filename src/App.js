import { Route, Routes } from "react-router-dom"

import Navbar from './components/Navbar/Navbar'

import Home from './pages/Home.js'
import PageNotFound from './pages/PageNotFound.js'

import Items from './pages/Items.js'
import Sales from './pages/Sales.js'

import './App.css';

export default function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="items" element={<Items />} />
          <Route path="sales" element={<Sales />} />
        </Routes>
        <Navbar />
      </div>
    </ >
  );
}