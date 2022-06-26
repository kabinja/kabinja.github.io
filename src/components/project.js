import React from 'react'
import PropTypes from 'prop-types'

const Project = (props) => {
    return (
    <p>
        <a href={props.link} className="icon fa-github">  </a><h1>{props.title}</h1>
        <p>{props.description}</p>
    </p>
)}

Project.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string
}

export default Project