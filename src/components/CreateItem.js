import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as AddIcon } from '../assets/plus.svg'

const CreateItem = () => {
  return (
    <Link to={'/note/new'} className='floating-button'>
      <AddIcon />
      </Link>
  )
}

export default CreateItem