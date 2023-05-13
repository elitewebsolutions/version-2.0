import { createClient } from "contentful";

const useContentful = () => {
    const client = createClient({
        space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
        accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
        host: process.env.REACT_APP_CONTENTFUL_HOST,
    });



    const getHome = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "homePage",
                select: "fields",
            });
            //   const sanitizedEntries = entries.items.map((item) => {
            //     const data = item.fields;
            //     return {
            //       data,
            //     };
            //   });
            return entries;
        } catch (err) {
            console.error(err);
        }
    };
    const getServicesLanding = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "services",
                select: "fields",
            });

            return entries;
        } catch (err) {
            console.error(err);
        }
    };
    const getServiceIndex = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "serviceIndex",
                select: "fields",
            });

            return entries;
        } catch (err) {
            console.error(err);
        }
    };
    const getServiceDetail = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "serviceDetail",
                select: "fields",
            });

            return entries;
        } catch (err) {
            console.error(err);
        }
    };
    const getPricing = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "pricing",
                select: "fields",
            });

            return entries;
        } catch (err) {
            console.error(err);
        }
    };
    const getAbout = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "aboutPage",
                select: "fields",
            });
            return entries;
        } catch (err) {
            console.error(err);
        }
    };
    const getRating = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "rating",
                select: "fields",
            });
            return entries;
        } catch (err) {
            console.error(err);
        }
    };
    const getServiceBrand = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "serviceBrand",
                select: "fields",
            });
            return entries;
        } catch (err) {
            console.error(err);
        }
    };
    const getPortfolio = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "portfolio",
                select: "fields",
            });
            return entries;
        } catch (err) {
            console.error(err);
        }
    };
    const getPortfolioLandingPage = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "portfolioLandingPage",
                select: "fields",
            });
            return entries;
        } catch (err) {
            console.error(err);
        }
    };




    return { getHome, getServiceIndex, getServiceDetail, getServicesLanding,
        getPortfolioLandingPage,
        getPricing, getAbout, getRating, getServiceBrand,getPortfolio };
};

export default useContentful;
