import React from 'react'
import PropTypes from 'prop-types'

const Paper = (props) => {
    let authors = props.authors.reduce((a,b) => a + ', ' + b)
    return (
    <p>
        <a href={props.link} className="icon fa-download">  </a><b>{props.title}</b>. <i>{authors}</i>. {props.year}. {props.venue}.
    </p>
)}

Paper.propTypes = {
    authors: PropTypes.array,
    title: PropTypes.string,
    year: PropTypes.number,
    venue: PropTypes.string,
    link: PropTypes.string
}

export default Paper