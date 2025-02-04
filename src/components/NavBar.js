import React, { Component } from 'react'

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className= "navbar-brand" href="/">NewsHub</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-a className= " aria-current="page" href="/">Home</a>
                </li>             
                <li className="nav-item"><a className= "nav-a className=" href="/Business">Business</a ></li>
                <li className="nav-item"><a className= "nav-a className=" href="/Entertainment">Entertainment</a ></li>
                <li className="nav-item"><a className= "nav-a className=" href="/General">General</a ></li>
                <li className="nav-item"><a className= "nav-a className=" href="/Health">Health</a ></li>
                <li className="nav-item"><a className= "nav-a className=" href="/Science">Science</a ></li>
                <li className="nav-item"><a className= "nav-a className=" href="/Sports">Sports</a></li>
                <li className="nav-item"><a className= "nav-a className=" href="/Technology">Technology</a></li>
            </ul>
            </div>
        </div>
        </nav>
      </div>
    )
  }
}

export default NavBar
