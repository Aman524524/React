import React from 'react'
import Student from './student.jsx'
import pic from './assets/dudh.png'

function App() {
  return (
    <>
      <Student src={pic} name='dudha' age={20} isStudent={true}/>
      <Student name="Sagra" age={21} isStudent={true}/>
      <Student name='ritesh' age={22} isStudent={true}/>
      <Student name='Anmol' age={20} isStudent={true}/>
      <Student name='GHOP'/>
    </>
    
  )
}

export default App