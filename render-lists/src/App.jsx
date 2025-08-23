import React from 'react'
import List from './List.jsx';
function App() {
  const Fruits=[{id:1,name:'Apple',calories:100},
                {id:2,name:'Banana',calories:200},
                {id:3,name:'Orange',calories:300}]; 

  const Vegetables=[{id:1,name:'Potato',calories:100},
                    {id:2,name:'Tomato',calories:200},
                    {id:3,name:'Cabbage',calories:300}];
  return (
    <>
      
      <List items={Fruits} category="Fruits" />
      <List items={Vegetables} category="Vegetables" />
    </>
  )
}

export default App