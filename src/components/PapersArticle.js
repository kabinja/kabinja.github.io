import React from 'react'
import Paper from './paper'

import icse2022 from '../pdf/icse2022.pdf'
import phd2021 from '../pdf/phd2021.pdf'
import kdd2020 from '../pdf/kdd2020.pdf'
import fse2019 from '../pdf/fse2019.pdf'
import issta2019 from '../pdf/issta2019.pdf'
import icst2019 from '../pdf/icst2019.pdf'
import icsme2019 from '../pdf/icsme2019.pdf'

const PapersArticle = () => {
    return (
        <>
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
        </>

    )
}

export default PapersArticle