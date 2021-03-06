import React from 'react'
import { Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Login = () => {

  const submitData = (e) => {
    e.preventDefault()
    console.log('working!');
    console.log(e.target);
  }

  return (
    <div>
      <Card className="mt-3">
        <Card.Body className="p-1 pr-2 pl-2">
          <form className="mt-2 fd-c g-1" onSubmit={submitData}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username"/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password"/>
            <div className="jc-c">
              <button className="btn btn-blue mr-2">
                Login
              </button>
              <NavLink to="/signin" className="btn btn-green">
                Registro
              </NavLink>
            </div>
          </form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Login
