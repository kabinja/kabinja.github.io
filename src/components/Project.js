import React from 'react'
import PropTypes from 'prop-types'

const Project = (props) => {
    return (
    <p>
        <h3><a href={props.link} className="icon fa-github" target="_blank" rel="noreferrer"></a>{props.title}</h3>
        <p>{props.description}</p>
    </p>
)}

Project.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string
}

export default Project