import React from 'react'
import { Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Home.scss'

const Home = () => {
  
  return (
    <div className="mt-3">
      <div className="title ai-c jc-c">
        <h4>Productos</h4>
      </div>
      <Card>
        <Card.Body className="jc-c g-1 fd-c p-2">
            <Card.Title className="ta-c">
              <p>Producto 1</p>
            </Card.Title>
            <Card.Text className="ta-j">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam ex voluptate quae vero asperiores beatae animi, facere eos cum totam?
            </Card.Text>
            <div className="jc-c m-1">
              <NavLink to="/details" className="btn">Ver Detalles</NavLink>
            </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Home
