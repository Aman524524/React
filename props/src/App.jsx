import React from 'react'
import Student from './student.jsx'
function App() {
  return (
    <>
      <Student name='dudha' age={20} isStudent={true}/>
      <Student name="Sagra" age={21} isStudent={true}/>
      <Student name='ritesh' age={22} isStudent={true}/>
      <Student name='Anmol' age={20} isStudent={true}/>
      <Student name='GHOP'/>
    </>
    
  )
}

export default App