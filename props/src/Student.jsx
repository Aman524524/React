import React from 'react'
import PropTypes from 'prop-types' /* it should be used to prevent wrong data type. doesnot let app to crash */
function Student(props) {
  return (
    <div className='student'>
        <p className='hi'> Name:{props.name}</p>
        <p>Age:{props.age}</p>
        <p>isStudent:{props.isStudent ? "Yes":"No"}</p>


    </div>
  )
}
Student.propTypes = {    /*  */
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,}

Student.defaultprops={
    name: 'Unknown',
    age: 0,
    isStudent: false,
}



export default Student