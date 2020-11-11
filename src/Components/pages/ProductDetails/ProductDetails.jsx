import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './ProductDetails.scss'

const ProductDetails = (props) => {
  useEffect(() => {
    console.log(props);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const {product} = props.location

  return (
    <div className="fd-c ai-c mt-3 g-2">
      <Card>
        <Card.Body className="jc-c g-1 fd-c p-2">
          <Card.Title className="ta-c">
            <h5>{product.title}</h5>
          </Card.Title>

          <div className="jc-sb fd-c g-1 ta-c">
            <div className="ta-c">
              <p className="gray">
                <span className="bold">Category: </span>
                {product.category}
              </p>
            </div>

            <p>{product.description}</p>
            <h6>${product.price}</h6>

            <div className="ta-c">
            <Card.Img src={product.image} className="product-image"/>
            </div>

            <div className="jc-c m-1 g-2">
              <button className="btn btn-green">
                Comprar
              </button>
              <NavLink to="/home">
                <div className="btn">Volver</div>
              </NavLink>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProductDetails
