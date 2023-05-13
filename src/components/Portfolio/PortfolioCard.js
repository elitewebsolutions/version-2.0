import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function PortfolioCard({ content }) {
  const projectCards = (item) => {
    return (
      <div
        className="ourRecentWorkHomeBox ourPortfolioCardBox mb-5"
        style={{ backgroundColor: item?.fields?.color || "black" }}
        key={item?.fields?.id}
      >
        <Row>
          <Col xl={6}>
            <div>
              <img
                src={item?.fields?.smallIcons?.fields?.file?.url}
                alt={item?.fields?.id}
                className="portfolio_logo"
              />
              <div className="portfolio-content">
                {documentToReactComponents(item?.fields?.description)}
              </div>

              <div
                className="recentWorkButton d-flex gap-4 align-items-center"
                style={{ left: "28px" }}
              >
                <a
                  className="btn1 btn-sm undefined btn--primary undefined btn--medium"
                  href={item?.fields?.visitSiteUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  VISIT SITE
                </a>
                <div>
                {
                  (item?.fields?.viewCaseStudyUrl)
                  ? <a
                    className="btn1 btn-sm undefined btn--primary undefined btn--medium"
                    href={item?.fields?.viewCaseStudyUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>VIEW CASE STUDY</span>
                  </a>
                  : ''
                }
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className="portfolio_desktop">
              <img
                src={item?.fields?.bigImage?.fields?.file?.url}
                alt={item?.fields?.id}
                className="img-size"
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  };

  return (
    <section className="homeRecentWork1">
        <Container fluid className="p-0">
          <Row className="recentWorkListing mb-5">
            {content?.map((item, key) => (
              <React.Fragment key={key}>{projectCards(item)}</React.Fragment>
            ))}
          </Row>
        </Container>
    </section>
  );
}

export default PortfolioCard;
