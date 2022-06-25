import PropTypes from 'prop-types'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import Paper from '../components/paper.js'

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
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="Oct. 2017  to Sept. 2021"
            >
              <h3 className="vertical-timeline-element-title">PhD Student</h3>
              <i className="vertical-timeline-element-subtitle">University of Luxembourg</i>
              <p>
                Creative Direction, User Experience, Visual Design, SEO, Online Marketing
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="May 2016 to Oct. 2017"
            >
              <h3 className="vertical-timeline-element-title">Software Engineer</h3>
              <i className="vertical-timeline-element-subtitle">Luxscan, Luxembourg</i>
              <p>
                User Experience, Visual Design
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="Oct. 2013 to May 2016"
            >
              <h3 className="vertical-timeline-element-title">Software Engineer</h3>
              <i className="vertical-timeline-element-subtitle">Advanced Logic Technology, Luxembourg</i>
              <p>
                User Experience, Visual Design
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="Oct. 2012 to Apr. 2013"
            >
              <h3 className="vertical-timeline-element-title">Research Assistant</h3>
              <i className="vertical-timeline-element-subtitle">University Catholique de Louvain, Belgium</i>
              <p>
                Strategy, Social Media
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="Sept. 2010 to Sept. 2012"
            >
              <h3 className="vertical-timeline-element-title">Master in Bioengineering</h3>
              <i className="vertical-timeline-element-subtitle">University Catholique de Louvain, Belgium</i>
              <p>
                Creative Direction, User Experience, Visual Design
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="Sept. 2006 to Sept. 2010"
            >
              <h3 className="vertical-timeline-element-title">Bacherlor in Bioengineering</h3>
              <i className="vertical-timeline-element-subtitle">University Catholique de Louvain, Belgium</i>
              <p>
                Creative Direction, Visual Design
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
            link="https://mpapad.github.io/publications/pdfs/ICSE22___Flakime.pdf"
          />
          <Paper
            title="On the Maintenance of System User Interactive Tests"
            authors={["Renaud Rwemalika"]}
            year={2021}
            venue="Ph.D. Thesis from the University of Luxembourg"
            link="https://mpapad.github.io/publications/pdfs/ICSE22___Flakime.pdf"
          />
          <Paper
            title="Data-Driven Simulation and Optimization for Covid-19 Exit Strategies"
            authors={["Salah Ghamizi", "Renaud Rwemalika", "Maxime Cordy", "Lisa Veiber", "Tegawendé F. Bissyandé", "Mike Papadakis", "Jacques Klein", "Yves Le Traon"]}
            year={2020}
            venue="Proceedings of the 26th ACM SIGKDD International Conference on Knowledge Discovery & Data Mining"
            link="https://mpapad.github.io/publications/pdfs/ICSE22___Flakime.pdf"
          />
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
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
