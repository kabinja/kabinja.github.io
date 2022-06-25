import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <ul className="icons">
            <li>
              <a href="https://twitter.com/renaudrwemalika" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/kabinja" className="icon fa-github">
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/renaudrwemalika" className="icon fa-linkedin">
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
