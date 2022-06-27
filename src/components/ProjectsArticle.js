import React from 'react'
import Project from './Project'

const ProjectsArticle = () => {
    return (
        <>
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
        </>
    )
}

export default ProjectsArticle