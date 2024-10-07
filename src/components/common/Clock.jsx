import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Clock = () => {
  return (
    <div>
        <div><FontAwesomeIcon icon={faClock}/></div>
    </div>
  )
}

export default Clock