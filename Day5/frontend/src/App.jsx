import React from 'react'
import Register from './components/Register'
import View from './components/View'
import Delete from './components/Delete'
import Update from './components/Update'
const App = () => {
  return (
    <div>
      <h1 style={{backgroundColor:'greenyellow'}}>User Registration Form</h1>
      <Register/>
      <Update/>      
      <View/>
      <Delete/>
      <h1>Designed and Developed by Devansh Vashishtha</h1>
    </div>
  )
}

export default App