import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../../../pages/About'
import Error from '../../../pages/Error'
import PostIdPage from '../../../pages/PostIdPage'
import Posts from '../../../pages/Posts'

function AppRouter() {
  return (
    <Routes>
      <Route path='/' element='' />
      <Route exact path='/posts' element={<Posts />} />
      <Route exact path='/posts/:id' element={<PostIdPage />} />
      <Route path='/about' element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default AppRouter