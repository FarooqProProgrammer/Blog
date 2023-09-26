import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import { Flex } from '@chakra-ui/react'
import ShowShaw from './Pages/ShowShaw'
import SingleBlog from './Pages/SingleBlog'
import About from './Pages/About'
import Recent from './Pages/Recent'

export default function App() {
  return (
    <Flex>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/showshaw' Component={ShowShaw} />
          <Route path='/singleblog' Component={SingleBlog} />
          <Route path='/about' Component={About} />
          <Route path='/recent' Component={Recent} />
        </Routes>
      </BrowserRouter>
    </Flex>


  )
}
