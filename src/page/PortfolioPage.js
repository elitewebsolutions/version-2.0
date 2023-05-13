import React, { useEffect, useState } from 'react';
import useContentful from "../useContentful";

import PortfolioLanding from '../components/Portfolio/PortfolioLading';
import TabList from '../components/Portfolio/TabList';

function PortfolioPage(props) {
    const [about, setAbout] = useState([]);
    const { getAbout, getRating } = useContentful();
    const [rating, setRating] = useState([]);
    const [culture, setCulture] = useState([]);


    useEffect(() => {
        document.title = props.metaPortfolio
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
            <div className="content-wrapper-service-det">
                <PortfolioLanding />
            </div>
            <TabList/>


        </>


    )
}

export default PortfolioPage
