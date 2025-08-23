import React from 'react'
import propTypes from 'prop-types';
function List(props) {
  const {items, category} = props;

  const itemlist = items.map((item) =><li key={item.id}>
                                       {item.name}: {item.calories}&nbsp;
                                        calories</li>);
  return (
    <><div className='hi'>
        <h2 className='aman'>{category}</h2>
        <ol >{itemlist}</ol>
        </div>
    </>
  )
}

List.propTypes = {
  items: propTypes.array.isRequired,
  category: propTypes.string.isRequired
}

export default List