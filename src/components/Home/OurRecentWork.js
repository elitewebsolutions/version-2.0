import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "./home.css";
import btn_arrow from "../../assets/btn-arrow.png";
import btn_link from "../../assets/btn_link.svg";
import { Link } from "react-router-dom";

function ProjectCard({ card }) {
  return (
    <div
      className="ourRecentWorkHomeBox"
      style={{ backgroundColor: card?.fields?.cardColor }}
    >
      <img
        src={card?.fields?.icon?.fields?.file?.url}
        alt={card?.fields?.title}
      />
      <h6 className="text-white">{card?.fields?.title}</h6>
      <div className="recentWorkButton d-flex gap-4 justify-content-end align-items-center">
        <a
          className="visitSiteLink"
          href={card?.fields?.projectLink}
          target="_blank"
          rel="noreferrer"
        >
          VISIT SITE <img src={btn_link} className="img-size" alt="box" />
        </a>

      </div>
    </div>
  );
}

function OurRecentWork({ home }) {
  const projectCards = (item) => {
    const cards = item?.fields?.projectCard?.map((card, key) => (
      <Col
        lg={card?.fields?.cardSize ? "4" : "8"}
        key={key}
        className="singleRecentWork"
      >
        {[...new Array(1)].map((i, index) => (
          <React.Fragment key={index}>
            {index % 2 === 0 ? (
              <ProjectCard card={card} />
            ) : (
              <ProjectCard card={card} />
            )}
          </React.Fragment>
        ))}
      </Col>
    ));
    return cards;
  };

  return (
    <section className="homeRecentWork">
      <div className="wrapper">
        <Container fluid className="p-0">
        
          <Row className="">
            <Col lg={12}>
              <div className="text-center ourWorkrecentHome">
                {home?.items?.map((item, index) => (
                  <div key={index}>
                    {documentToReactComponents(item.fields.bannerFive)}
                  </div>
                ))}
              </div>
            </Col>
          </Row>

          <Row className="recentWorkListing">
            {home?.items?.map((item, key) => (
              <React.Fragment key={key}>{projectCards(item)}</React.Fragment>
            ))}
          </Row>

          <div
            className="text-center justify-content-center d-flex gap-3 align-items-center"
            style={{ cursor: "pointer" }}
          >
            {home?.items?.map((item, index) => (
              <div
                key={index}
                className="serviceBtnHomePage d-flex align-items-center"
              >
                <Link
                  className=""
                  to={item.fields.allProjectLink}
                >
                  <img src={btn_arrow} className="img-size" alt="box" />
                </Link>
                <Link
                  to={item.fields.allProjectLink}
                  className="ml-4 fw-bold"
                >
                  VIEW ALL PROJECTS
                </Link>
              </div>
            ))}
          </div>


        </Container>
      </div>
    </section>
  );
}

export default OurRecentWork;
