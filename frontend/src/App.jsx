import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Store from './pages/Store'
import CreateMerchItems from './pages/CreateMerchItems'
import ShowMerchItem from './pages/ShowMerchItem'
import EditMerchItem from './pages/EditMerchItem'
import DeleteMerchItem from './pages/DeleteMerchItem'


const App = () => {
  return (
    <Routes>
      <Route path = '/' element = {<Home />} />
      <Route path = '/merch-items' element = {<Store />} />
      <Route path = '/merch-items/create' element = {<CreateMerchItems />} />
      <Route path = '/merch-items/details/:id' element = {<ShowMerchItem />} />
      <Route path = '/merch-items/edit/:id' element = {<EditMerchItem />} />
      <Route path = '/merch-items/delete/:id' element = {<DeleteMerchItem />} />
    </Routes>
  )
}

export default App