import PropTypes from 'prop-types'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import Paper from '../components/paper.js'
import Project from './project.js'

import icse2022 from '../pdf/icse2022.pdf'
import phd2021 from '../pdf/phd2021.pdf'
import kdd2020 from '../pdf/kdd2020.pdf'
import fse2019 from '../pdf/fse2019.pdf'
import issta2019 from '../pdf/issta2019.pdf'
import icst2019 from '../pdf/icst2019.pdf'
import icsme2019 from '../pdf/icsme2019.pdf'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="experience"
          className={`${this.props.article === 'experience' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Experience</h2>
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
          {close}
        </article>

        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>

          <Project
            title="html-mutation"
            description="Library written in Python allowing to mutate HTML documents."
            link="https://github.com/serval-uni-lu/html-mutation"
          />
          <Project
            title="ikora-core"
            description="Library written in Java that provides a parser for Robot Framwork and builds the AST and call graph of a Robot Framework project. It comes with basic static analysis functionalities which can be extended through its API."
            link="https://github.com/serval-uni-lu/ikora-core"
          />
          <Project
            title="ikora-smells"
            description="Library written in Java built on top of ikora-core and allows to detect Test Smells present in Robot Framework code."
            link="https://github.com/serval-uni-lu/ikora-smells"
          />
          <Project
            title="commons-git-utils"
            description="Library written in Java that provides a parser for Robot Framwork written in Java that builds the AST and call graph of a Robot Framework project. It comes with basic static analysis functionalities which can be extended through its API."
            link="https://github.com/serval-uni-lu/java-commons-git-utils"
          />
          <Project
            title="commons-runner-utils"
            description="Library written in Java that provides a set of functionalities to automatically build and analyze maven projects. This library is useful for researchers that need to analysis large quantities of software repositories."
            link="https://github.com/serval-uni-lu/java-commons-runner-utils"
          />
          <Project
            title="flakime"
            description="Maven Plugin that allows to inject flakiness in order to study its impact on different software engineering techniques."
            link="https://github.com/serval-uni-lu/flakime"
          />
          <Project
            title="ikora-evolution"
            description="CLI that allows to analyze the evolution of Robot Framework test suites."
            link="https://github.com/serval-uni-lu/ikora-evolution"
          />
          <Project
            title="ikora-evolution"
            description="Library written in JavaScript that allows to extract the current DOM state with its images and store everything in a single file."
            link="https://github.com/kabinja/dom-with-styles"
          />
          <Project
            title="ikora-evolution"
            description="SonarQube Plugin to support Robot Framework in SonarQube."
            link="https://github.com/kabinja/sonar-ikora-plugin"
          />
          <Project
            title="hpath"
            description="Library written in JavaScript that generates robust DOM locators relying on the rendering of the HTML document."
            link="https://github.com/kabinja/hpath"
          />
          {close}
        </article>

        <article
          id="papers"
          className={`${this.props.article === 'papers' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Publications</h2>

          <Paper
            title="FlakiMe: Laboratory-Controlled Test Flakiness Impact Assessment"
            authors={["Maxime Cordy", "Renaud Rwemalika", "Adriano Franci", "Mike Papadakis", "Mark Harman"]}
            year={2022}
            venue="Proceedings of the 44th International Conference on Software Engineering"
            link={icse2022}
          />
          <Paper
            title="On the Maintenance of System User Interactive Tests"
            authors={["Renaud Rwemalika"]}
            year={2021}
            venue="Ph.D. Thesis from the University of Luxembourg"
            link={phd2021}
          />
          <Paper
            title="Data-Driven Simulation and Optimization for Covid-19 Exit Strategies"
            authors={["Salah Ghamizi", "Renaud Rwemalika", "Maxime Cordy", "Lisa Veiber", "Tegawendé F. Bissyandé", "Mike Papadakis", "Jacques Klein", "Yves Le Traon"]}
            year={2020}
            venue="Proceedings of the 26th ACM SIGKDD International Conference on Knowledge Discovery and Data Mining"
            link={kdd2020}
          />
          <Paper
            title="The Importance of Accounting for Real-World Labelling When Predicting Software Vulnerabilities"
            authors={["Matthieu Jimenez", "Renaud Rwemalika", "Mike Papadakis", "Federica Sarro", "Yves Le Traon", "Mark Harman"]}
            year={2019}
            venue="Proceedings of the 27th ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering"
            link={fse2019}
          />
          <Paper
            title="Ukwikora: Continuous Inspection for Keyword-Driven Testing"
            authors={["Renaud Rwemalika", "Marinos Kintis", "Mike Papadakis", "Yves Le Traon", "Pierre Lorrach"]}
            year={2019}
            venue="Proceedings of the 28th ACM SIGSOFT International Symposium on Software Testing and Analysis"
            link={issta2019}
          />
          <Paper
            title="An industrial study on the differences between pre-release and post-release bugs"
            authors={["Renaud Rwemalika", "Marinos Kintis", "Mike Papadakis", "Yves Le Traon", "Pierre Lorrach"]}
            year={2019}
            venue="Proceedings of the 35th IEEE International Conference on Software Maintenance and Evolution"
            link={icsme2019}
          />
          <Paper
            title="On the Evolution of Keyword-Driven Test Suites"
            authors={["Renaud Rwemalika", "Marinos Kintis", "Mike Papadakis", "Yves Le Traon", "Pierre Lorrach"]}
            year={2019}
            venue="Proceedings of the 12th IEEE International Conference on Software Testing, Verification and Validation"
            link={icst2019}
          />
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
