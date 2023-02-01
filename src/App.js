import { Route, Routes } from "react-router-dom"

import Navbar from './components/Navbar/Navbar'
import Home from './components/pages/HomePage/Home.js'
import PageNotFound from './components/pages/PageNotFound/index.js'

import AddItem from './components/pages/AddItem/index.js'
import AllItems from './components/pages/AllItems/index.js'
import SingleItem from './components/pages/SingleItem/index.js'

import AddSale from './components/pages/AddSale/index.js'
import AllSales from './components/pages/AllSales/index.js'

import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="add-item" element={<AddItem />} />
          <Route path="items" element={<AllItems />} />
          <Route path="/item/:id" element={<SingleItem />} />
          <Route path="add-item" element={<AddItem />} />
          <Route path="sales" element={<AllSales />} />
          <Route path="add-sale" element={<AddSale />} />
        </Routes>
      </div>
    </ >
  );
}