import React from 'react'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'

const ExperienceArticle = () => {
    return (
        <>
            <VerticalTimeline animate="false">
                <VerticalTimelineElement
                    date="Sept. 2021 to Present"
                >
                    <h3 className="vertical-timeline-element-title">Research Associate</h3>
                    <i className="vertical-timeline-element-subtitle">University of Luxembourg</i>
                    <p>
                        Research in the field of AI for Sofware Engineering; Development of software solutions for our industrial partners; Deployment of Machine Learning pipeline; Supervise Ph.D Student.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="Oct. 2017  to Sept. 2021"
                >
                    <h3 className="vertical-timeline-element-title">PhD Student</h3>
                    <i className="vertical-timeline-element-subtitle">University of Luxembourg</i>
                    <p>
                        Research in the field of AI for Sofware Engineering; Development of software solutions for our industrial partners (Java, Python, JavaScript); Teach classes in Software Engineering.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="May 2016 to Oct. 2017"
                >
                    <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                    <i className="vertical-timeline-element-subtitle">Luxscan, Luxembourg</i>
                    <p>
                        Design and develop feature in realtime system environment (C++): Develop GUI application (Qt); Maintain application developed in a message driven architecture (MQTT).
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="Oct. 2013 to May 2016"
                >
                    <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                    <i className="vertical-timeline-element-subtitle">Advanced Logic Technology, Luxembourg</i>
                    <p>
                        Design and develop data processing algorithms (C++); Develop the user interface of the solution (MFC); Perform low-level optimizations to handle large amount of data.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="Oct. 2012 to Apr. 2013"
                >
                    <h3 className="vertical-timeline-element-title">Research Assistant</h3>
                    <i className="vertical-timeline-element-subtitle">University Catholique de Louvain, Belgium</i>
                    <p>
                        Creation of GeoDatabases (PostGIS, ArcGIS); Design and develop agent-driven models (Python, Matlab, Lua); Conduct Geospatial analysis on Landsat images (IDRISI, ArcGIS).
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="Sept. 2010 to Sept. 2012"
                >
                    <h3 className="vertical-timeline-element-title">Master in Bioengineering</h3>
                    <i className="vertical-timeline-element-subtitle">University Catholique de Louvain, Belgium</i>
                    <p>
                        Geospacial Statistics; Machine Learning; Time Series Analysis.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </>
    )
}

export default ExperienceArticle