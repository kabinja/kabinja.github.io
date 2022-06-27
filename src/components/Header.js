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
        Passionate about Software Engineering, I have dedicated my carrier on the design, development and analysis of complex data-driven systems. As such, I focused my work on AI4SE as well as SE4AI.
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
