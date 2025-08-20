import React from 'react'
import PropTypes from 'prop-types'

function Greet(props){

      <p className='helo'>{ props.src && <img src={props.src} alt={props.name} width="100" />}</p>

const message=<h2 className='ghop'><p className='helo'>
              { props.src && <img src={props.src} 
              alt={props.name} width="100" />}</p>
              Welcome {props.Username}  
             <br/> age:{props.age} </h2>


const login=<h2>Login first</h2>

  return (props.islogin ? message : login)
    
  
}
Greet.propTypes = {
    islogin: PropTypes.bool,
    username: PropTypes.string,
}
Greet.defaultProps = {
    islogin: false,
    username: "mention the name of user",
    age:'unknown'
}

export default Greet