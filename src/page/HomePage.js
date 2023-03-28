import React, { useEffect } from 'react'
import About from '../components/Home/About'
import Home from '../components/Home/Home'
import OurPartners from '../components/Home/OurPartners'
import OurRecentWork from '../components/Home/OurRecentWork'
import Project from '../components/Home/Project'
import ProjectRating from '../components/Home/ProjectRating'
import Services from '../components/Home/Services'

function HomePage(props) {

    useEffect(() => {
        document.title = props.metaHome
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <div className="content-wrapper">
                <Home />
            </div>
            <About />
            <div className="content-wrapper-service">
                <Services />
            </div>
            <Project />
            <ProjectRating />
            <OurRecentWork />
            <OurPartners />
        </>
    )
}

export default HomePage