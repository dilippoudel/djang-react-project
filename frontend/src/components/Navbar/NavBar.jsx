import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
  const [user, setUser] = useState(false)
  useEffect(() => {
    isUserLogin()
  }, [])
  const isUserLogin = () => {
    const token = localStorage.getItem('access')
    if (token) {
      setUser(true)
    }
  }
  const Logout = () => {
    return (
      <li className="nav-item">
        <Link className="nav-link" to="/logout">
          <button type="button" className="btn btn-danger">
            Log Out
          </button>
        </Link>
      </li>
    )
  }
  const Login = () => {
    return (
      <>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Sign In
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Sign up
          </Link>
        </li>
      </>
    )
  }

  return (
    <nav
      className="navbar bg-primary navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/src/images/logo.jpg" alt="logo" width={60} height={60} />
        </Link>
        <Link className="navbar-brand" to="/home"></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/publication">
                Publications
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/packages">
                Packages
              </Link>
            </li>

            {user ? Logout() : Login()}

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select Language
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/en">
                    English
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/fi">
                    Finnish
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/np">
                    Nepali
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
