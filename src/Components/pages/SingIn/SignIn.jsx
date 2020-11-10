import React from 'react'
import { Card } from 'react-bootstrap'

const SignIn = () => {

  const submitData = (e) => {
    e.preventDefault()
    console.log('working!');
    console.log(e.target);
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <form className="mt-2 fd-c g-1" onSubmit={submitData}>
            <label htmlFor="firstname">First Name</label>
            <input type="text" name="firstname"/>
            <label htmlFor="lastname">Last Name</label>
            <input type="text" name="lastname"/>
            <label htmlFor="username">Username</label>
            <input type="text" name="username"/>
            <label htmlFor="email">Email</label>
            <input type="email" name="email"/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password"/>
            <div className="jc-c">
              <button className="btn btn-blue">
                Registro
              </button>
            </div>
          </form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SignIn
