import { faShare, faShareNodes, faSquareShareNodes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ShareIcon = () => {
  return (
    <div>
        <FontAwesomeIcon icon={faShareNodes} className='text-white w-5 h-5 '/>
    </div>
  )
}

export default ShareIcon