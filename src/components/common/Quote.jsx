import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Quote = () => {
  return (
    <div>
        <div><FontAwesomeIcon icon={faQuoteLeft} className='w-[80px] h-[80px] text-gray-200'/></div>
    </div>
  )
}

export default Quote