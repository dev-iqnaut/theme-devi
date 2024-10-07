import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Star = () => {
  return (
    <div>
        <FontAwesomeIcon icon={faStar} className='text-yellow-500'/>
    </div>
  )
}

export default Star