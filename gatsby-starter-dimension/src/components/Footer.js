import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">
        <a href="https://twitter.com/renaudrwemalika" className="icon fa-twitter"></a>
        <a href="https://github.com/kabinka" className="icon fa-github"></a>
        <a href="https://linkedin.com/in/renaudrwemalika" className="icon fa-linkedin"></a>
        </p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
