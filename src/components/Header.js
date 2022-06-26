import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/rwemalika.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
      <img src={logo} alt="" className="logo"></img>
    <div className="content">
      <div className="inner">
        <h1>Renaud Rwemalika Ph.D.</h1>
        <p>
        Living in a world where the complexiy of systems is always incresing while they rely on more and more on data, the most exciting challenge of our generation is to build the tools to support those advancement. This is why I have dedicated my carrier on complex systems quality and data engineering.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('experience')
            }}
          >
            experience
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('projects')
            }}
          >
            projects
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('papers')
            }}
          >
            papers
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
