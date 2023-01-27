import { Route, Routes } from "react-router-dom"

import Navbar from './components/Navbar/Navbar'

import Home from './pages/Home.js'
import PageNotFound from './pages/PageNotFound.js'

import Items from './pages/Items.js'
import Item from './pages/Item.js'
import AddItem from './pages/AddItem'
import Sales from './pages/Sales.js'
import AddSale from './pages/AddSale.js'

import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="items" element={<Items />} />
          <Route path="/item/:id" element={<Item />} />
          <Route path="add-item" element={<AddItem />} />
          <Route path="sales" element={<Sales />} />
          <Route path="add-sale" element={<AddSale />} />
        </Routes>
      </div>
    </ >
  );
}