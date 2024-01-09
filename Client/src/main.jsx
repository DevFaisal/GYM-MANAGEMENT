import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Routes } from 'react-router-dom'
import Layout from '../Layout.jsx'
import Home from './components/Home/Home.jsx'
import Register from './components/Register/Register.jsx'
import Login from './components/Login/Login.jsx'
import Store from './Store/Store.js'
import { Provider, useSelector } from 'react-redux'
import Logout from './components/Logout/Logout.jsx'
import ProtectedRoute from './ProtectedRoute/ProtectedRoute.jsx'
import Dashboard from './components/Dashboard/Dashboard';
import Packages from './components/Packages/Packages';


const router = createBrowserRouter(
  createRoutesFromElements(

    // <Route path='' element={<ProtectedRoute />}>
    //   <Route path='/' element={<Home />} />
    //   <Route path='/about' element={<h1>About</h1>} />
    //   <Route path='/logout' element={<Logout />} />
    // </Route>,

    <Route path='' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />

      <Route path='/profile' element={
        <ProtectedRoute >
          <h1>Profile</h1>
        </ProtectedRoute >}>
      </Route>

      <Route path='/dashboard' element={
        <ProtectedRoute >
          <Dashboard />
        </ProtectedRoute >}>
      </Route>

      <Route path='/contact' element={
        <ProtectedRoute >
          <h1>Contact</h1>
        </ProtectedRoute >}>
      </Route>
      <Route path='/packages' element={
        <ProtectedRoute >
          <Packages />
        </ProtectedRoute >}>
      </Route>

      <Route path='/logout' element={
        <ProtectedRoute >
          <Logout />
        </ProtectedRoute >}>
      </Route>

      <Route path='/about' element={
        <ProtectedRoute >
          <h1>About</h1>
        </ProtectedRoute >}>
      </Route>

    </Route >,

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
