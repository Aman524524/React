import React from 'react'

function Button() {

const clicked1=(name)=>  console.log("you are clicking me "+name)
let count=0; 
const clicked2=(name)=>
{
    if(count<3){
      count++;
      console.log(`${name} you clicked me ${count} times`)
    }
    else{
        console.log(`${name} daddy dont click me again and again!`)

    }

}
  return (<>
<button onClick ={()=>clicked1("Aman")}>Click Me</button>
<button onClick ={()=>clicked2("Aman")}>Click Me Again</button>
</>
)
}

export default Button