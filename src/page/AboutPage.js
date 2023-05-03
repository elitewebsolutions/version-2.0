import React, { useEffect, useState } from 'react';
import useContentful from "../useContentful";
import AboutLanding from '../components/About/LandingPage';
import TechnologyUsed from '../components/About/TechnologyUsed';
import OurWorkCulture from '../components/About/WorkCulture';
import Project from "../components/About/Project";
import ProjectRating from '../components/Home/ProjectRating';


function AboutPage(props) {
    const [about, setAbout] = useState([]);
    const { getAbout, getRating } = useContentful();
    const [rating, setRating] = useState([]);
    const [culture, setCulture] = useState([]);


    useEffect(() => {
        document.title = props.metaAbout
        getAbout().then((res) => {
            setAbout(res.items[0]?.fields)
            setCulture(res.items[0]?.fields?.ourWorkCulture)
        });
        getRating().then((res) => {
            setRating(res);
        })
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className="content-wrapper">
                <AboutLanding image={about?.image} heading={about?.subHeading} />
            </div>
            <Project image1={about?.bannerFourImage} content1={about?.bannerFourContent} image2={about?.bannerFourImageTwo} content2={about?.bannerFourContentTwo} />

            <ProjectRating rating={rating?.items || []} />

            <TechnologyUsed tech={about?.refAboutTechnologyMaster || []} />

            <OurWorkCulture culture={culture} title={about?.titleWorkCulture} />
        </>


    )
}

export default AboutPage
