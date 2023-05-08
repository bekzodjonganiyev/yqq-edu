import React from 'react'
import { useNavigate } from 'react-router-dom'

const FourZeroFour = () => {
  const navigate = useNavigate()
  return (
    <div className='text-center py-60'>
      <h1 className='text-6xl text-center mb-8'>404</h1>
      <button className='text-center py-2 px-4 bg-black text-white rounded-sm'
      onClick={() => window.location.href = "https://www.yangiyerflourtrading.uz"}
      >Bosh sahifaga o'ting</button>
    </div>
  )
}

export default FourZeroFour