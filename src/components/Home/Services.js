import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Container, Row, Col } from "react-bootstrap";
import "./home.css";
import btn_arrow_black from "../../assets/btn_arrow_black.svg";

function Services({ home }) {
  const getServiceCards = (item) => {
    const cards = item?.fields?.reviewCards?.map((card, index) => {
      return (
        <div
          key={index}
          className="mt-5 serviceHomeCard d-flex align-items-center flex-column"
        >
          <div className="serviceHomeCardImg">
            <img
              src={card?.fields?.icon?.fields?.file?.url}
              alt={card?.fields?.title}
            />
          </div>
          <h5 className="mt-3">{card?.fields?.title}</h5>
          <div className="serviceListContent text-center mt-2">
            {documentToReactComponents(card?.fields?.description)}
          </div>
          <a className="mt-2 servicesbtn" href={card?.fields?.link}>
            Learn More <img src={btn_arrow_black} className="img-size" alt="box" />
          </a>
        </div>
      );
    });
    return cards;
  };

  return (
    <section className="servicePageHome mt-5">
      <Container fluid className="p-0">
        <Row>
          <Col lg={12}>
            <div className="py-4 serviceContentHome">
              <div className="serviceCoverHome">
                <div className="serviceTitle">
                  {home?.items?.map((item, index) => (
                    <React.Fragment key={index}>
                      <h2>{item.fields.thirdBanner}</h2>
                      <span className="text-center">
                        {documentToReactComponents(
                          item.fields.thirdDescription
                        )}
                      </span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </Col>
          <Col className="rightBar">
            <div className="serviceHomeCardBox">
              {home?.items?.map((item, index) => (
                <React.Fragment key={index}>
                  {getServiceCards(item)}
                </React.Fragment>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;
