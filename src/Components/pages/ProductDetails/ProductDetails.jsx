import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductDetails = () => {
  return (
    <div className="fd-c ai-c mt-3 g-2">
      <p>ProductDetails works!</p>
      <NavLink to="/home">
        <div className="btn">Volver</div>
      </NavLink>
    </div>
  )
}

export default ProductDetails
