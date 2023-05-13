import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { Tab } from "./TabMenu";
import PortfolioCard from "./PortfolioCard";
import useContentful from "../../useContentful";

function TabList() {
  const [activeTab, setActiveTab] = useState(0);
  const [content, setContent] = useState([]);
  const [allData, setAllData] = useState([]);
const [loader,setLoader] = useState(false);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setLoader(true)
  };

  const {  getPortfolio } = useContentful();

  useEffect(() => {
    setLoader(true)
    getPortfolio().then((res) => {
      setContent(res?.items?.map((port) => port));
      setAllData(res)
      setLoader(false)
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const id = Tab[activeTab].id;
    if (id === "all") {
      setContent(allData?.items?.map((port) => port));
      setLoader(false)
    } else {
      const filterData = allData?.items?.filter(
        (port) => port.fields.id === id
      );
      setLoader(false)
      setContent(filterData);
    }
/* eslint-disable react-hooks/exhaustive-deps */

  }, [activeTab]);

  return (
    <section className="portfolioListing serviceDetPageExp1 portfolioListingPage">
      <div className="wrapper">
        <Container fluid className="p-0">
          <div className="tab-list">
            <ul className="tabs">
              {Tab.map((tab, index) => (
                <li
                  key={index}
                  className={index === activeTab ? "active" : ""}
                  onClick={() => handleTabClick(index)}
                >
                  {tab.title}
                </li>
              ))}
            </ul>
          </div>

          {loader?<Spinner animation="grow"/>: <PortfolioCard  content={content} />}
        </Container>
      </div>
    </section>
  );
}

export default TabList;
