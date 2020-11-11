import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Home.scss'
import Spinner from './../../../assets/img/spinner.gif'

const Home = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const getData = async() => {
    setLoading(true)
    const res = await Axios.get('https://fakestoreapi.com/products')
    setProducts(res.data)
    setLoading(false)
    console.log(res.data);
  }
  
  useEffect(() => {
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    loading ? 
    (
    <div className="jc-c ai-c">
      <img src={Spinner} alt="loading spinner"/>
    </div>
    )
    :
    (<div className="mt-3">
      <div className="title ai-c jc-c">
        <h4 className="border">Productos</h4>
        <hr/>
      </div>
      {
        products.map(product => (
          <Card key={product.id} className="card mt-1 mb-1">
            <Card.Body className="jc-c g-1 fd-c p-2">
              <Card.Title className="ta-c">
                <h5>{product.title}</h5>
              </Card.Title>
              <div className="ta-c">
                <Card.Img src={product.image} className="product-image"/>
              </div>
              <div className="jc-c m-1">
                <NavLink to={{
                  pathname: '/details',
                  product: product
                }} className="btn">Ver Detalles</NavLink>
              </div>
            </Card.Body>
          </Card>
        ))
      }
    </div>)
  )
}

export default Home
