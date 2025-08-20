import React from 'react'
import Greet from './Greet'
import pic from './assets/dudh.png'

function App() {
  return (<>
    <Greet islogin={true} Username="John" age ={25} />
    <Greet img src={pic} islogin={true} Username="Dudhu" age ={25}/>
    </>

  )
}

export default App
