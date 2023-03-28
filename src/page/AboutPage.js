import React, { useEffect } from 'react'
import AboutLanding from '../components/About/LandingPage'
import TechnologyUsed from '../components/About/TechnologyUsed'
import OurWorkCulture from '../components/About/WorkCulture'
import Project from '../components/Home/Project'
import ProjectRating from '../components/Home/ProjectRating'
function AboutPage(props) {

    useEffect(() => {
        document.title = props.metaAbout
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <div className="content-wrapper">
                <AboutLanding />
            </div>
            <Project />
            <ProjectRating />
            <TechnologyUsed />

            <OurWorkCulture />
        </>


    )
}

export default AboutPage